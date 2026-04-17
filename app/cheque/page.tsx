import Link from "next/link";
import { CtaBlock } from "@/components/CtaBlock";
import { ChequeForm } from "@/components/ChequeForm";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { reviews, faq } from "@/content/site";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

type Props = {
  searchParams: Promise<{ code?: string }>;
};

export async function generateMetadata({ searchParams }: Props) {
  const params = await searchParams;
  if (params.code) {
    return pageMetadata({
      title: "Uw cheque activeren — Galerie De Kunst van Kunst",
      description: "Gepersonaliseerde chequepagina.",
      path: "/cheque",
      noindex: true,
    });
  }
  return pageMetadata({
    title: "Uw cheque activeren — Galerie De Kunst van Kunst",
    description:
      "Controleer uw Kunst-Waardecheque met uw chequenummer en postcode. Daarna plant u rustig een middag bij ons in Hengelo.",
    path: "/cheque",
  });
}

export default async function ChequePage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <>
      <section className="bg-creme py-12 lg:py-28">
        <div className="mx-auto max-w-narrow px-5 lg:px-8">
          <h1 className="text-[44px] font-light text-bordeaux lg:text-[72px]">
            {params.code ? "Uw persoonlijke uitnodiging." : "Uw cheque."}
          </h1>
          <p className="mt-4 text-lg text-ink">
            {params.code
              ? "In onze galerie in Hengelo, op een dag die u uitkomt."
              : "Vul uw chequenummer en postcode in. In twee velden weet u of het klopt."}
          </p>
          <div className="mt-10">
            <ChequeForm code={params.code} />
          </div>
          <p className="mt-8 text-base leading-relaxed text-ink">
            De cheque is een middag, geen tegoed. U komt rustig kijken. U kiest zelf of u iets meeneemt.
          </p>
          <p className="mt-4">
            <Link href="/galerie" className="text-ink underline underline-offset-4 hover:text-bordeaux">
              Meer over de galerie
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-sand py-12 lg:py-20">
        <div className="mx-auto max-w-narrow px-5 lg:px-8">
          <blockquote>
            <p className="text-[17px] leading-relaxed text-ink">{`“${reviews.vanKesteren.quote}”`}</p>
            <cite className="mt-4 block text-sm not-italic text-muted">
              — {reviews.vanKesteren.author}, {reviews.vanKesteren.city}
            </cite>
          </blockquote>
        </div>
      </section>

      <CtaBlock
        heading="Wat u kunt verwachten."
        subheading="Ontvangst, koffie of thee, en rust om rond te kijken."
        primary={{ label: "Plan uw middag", href: "/planner" }}
        secondary={{ label: "Lees meer over uw bezoek", href: "/uw-bezoek" }}
      />

      {!params.code ? <FaqList heading="Veelgestelde vragen" items={faq.cheque} /> : null}
      {!params.code ? <JsonLd data={faqJsonLd(faq.cheque)} /> : null}
    </>
  );
}
