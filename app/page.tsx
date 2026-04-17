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
        subheadline="In onze galerie in Hengelo, op een dag die u uitkomt."
        primaryCta={{ label: "Activeer uw cheque", href: "/cheque" }}
        secondaryCta={{ label: "Lees wat u kunt verwachten", href: "/uw-bezoek" }}
      />

      <ThreeSteps
        eyebrow="DE WEG NAAR UW MIDDAG"
        heading="In drie stappen bent u binnen."
        subheading="Eenvoudig, en u kunt op elk moment stoppen."
        steps={[
          {
            title: "Activeren",
            body: "U controleert uw cheque met twee velden: chequenummer en postcode.",
          },
          {
            title: "Plannen",
            body: "U kiest een dag en tijd die u schikt. Een middag duurt 45 tot 90 minuten.",
          },
          {
            title: "Komen",
            body: "U wordt ontvangen, krijgt koffie of thee, en kijkt rustig rond.",
          },
        ]}
      />

      <section className="bg-creme py-12 lg:py-28">
        <div className="mx-auto max-w-narrow px-5 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">OVER ONS</p>
          <h2 className="mt-2 text-[32px] font-light text-bordeaux lg:text-[48px]">
            Een galerie in Hengelo, sinds 2005.
          </h2>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink">
            <p>
              Wij ontvangen bezoek uitsluitend op afspraak. Dat doen we al twintig jaar, op dezelfde plek in
              Hengelo.
            </p>
            <p>
              Onze ruimte is rustig en verzorgd, met tijd voor een gesprek. U krijgt de galerie voor u alleen, of
              nagenoeg.
            </p>
            <p>
              Wij werken met een kleine groep kunstenaars die wij goed kennen. Geen haast, geen druk.
            </p>
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
        body="Sinds 2005 ontvangen wij bezoek in Hengelo, Overijssel. Wij werken op afspraak, zodat u de ruimte voor u alleen of nagenoeg alleen heeft."
        cta={{ label: "Activeer uw cheque", href: "/cheque" }}
      />

      <CtaBlock
        heading="Een middag voor u geregeld."
        subheading="Op een dag die u uitkomt."
        primary={{ label: "Activeer uw cheque", href: "/cheque" }}
        secondary={{ label: "Lees wat u kunt verwachten", href: "/uw-bezoek" }}
      />

      <FaqList heading="Veelgestelde vragen" items={faq.home} />
      <JsonLd data={faqJsonLd(faq.home)} />
    </>
  );
}
