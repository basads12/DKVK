import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dekunstvankunst.nl";
  const now = new Date();

  return [
    { url: `${base}/`, priority: 1, changeFrequency: "monthly", lastModified: now },
    { url: `${base}/cheque`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${base}/uw-bezoek`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${base}/galerie`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${base}/galerie/bezoek`, priority: 0.6, changeFrequency: "monthly", lastModified: now },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: "monthly", lastModified: now },
    { url: `${base}/algemene-voorwaarden`, priority: 0.3, changeFrequency: "monthly", lastModified: now },
    { url: `${base}/cookies`, priority: 0.3, changeFrequency: "monthly", lastModified: now },
  ];
}
