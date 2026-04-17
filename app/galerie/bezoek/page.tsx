import Link from "next/link";
import { Hero } from "@/components/Hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Afspraak zonder cheque — Galerie De Kunst van Kunst, Hengelo",
  description:
    "Ook zonder Kunst-Waardecheque bent u welkom. Maak eenvoudig een afspraak voor een rustige middag in onze galerie.",
  path: "/galerie/bezoek",
});

export default function BezoekZonderChequePage() {
  return (
    <>
      <Hero
        headline="Komt u langs zonder cheque?"
        subheadline="Ook dan bent u welkom. Maak eenvoudig een afspraak."
        primaryCta={{ label: "Plan uw bezoek", href: "/planner?context=bezoek" }}
      />
      <section className="bg-creme pb-24">
        <div className="mx-auto max-w-narrow px-5 lg:px-8">
          <p className="text-[17px] leading-relaxed text-ink">
            Wij ontvangen ook bezoekers zonder Kunst-Waardecheque, vrijblijvend en op afspraak. U kiest zelf een dag
            en tijd die u uitkomt.
          </p>
          <p className="mt-4 text-[17px] text-ink">Uitsluitend op afspraak. Sinds 2005 in Hengelo.</p>
          <Link href="/contact" className="mt-8 inline-block text-ink underline underline-offset-4 hover:text-bordeaux">
            Contact en route
          </Link>
        </div>
      </section>
    </>
  );
}
