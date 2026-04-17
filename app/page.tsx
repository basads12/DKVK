import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { DarkAnchor } from "@/components/DarkAnchor";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { ReviewsList } from "@/components/ReviewsList";
import { ThreeSteps } from "@/components/ThreeSteps";
import { TrustSignals } from "@/components/TrustSignals";
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
      <section className="bg-[#F7F4EE] py-28">
        <div className="mx-auto max-w-wide px-5 lg:px-8">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.02em] text-bordeaux lg:text-6xl">
            Een middag voor u geregeld.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink lg:text-[22px]">
            In onze galerie in Hengelo. Op een dag die u uitkomt, in een rustige setting met tijd voor uw eigen
            tempo.
          </p>
          <div className="mt-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
            <Link
              href="/cheque"
              className="inline-flex min-h-14 items-center justify-center rounded-md bg-bordeaux px-8 text-base font-medium text-creme transition-colors duration-200 ease-dkvk hover:bg-bordeaux-pressed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
            >
              Activeer uw cheque
            </Link>
            <Link
              href="/uw-bezoek"
              className="inline-flex min-h-10 items-center text-sm text-muted underline underline-offset-4 transition-colors duration-150 ease-dkvk hover:text-bordeaux"
            >
              Lees wat u kunt verwachten
            </Link>
          </div>
          <TrustSignals className="mt-6" items={["Op afspraak", "Geen verplichting", "Rustig ontvangen"]} />
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-xl px-5 text-center lg:px-8">
          <p className="text-lg leading-relaxed text-ink">
            U hoeft niets voor te bereiden. Wij begeleiden u stap voor stap.
          </p>
        </div>
      </section>

      <ThreeSteps
        eyebrow="DE WEG NAAR UW MIDDAG"
        heading="In drie stappen bent u binnen."
        subheading="Kort en helder. Daarna staat de koffie klaar."
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

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-narrow px-5 lg:px-8">
          <h2 className="text-[32px] font-light text-bordeaux lg:text-[48px]">Klaar om uw middag te plannen?</h2>
          <p className="mt-4 text-lg text-ink">Activeer eerst uw cheque. Daarna kiest u rustig een moment.</p>
          <Link
            href="/cheque"
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-md bg-bordeaux px-8 text-base font-medium text-creme transition-colors duration-200 ease-dkvk hover:bg-bordeaux-pressed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
          >
            Activeer uw cheque
          </Link>
          <TrustSignals className="mt-5" />
        </div>
      </section>

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
        secondary={{ label: "Lees hoe uw bezoek verloopt", href: "/uw-bezoek" }}
      />

      <FaqList heading="Veelgestelde vragen" items={faq.home} />
      <JsonLd data={faqJsonLd(faq.home)} />
    </>
  );
}
