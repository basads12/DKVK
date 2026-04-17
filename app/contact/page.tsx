import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { DarkAnchor } from "@/components/DarkAnchor";
import { FaqList } from "@/components/FaqList";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LazyMap } from "@/components/LazyMap";
import { faq, siteConfig } from "@/content/site";
import { faqJsonLd, localBusinessJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact & route — Galerie De Kunst van Kunst, Hengelo",
  description:
    "Adres, route en contact van Galerie De Kunst van Kunst in Hengelo. Uitsluitend op afspraak. Bel, mail of plan direct uw middag.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        kicker="HENGELO, OVERIJSSEL"
        headline="Contact."
        subheadline={siteConfig.appointmentOnly}
        primaryCta={{ label: "Activeer uw cheque", href: "/cheque" }}
        secondaryCta={{ label: "Maak afspraak zonder cheque", href: "/galerie/bezoek" }}
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-default px-5 lg:px-8">
          <h2 className="text-[32px] font-light text-bordeaux lg:text-[48px]">Waar u ons vindt.</h2>
          <address className="mt-6 not-italic text-[17px] leading-relaxed text-ink">
            {siteConfig.name}
            <br />
            {siteConfig.address.street}
            <br />
            {siteConfig.address.postalCode} {siteConfig.address.city}, {siteConfig.address.region}
            <br />
            {siteConfig.address.country}
          </address>
          <p className="mt-3 text-[17px] text-ink">{siteConfig.appointmentOnly}</p>
          <p className="mt-3 text-sm text-muted">
            KvK {siteConfig.kvk} · BTW {siteConfig.btw}
          </p>
        </div>
      </section>

      <section className="bg-[#F7F4EE] py-20 lg:py-24">
        <div className="mx-auto max-w-default px-5 lg:px-8">
          <h2 className="text-[32px] font-light text-bordeaux lg:text-[48px]">Bel of mail gerust.</h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink">
            Stelt u liever eerst een vraag? Dat kan kort en zonder verplichting.
          </p>
          <p className="mt-6 text-[17px] text-ink">
            <a href="tel:+31740000000" className="underline underline-offset-4 hover:text-bordeaux">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-3 text-[17px] text-ink">
            <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4 hover:text-bordeaux">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-default px-5 lg:px-8">
          <h2 className="text-[32px] font-light text-bordeaux lg:text-[48px]">Route.</h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink">
            U rijdt via de A1 of A35 naar Hengelo. Parkeren is gratis in de straat, vaak direct voor de deur.
          </p>
          <div className="mt-8">
            <LazyMap />
          </div>
          <p className="mt-4">
            <a
              href="https://maps.google.com/?q=Hengelo+Overijssel"
              className="text-ink underline underline-offset-4 hover:text-bordeaux"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </p>
        </div>
      </section>

      <DarkAnchor
        heading="Uitsluitend op afspraak."
        subheading="Elke dag mogelijk, behalve zondag."
        body="Wij plannen per afspraak een dagdeel. Zo wordt u verwacht en heeft u alle tijd."
        cta={{ label: "Activeer uw cheque", href: "/cheque" }}
      />

      <CtaBlock
        heading="Twijfelt u nog?"
        subheading="Bel ons gerust. We helpen u zonder druk."
        primary={{ label: "Activeer uw cheque", href: "/cheque" }}
        secondary={{ label: "Maak een afspraak zonder cheque", href: "/galerie/bezoek" }}
      />

      <section className="bg-[#F7F4EE] py-20">
        <div className="mx-auto max-w-narrow px-5 lg:px-8">
          <Link href="/privacy" className="text-ink underline underline-offset-4 hover:text-bordeaux">
            Bekijk onze privacyverklaring
          </Link>
        </div>
      </section>
      <FaqList heading="Veelgestelde vragen" items={faq.contact} />
      <JsonLd data={faqJsonLd(faq.contact)} />
      <JsonLd data={localBusinessJsonLd("https://maps.google.com/?q=Hengelo+Overijssel")} />
    </>
  );
}
