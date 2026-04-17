import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { DarkAnchor } from "@/components/DarkAnchor";
import { FaqList } from "@/components/FaqList";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ReviewsList } from "@/components/ReviewsList";
import { faq, reviews, siteConfig } from "@/content/site";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Wat u kunt verwachten bij uw bezoek — Galerie De Kunst van Kunst",
  description:
    "Een persoonlijke middag in onze galerie in Hengelo. Ontvangst, koffie, rust. U kiest zelf of u iets meeneemt, niets moet.",
  path: "/uw-bezoek",
});

export default function UwBezoekPage() {
  return (
    <>
      <Hero
        kicker="BIJ DKVK"
        headline="Uw bezoek."
        subheadline="U komt rustig kijken. Wij nemen de rest op ons."
        primaryCta={{ label: "Activeer uw cheque", href: "/cheque" }}
        secondaryCta={{ label: "Plan uw middag", href: "/planner" }}
      />

      <section className="bg-creme py-12 lg:py-28">
        <div className="mx-auto max-w-narrow space-y-8 px-5 lg:px-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">UW MIDDAG</p>
            <h2 className="mt-2 text-[32px] font-light text-bordeaux lg:text-[48px]">Wat u kunt verwachten.</h2>
          </div>
          <p className="text-[17px] leading-relaxed text-ink">
            De ontvangst is persoonlijk. Geen balie en geen wachtruimte. Eerst koffie of thee, daarna kijkt u op uw
            eigen tempo. Een middag duurt meestal 45 tot 90 minuten.
          </p>
          <p className="text-[17px] leading-relaxed text-ink">
            U bepaalt wat er gebeurt. U mag rustig rondkijken zonder druk. Veel bezoekers gaan naar huis met een
            goede middag, ook als ze niets meenemen.
          </p>
        </div>
      </section>

      <ReviewsList heading="Wat familie Ponteyn zei." items={[reviews.ponteyn]} />

      <DarkAnchor
        heading="Waar u ons vindt."
        subheading={siteConfig.appointmentOnly}
        body={`${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}. Gratis parkeren in de straat. Sinds 2005 in Hengelo.`}
        cta={{ label: "Bekijk de route", href: "/contact" }}
      />

      <CtaBlock
        heading="Een middag voor u geregeld."
        subheading="Op een dag die u uitkomt."
        primary={{ label: "Activeer uw cheque", href: "/cheque" }}
        secondary={{ label: "Lees meer over de galerie", href: "/galerie" }}
      />
      <section className="bg-creme pb-20">
        <div className="mx-auto max-w-narrow px-5 lg:px-8">
          <Link href="/contact" className="text-ink underline underline-offset-4 hover:text-bordeaux">
            Contact en route
          </Link>
        </div>
      </section>
      <FaqList heading="Veelgestelde vragen" items={faq.visit} />
      <JsonLd data={faqJsonLd(faq.visit)} />
    </>
  );
}
