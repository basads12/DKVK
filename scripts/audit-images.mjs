import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const AUDIT_MD_PATH = path.join(ROOT, "docs", "beeldaudit.md");
const THUMBS_DIR = path.join(ROOT, "docs", "thumbs");
const OUTPUT_JSON_PATH = path.join(ROOT, "docs", "beeldaudit.json");

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".svg",
  ".heic",
]);

function normalizePath(inputPath) {
  return inputPath.replace(/\\/g, "/");
}

function isImagePath(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return IMAGE_EXTENSIONS.has(ext);
}

function hashPath(filePath) {
  return createHash("sha1").update(filePath).digest("hex").slice(0, 16);
}

function parseVerdictList(markdownContent) {
  const lines = markdownContent.split(/\r?\n/);
  const result = [];
  let currentLabel = null;
  let insideVerdictSection = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (!insideVerdictSection && trimmed === "## Verdict") {
      insideVerdictSection = true;
      continue;
    }

    if (insideVerdictSection && trimmed.startsWith("## ") && trimmed !== "## Verdict") {
      break;
    }

    if (!insideVerdictSection) {
      continue;
    }

    if (trimmed.startsWith("- ✅ Bruikbaar")) {
      currentLabel = "bruikbaar";
      continue;
    }
    if (trimmed.startsWith("- ⚠️ Twijfel")) {
      currentLabel = "twijfel";
      continue;
    }

    // Stop collecting when the verdict block ends.
    if (trimmed.startsWith("- ❌ Onbruikbaar")) {
      currentLabel = null;
      continue;
    }

    if (!currentLabel) {
      continue;
    }

    const bulletMatch = line.match(/^\s*-\s+`([^`]+)`(?:\s+—\s+(.+))?\s*$/);
    if (!bulletMatch) {
      continue;
    }

    result.push({
      status: currentLabel,
      path: normalizePath(bulletMatch[1]),
      note: bulletMatch[2] ?? null,
    });
  }

  return result;
}

function luminanceTag(value) {
  if (value < 90) {
    return "donker";
  }
  if (value > 170) {
    return "licht";
  }
  return "midden";
}

async function computeAverageColorAndLuminance(absPath) {
  const { data, info } = await sharp(absPath)
    .rotate()
    .removeAlpha()
    .resize({ width: 64, height: 64, fit: "inside", withoutEnlargement: true })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const pixels = info.width * info.height;
  let sumR = 0;
  let sumG = 0;
  let sumB = 0;

  for (let i = 0; i < data.length; i += channels) {
    sumR += data[i];
    sumG += data[i + 1];
    sumB += data[i + 2];
  }

  const avgR = sumR / pixels;
  const avgG = sumG / pixels;
  const avgB = sumB / pixels;
  const luminance = 0.2126 * avgR + 0.7152 * avgG + 0.0722 * avgB;

  return {
    avgColor: {
      r: Number(avgR.toFixed(2)),
      g: Number(avgG.toFixed(2)),
      b: Number(avgB.toFixed(2)),
      hex:
        "#" +
        [avgR, avgG, avgB]
          .map((channel) =>
            Math.round(channel).toString(16).padStart(2, "0").toUpperCase(),
          )
          .join(""),
    },
    luminance: Number(luminance.toFixed(2)),
    luminanceTag: luminanceTag(luminance),
  };
}

async function createThumb(absInputPath, relativeOriginalPath) {
  const hashed = hashPath(relativeOriginalPath);
  const fileName = `${hashed}.jpg`;
  const absOutputPath = path.join(THUMBS_DIR, fileName);

  await sharp(absInputPath)
    .rotate()
    .resize({ width: 400, height: 400, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(absOutputPath);

  return normalizePath(path.relative(ROOT, absOutputPath));
}

async function main() {
  await fs.mkdir(THUMBS_DIR, { recursive: true });

  const markdown = await fs.readFile(AUDIT_MD_PATH, "utf8");
  const entries = parseVerdictList(markdown);

  const reportEntries = [];
  const seen = new Set();

  for (const entry of entries) {
    if (seen.has(entry.path)) {
      continue;
    }
    seen.add(entry.path);

    const relPath = normalizePath(entry.path);
    const absPath = path.join(ROOT, relPath);
    const ext = path.extname(relPath).toLowerCase();

    if (!isImagePath(relPath)) {
      reportEntries.push({
        path: relPath,
        status: entry.status,
        skipped: true,
        reason: `Niet ondersteund beeldformaat voor sharp: ${ext || "geen extensie"}`,
      });
      continue;
    }

    try {
      const metadata = await sharp(absPath).rotate().metadata();
      const sizeBytes = (await fs.stat(absPath)).size;
      const thumbPath = await createThumb(absPath, relPath);
      const color = await computeAverageColorAndLuminance(absPath);

      reportEntries.push({
        path: relPath,
        status: entry.status,
        width: metadata.width ?? null,
        height: metadata.height ?? null,
        format: metadata.format ?? null,
        sizeBytes,
        thumbnail: thumbPath,
        avgColor: color.avgColor,
        luminance: color.luminance,
        luminanceTag: color.luminanceTag,
      });
    } catch (error) {
      reportEntries.push({
        path: relPath,
        status: entry.status,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  const summary = {
    totalFromVerdict: entries.length,
    uniquePaths: seen.size,
    processed: reportEntries.filter((item) => !item.error && !item.skipped).length,
    skipped: reportEntries.filter((item) => item.skipped).length,
    errored: reportEntries.filter((item) => item.error).length,
  };

  const output = {
    generatedAt: new Date().toISOString(),
    source: {
      markdown: "docs/beeldaudit.md",
      verdictStatuses: ["bruikbaar", "twijfel"],
    },
    summary,
    items: reportEntries,
  };

  await fs.writeFile(OUTPUT_JSON_PATH, JSON.stringify(output, null, 2), "utf8");
  console.log(`Audit geschreven naar ${normalizePath(path.relative(ROOT, OUTPUT_JSON_PATH))}`);
  console.log(`Thumbs-map: ${normalizePath(path.relative(ROOT, THUMBS_DIR))}`);
  console.log(`Processed: ${summary.processed}, skipped: ${summary.skipped}, errored: ${summary.errored}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
