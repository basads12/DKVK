import Link from "next/link";
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
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-narrow px-5 lg:px-8">
          <h1 className="text-[44px] font-light text-bordeaux lg:text-[72px]">
            {params.code ? "Uw persoonlijke uitnodiging." : "Uw cheque."}
          </h1>
          <p className="mt-4 text-lg text-ink">
            {params.code
              ? "In onze galerie in Hengelo, op een dag die u uitkomt."
              : "Vul uw chequenummer en postcode in. In twee velden weet u of het klopt."}
          </p>
          {!params.code ? (
            <div className="mt-8 rounded-2xl border border-border bg-[#F7F4EE] p-5">
              <p className="text-sm font-medium text-ink">Eerst rustig controleren, daarna pas plannen.</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>Binnen enkele seconden weet u waar u aan toe bent</li>
                <li>Geen verplichtingen of betaalstappen</li>
                <li>Na herkenning gaat u direct door naar de planner</li>
              </ul>
            </div>
          ) : null}
          <div className="mt-6">
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

      <section className="bg-[#F7F4EE] py-20 lg:py-24">
        <div className="mx-auto max-w-narrow px-5 lg:px-8">
          <blockquote className="rounded-2xl border border-border bg-white p-6 shadow-[0_8px_24px_rgba(26,23,19,0.06)]">
            <p className="text-[17px] leading-relaxed text-ink">{`“${reviews.vanKesteren.quote}”`}</p>
            <cite className="mt-4 block text-sm not-italic text-muted">
              — {reviews.vanKesteren.author}, {reviews.vanKesteren.city}
            </cite>
          </blockquote>
        </div>
      </section>

      {!params.code ? <FaqList heading="Veelgestelde vragen" items={faq.cheque} /> : null}
      {!params.code ? <JsonLd data={faqJsonLd(faq.cheque)} /> : null}
    </>
  );
}
