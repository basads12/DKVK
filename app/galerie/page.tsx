import Link from "next/link";
import { ArtistsAccordion } from "@/components/ArtistsAccordion";
import { CtaBlock } from "@/components/CtaBlock";
import { DarkAnchor } from "@/components/DarkAnchor";
import { FaqList } from "@/components/FaqList";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ReviewsList } from "@/components/ReviewsList";
import { faq, reviews, siteConfig } from "@/content/site";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "De galerie — Hengelo, sinds 2005 · De Kunst van Kunst",
  description:
    "Galerie De Kunst van Kunst ontvangt al sinds 2005 bezoek op afspraak in Hengelo. Een kleine groep kunstenaars, een rustige ruimte.",
  path: "/galerie",
});

export default function GaleriePage() {
  return (
    <>
      <Hero
        kicker="SINDS 2005 IN HENGELO"
        headline="De galerie."
        subheadline="Een kleine ruimte, een kleine groep kunstenaars, een vaste gewoonte."
        primaryCta={{ label: "Activeer uw cheque", href: "/cheque" }}
        secondaryCta={{ label: "Maak een afspraak zonder cheque", href: "/galerie/bezoek" }}
      />

      <section className="bg-creme py-12 lg:py-28">
        <div className="mx-auto max-w-narrow space-y-6 px-5 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">WIE WIJ ZIJN</p>
          <h2 className="text-[32px] font-light text-bordeaux lg:text-[48px]">Sinds 2005 in Hengelo.</h2>
          <p className="text-[17px] leading-relaxed text-ink">
            Wij begonnen met één idee: een galerie waar mensen op afspraak langskomen, koffie krijgen en rustig
            kunnen kijken. Die gewoonte is gebleven.
          </p>
          <p className="text-[17px] leading-relaxed text-ink">
            We werken met een kleine groep kunstenaars die we al jaren kennen. Dat geeft rust en duidelijkheid.
          </p>
        </div>
      </section>

      <section id="team" className="bg-sand py-12 lg:py-20">
        <div className="mx-auto max-w-default px-5 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">WIE U ONTVANGT</p>
          <h2 className="mt-2 text-[32px] font-light text-bordeaux lg:text-[48px]">Het team.</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Hans — galeriehouder. Sinds 2005 vaste gastheer.",
              "Sanne — galerieadviseur. Begeleidt uw middag op uw tempo.",
              "Eline — planning en ontvangst. Zorgt dat alles klaarstaat.",
            ].map((member) => (
              <article key={member} className="rounded-md border border-border bg-creme p-5">
                <p className="text-[17px] text-ink">{member}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DarkAnchor
        heading={`${siteConfig.address.street}, ${siteConfig.address.city}.`}
        subheading={siteConfig.appointmentOnly}
        body="Wij ontvangen u in onze galerie in Hengelo, Overijssel. De route en parkeerinformatie staan op de contactpagina."
        cta={{ label: "Bekijk de route", href: "/contact" }}
      />

      <section id="kunstenaars" className="bg-creme py-12 lg:py-20">
        <div className="mx-auto max-w-default px-5 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">DE MAKERS</p>
          <h2 className="mt-2 text-[32px] font-light text-bordeaux lg:text-[48px]">Onze kunstenaars.</h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink">
            Een klein aantal, langdurig. Dat betekent dat we het werk goed kennen en er rustig uitleg bij kunnen
            geven als u dat wilt.
          </p>
          <ArtistsAccordion />
        </div>
      </section>

      <ReviewsList heading="Wat familie Veldhuis zei." items={[reviews.veldhuis]} />

      <CtaBlock
        heading="Komt u langs?"
        subheading="Op een dag die u uitkomt."
        primary={{ label: "Activeer uw cheque", href: "/cheque" }}
        secondary={{ label: "Maak een afspraak zonder cheque", href: "/galerie/bezoek" }}
      />

      <section className="bg-creme pb-20">
        <div className="mx-auto max-w-narrow px-5 lg:px-8">
          <Link href="/contact" className="text-ink underline underline-offset-4 hover:text-bordeaux">
            Contact en route
          </Link>
        </div>
      </section>
      <FaqList heading="Veelgestelde vragen" items={faq.gallery} />
      <JsonLd data={faqJsonLd(faq.gallery)} />
    </>
  );
}
