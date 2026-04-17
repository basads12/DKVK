import Image from "next/image";
import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { DarkAnchor } from "@/components/DarkAnchor";
import { FaqList } from "@/components/FaqList";
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
      <section className="bg-bordeaux py-16 text-creme md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-wide gap-8 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">Hengelo, Overijssel</p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Contact.</h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-creme/90 md:text-base">{siteConfig.appointmentOnly}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cheque"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 text-sm font-semibold text-ink transition-colors hover:bg-[#d08a43]"
              >
                Activeer uw cheque
              </Link>
              <Link
                href="/galerie/bezoek"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-creme/40 px-6 text-sm font-semibold text-creme transition-colors hover:bg-creme/10"
              >
                Maak afspraak zonder cheque
              </Link>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gold/40">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/Video/web/DJI_20260319182426_0038_D_MASTER-poster.jpg"
              className="h-full w-full object-cover motion-reduce:hidden"
            >
              <source media="(max-width: 767px)" src="/Video/web/DJI_20260319182426_0038_D_MASTER-720p.mp4" type="video/mp4" />
              <source media="(min-width: 768px)" src="/Video/web/DJI_20260319182426_0038_D_MASTER-1080p.mp4" type="video/mp4" />
            </video>
            <Image
              src="/Video/web/DJI_20260319182426_0038_D_MASTER-poster.jpg"
              alt="Luchtbeeld van de galerielocatie in Hengelo."
              fill
              sizes="(max-width: 1280px) 100vw, 50vw"
              className="hidden object-cover motion-reduce:block"
            />
          </div>
        </div>
      </section>

      <section className="bg-creme py-16 lg:py-20">
        <div className="mx-auto max-w-default px-5 lg:px-8">
          <h2 className="text-3xl font-semibold text-bordeaux md:text-4xl">Waar u ons vindt.</h2>
          <address className="mt-6 not-italic text-base leading-relaxed text-ink md:text-[17px]">
            {siteConfig.name}
            <br />
            {siteConfig.address.street}
            <br />
            {siteConfig.address.postalCode} {siteConfig.address.city}, {siteConfig.address.region}
            <br />
            {siteConfig.address.country}
          </address>
          <p className="mt-3 text-base text-ink md:text-[17px]">{siteConfig.appointmentOnly}</p>
          <p className="mt-3 text-sm text-muted">
            KvK {siteConfig.kvk} · BTW {siteConfig.btw}
          </p>
        </div>
      </section>

      <section className="bg-sand py-16 lg:py-20">
        <div className="mx-auto max-w-default px-5 lg:px-8">
          <h2 className="text-3xl font-semibold text-bordeaux md:text-4xl">Bel of mail gerust.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink md:text-[17px]">
            Stelt u liever eerst een vraag? Dat kan kort en zonder verplichting.
          </p>
          <p className="mt-6 text-base text-ink md:text-[17px]">
            <a href="tel:+31740000000" className="underline underline-offset-4 hover:text-bordeaux">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-3 text-base text-ink md:text-[17px]">
            <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4 hover:text-bordeaux">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </section>

      <section className="bg-creme py-16 lg:py-20">
        <div className="mx-auto max-w-default px-5 lg:px-8">
          <h2 className="text-3xl font-semibold text-bordeaux md:text-4xl">Route.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink md:text-[17px]">
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

      <section className="bg-sand py-8">
        <div className="mx-auto max-w-default px-5 lg:px-8">
          <div className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/Overige fotos/pand-buitenkant.jpg"
              alt="Buitenkant van het pand van de galerie."
              fill
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover"
            />
          </div>
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

      <section className="bg-sand py-16">
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
