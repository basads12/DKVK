import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { DarkAnchor } from "@/components/DarkAnchor";
import { FaqList } from "@/components/FaqList";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ReviewsList } from "@/components/ReviewsList";
import { ThreeSteps } from "@/components/ThreeSteps";
import { faq, reviews, siteConfig } from "@/content/site";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Galerie De Kunst van Kunst — Hengelo, uitsluitend op afspraak",
  description:
    "Een middag voor u geregeld in onze galerie in Hengelo. Persoonlijke ontvangst, koffie, rust. Uitsluitend op afspraak, sinds 2005.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Een middag voor u geregeld."
        subheadline="In Hengelo. Op een dag die u uitkomt."
        primaryCta={{ label: "Activeer uw cheque", href: "/cheque" }}
        secondaryCta={{ label: "Lees wat u kunt verwachten", href: "/uw-bezoek" }}
      />

      <ThreeSteps
        eyebrow="DE WEG NAAR UW MIDDAG"
        heading="In drie stappen bent u binnen."
        subheading="Drie korte stappen. Daarna staat de koffie klaar."
        steps={[
          {
            title: "Activeren",
            body: "Vul chequenummer en postcode in. Binnen een minuut weet u of alles klopt.",
          },
          {
            title: "Plannen",
            body: "Kies dag en tijd. Meestal bent u 45 tot 90 minuten bij ons.",
          },
          {
            title: "Komen",
            body: "Bel aan, pak een kop koffie of thee, en kijk op uw eigen tempo rond.",
          },
        ]}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-narrow px-5 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">OVER ONS</p>
          <h2 className="mt-2 text-[32px] font-light text-bordeaux lg:text-[48px]">
            Een galerie in Hengelo, sinds 2005.
          </h2>
          <div className="mt-8 grid gap-5">
            {[
              "Wij werken op afspraak. Al twintig jaar, op dezelfde plek in Hengelo.",
              "U stapt een rustige ruimte in met licht, stilte en tijd voor een gesprek.",
              "Vaak bent u hier alleen, soms met nog een enkel ander gezelschap.",
              "We tonen werk van een kleine groep kunstenaars die we door en door kennen.",
            ].map((benefit) => (
              <article
                key={benefit}
                className="rounded-2xl border border-border bg-[#F7F4EE] p-6 text-[17px] leading-relaxed text-ink"
              >
                {benefit}
              </article>
            ))}
          </div>
          <Link href="/galerie" className="mt-8 inline-block text-base text-ink underline underline-offset-4">
            Meer over de galerie
          </Link>
        </div>
      </section>

      <ReviewsList
        eyebrow="REVIEWS"
        heading="Wat anderen zeiden."
        subheading="Drie bezoekers, drie middagen."
        items={[reviews.vanKesteren, reviews.ponteyn, reviews.veldhuis]}
      />

      <DarkAnchor
        heading={`${siteConfig.address.street}, ${siteConfig.address.city}.`}
        subheading={siteConfig.appointmentOnly}
        body="Sinds 2005 ontvangen we bezoekers in Hengelo. Op afspraak, zodat u rustig kunt kijken met de ruimte bijna helemaal voor uzelf."
        cta={{ label: "Activeer uw cheque", href: "/cheque" }}
      />

      <CtaBlock
        heading="Een middag voor u geregeld."
        subheading="U kiest de dag. Wij regelen de rest."
        primary={{ label: "Activeer uw cheque", href: "/cheque" }}
        secondary={{ label: "Lees wat u kunt verwachten", href: "/uw-bezoek" }}
      />

      <FaqList heading="Veelgestelde vragen" items={faq.home} />
      <JsonLd data={faqJsonLd(faq.home)} />
    </>
  );
}
