import Image from "next/image";
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
      <section className="bg-creme py-16 lg:py-24">
        <div className="mx-auto max-w-narrow px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_180px] lg:items-start">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl font-semibold text-bordeaux md:text-5xl lg:text-6xl">
                {params.code ? "Uw persoonlijke uitnodiging." : "Uw cheque."}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-ink md:text-lg">
                {params.code
                  ? "In onze galerie in Hengelo, op een dag die u uitkomt."
                  : "Vul uw chequenummer en postcode in. In twee velden weet u of het klopt."}
              </p>
            </div>
            <div className="relative order-1 aspect-square max-w-40 overflow-hidden rounded-2xl border border-border bg-sand lg:order-2 lg:ml-auto lg:max-w-none">
              <Image
                src="/Kunstwerken/Flowers-scaled-1.webp"
                alt="Decoratief detail uit de collectie."
                fill
                sizes="(max-width: 1024px) 160px, 180px"
                className="object-cover"
              />
            </div>
          </div>
          {!params.code ? (
            <div className="mt-8 rounded-2xl border border-border bg-sand p-5">
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
          {params.code ? (
            <div className="mt-8 grid gap-4 rounded-2xl border border-border bg-sand p-5 md:grid-cols-[120px_1fr] md:items-center">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
                <Image
                  src="/Kunstwerken/Website-impressie-32-scaled-1.webp"
                  alt="Sfeerbeeld van de galerie."
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">Wat u kunt verwachten</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  U wordt ontvangen met koffie en kijkt op uw eigen tempo rond.
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  We nemen rustig de tijd en bespreken alleen wat u zelf wilt weten.
                </p>
              </div>
            </div>
          ) : null}
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

      <section className="bg-sand py-16 lg:py-20">
        <div className="mx-auto max-w-narrow px-5 lg:px-8">
          <blockquote className="rounded-2xl border border-border bg-creme p-6">
            <p className="text-base leading-relaxed text-ink md:text-[17px]">{`“${reviews.vanKesteren.quote}”`}</p>
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
