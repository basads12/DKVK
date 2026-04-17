import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

export function pageMetadata({ title, description, path, noindex }: PageSeo): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: noindex
      ? undefined
      : {
          title,
          description,
          type: "website",
          locale: "nl_NL",
          url,
        },
  };
}

export function galleryJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ArtGallery",
    "@id": `${siteConfig.url}/#gallery`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    foundingDate: "2005",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: "NL",
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: "By appointment only",
    },
  };
}

export function faqJsonLd(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function localBusinessJsonLd(mapUrl: string) {
  const base = galleryJsonLd() as Record<string, unknown>;
  return {
    ...base,
    "@type": "LocalBusiness",
    hasMap: mapUrl,
  };
}
