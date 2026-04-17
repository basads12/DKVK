import fs from "node:fs/promises";
import path from "node:path";
import { spawn, spawnSync } from "node:child_process";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

const ROOT = process.cwd();
const VIDEO_DIR = path.join(ROOT, "Public", "Video");
const WEB_DIR = path.join(VIDEO_DIR, "web");
const REPORT_JSON = path.join(ROOT, "docs", "video-audit.json");

const MASTER_PATTERN = /^DJI_.*_MASTER\.MP4$/i;

function normalize(relOrAbsPath) {
  const rel = path.isAbsolute(relOrAbsPath)
    ? path.relative(ROOT, relOrAbsPath)
    : relOrAbsPath;
  return rel.replace(/\\/g, "/");
}

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(ffmpegInstaller.path, args, {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
      } else {
        reject(new Error(`ffmpeg exit ${code}\n${stderr}`));
      }
    });
  });
}

function parseFfmpegMetadataFromProbeText(text) {
  const durationMatch = text.match(/Duration:\s*(\d{2}):(\d{2}):(\d{2}\.\d{2})/);
  const streamMatch = text.match(/, (\d{2,5})x(\d{2,5})[,\s]/);
  const fpsMatch = text.match(/(\d+(?:\.\d+)?)\s*fps/);
  const bitrateMatch = text.match(/bitrate:\s*([0-9.]+)\s*kb\/s/i);

  let durationSeconds = null;
  if (durationMatch) {
    const hh = Number(durationMatch[1]);
    const mm = Number(durationMatch[2]);
    const ss = Number(durationMatch[3]);
    durationSeconds = Number((hh * 3600 + mm * 60 + ss).toFixed(2));
  }

  return {
    durationSeconds,
    width: streamMatch ? Number(streamMatch[1]) : null,
    height: streamMatch ? Number(streamMatch[2]) : null,
    fps: fpsMatch ? Number(fpsMatch[1]) : null,
    bitrateKbps: bitrateMatch ? Number(bitrateMatch[1]) : null,
  };
}

function probeVideo(absPath) {
  const probe = spawnSync(
    ffmpegInstaller.path,
    ["-i", absPath, "-hide_banner"],
    { encoding: "utf8" },
  );
  const text = `${probe.stdout || ""}\n${probe.stderr || ""}`;
  return parseFfmpegMetadataFromProbeText(text);
}

async function fileSizeMb(absPath) {
  const stats = await fs.stat(absPath);
  return Number((stats.size / (1024 * 1024)).toFixed(2));
}

async function main() {
  await fs.mkdir(WEB_DIR, { recursive: true });

  const entries = await fs.readdir(VIDEO_DIR, { withFileTypes: true });
  const masters = entries
    .filter((entry) => entry.isFile() && MASTER_PATTERN.test(entry.name))
    .map((entry) => entry.name)
    .sort();

  const report = {
    generatedAt: new Date().toISOString(),
    ffmpegPath: ffmpegInstaller.path,
    masters: [],
    outputs: [],
  };

  for (const masterName of masters) {
    const baseName = masterName.replace(/\.MP4$/i, "");
    const masterAbsPath = path.join(VIDEO_DIR, masterName);
    const output1080 = path.join(WEB_DIR, `${baseName}-1080p.mp4`);
    const output720 = path.join(WEB_DIR, `${baseName}-720p.mp4`);
    const outputPoster = path.join(WEB_DIR, `${baseName}-poster.jpg`);

    const masterMeta = probeVideo(masterAbsPath);
    report.masters.push({
      file: normalize(masterAbsPath),
      ...masterMeta,
      sizeMb: await fileSizeMb(masterAbsPath),
    });

    await runFfmpeg([
      "-y",
      "-i",
      masterAbsPath,
      "-an",
      "-c:v",
      "libx264",
      "-preset",
      "medium",
      "-crf",
      "23",
      "-vf",
      "scale=-2:1080",
      "-movflags",
      "+faststart",
      output1080,
    ]);

    await runFfmpeg([
      "-y",
      "-i",
      masterAbsPath,
      "-an",
      "-c:v",
      "libx264",
      "-preset",
      "medium",
      "-crf",
      "23",
      "-vf",
      "scale=-2:720",
      "-movflags",
      "+faststart",
      output720,
    ]);

    await runFfmpeg([
      "-y",
      "-ss",
      "1",
      "-i",
      masterAbsPath,
      "-frames:v",
      "1",
      "-vf",
      "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2",
      "-q:v",
      "3",
      outputPoster,
    ]);

    for (const outputPath of [output1080, output720]) {
      const meta = probeVideo(outputPath);
      report.outputs.push({
        file: normalize(outputPath),
        source: normalize(masterAbsPath),
        ...meta,
        sizeMb: await fileSizeMb(outputPath),
      });
    }

    report.outputs.push({
      file: normalize(outputPoster),
      source: normalize(masterAbsPath),
      width: 1920,
      height: 1080,
      sizeMb: await fileSizeMb(outputPoster),
      type: "poster",
    });
  }

  await fs.writeFile(REPORT_JSON, JSON.stringify(report, null, 2), "utf8");
  console.log(`Transcode klaar. Rapport: ${normalize(REPORT_JSON)}`);
  console.log(`Masters: ${report.masters.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
