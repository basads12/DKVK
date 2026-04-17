import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { galleryJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://dekunstvankunst.nl"),
  title: "Galerie De Kunst van Kunst",
  description: "Een middag voor u geregeld in onze galerie in Hengelo.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className="bg-white text-ink">
        <a href="#main" className="skip-link">
          Naar hoofdinhoud
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <JsonLd data={galleryJsonLd()} />
      </body>
    </html>
  );
}
