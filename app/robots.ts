import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/planner", "/afspraak/omruilen", "/admin", "/cheque?code="],
      },
    ],
    sitemap: "https://dekunstvankunst.nl/sitemap.xml",
  };
}
