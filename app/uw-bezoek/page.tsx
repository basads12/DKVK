import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { faq } from "@/content/site";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Wat u kunt verwachten bij uw bezoek — Galerie De Kunst van Kunst",
  description:
    "Een persoonlijke middag in onze galerie in Hengelo. Rustig welkom, koffie, tijd om te kijken. U kiest zelf of u iets meeneemt.",
  path: "/uw-bezoek",
});

export default function UwBezoekPage() {
  const practicalItems: { title: string; body: string; icon: ReactNode }[] = [
    {
      title: "Duur",
      body: "Reken op 45 tot 90 minuten, afhankelijk van uw tempo.",
      icon: <ClockIcon />,
    },
    {
      title: "Toegankelijk",
      body: "De galerie is gelijkvloers en drempelvrij bereikbaar.",
      icon: <AccessIcon />,
    },
    {
      title: "Parkeren",
      body: "Gratis parkeren in de straat, meestal direct voor de deur.",
      icon: <ParkingIcon />,
    },
  ];

  return (
    <>
      <section className="bg-creme pt-8 md:pt-10">
        <div className="mx-auto max-w-wide px-5 md:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border md:aspect-[21/9]">
            <Image
              src="/Overige fotos/IMG_0371-scaled.jpeg"
              alt="Een rustige middag in de galerie."
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-default px-5 text-center md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">Uw middag op afspraak</p>
          <h1 className="mt-3 text-4xl font-semibold text-ink md:text-5xl">Zo verloopt uw bezoek</h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-ink md:text-base">
            U komt binnen zonder haast, krijgt koffie en kijkt in uw eigen tempo. Wij begeleiden waar nodig en blijven op de
            achtergrond als u liever rustig rondloopt.
          </p>
        </div>
      </section>

      <section className="bg-creme py-16 md:py-20">
        <div className="mx-auto max-w-default px-5 md:px-8">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Zo verloopt uw middag</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "U komt rustig binnen",
                body: "We ontvangen u persoonlijk en starten met koffie, zodat u eerst kunt landen.",
                image: "/Kunstwerken/KVK-5.webp",
              },
              {
                title: "U kijkt op uw tempo",
                body: "We lopen mee als u dat prettig vindt, maar geven u vooral de ruimte om zelf te kijken.",
                image: "/Kunstwerken/KVK-8.webp",
              },
              {
                title: "U beslist zonder druk",
                body: "Pas als u er zelf naar vraagt, praten we over prijzen, opties en levering.",
                image: "/Kunstwerken/KVK-1.webp",
              },
            ].map((step) => (
              <article key={step.title} className="overflow-hidden rounded-2xl border border-border bg-sand">
                <div className="relative aspect-[4/3]">
                  <Image src={step.image} alt={step.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto grid max-w-wide gap-8 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-ink md:text-4xl">Geen druk, geen verkooppraat.</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink md:text-base">
              <p>
                Ons uitgangspunt is eenvoudig: u bent te gast. U kijkt, vraagt en beslist pas als het goed voelt.
              </p>
              <p>
                Veel bezoekers komen voor het eerst in een galerie. Daarom houden we het rustig, helder en persoonlijk.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/Kunstwerken/Gezelligheid-dame-donker-scaled-1.webp"
              alt="Rustige sfeer tijdens een bezoek aan de galerie."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-creme py-16 md:py-20">
        <div className="mx-auto max-w-default px-5 md:px-8">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Praktische details</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {practicalItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-sand p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-creme text-bordeaux">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bordeaux py-16 md:py-20">
        <div className="mx-auto max-w-default px-5 text-center md:px-8">
          <h2 className="text-3xl font-semibold text-creme md:text-4xl">Klaar om uw middag te plannen?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-creme/90 md:text-base">
            Activeer eerst uw cheque. Daarna kiest u een moment waarop u rustig ontvangen wilt worden.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/cheque"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 text-sm font-semibold text-ink transition-colors hover:bg-[#d08a43]"
            >
              Activeer uw cheque
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-creme/40 px-6 text-sm font-semibold text-creme transition-colors hover:bg-creme/10"
            >
              Stel eerst een vraag
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-creme py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-narrow px-5 md:px-8">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Veelgestelde vragen</h2>
          <dl className="mt-8 space-y-4">
            {faq.visit.map((item) => (
              <div key={item.q} className="rounded-2xl border border-border bg-sand p-5 md:p-6">
                <dt className="text-base font-semibold text-ink md:text-lg">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink md:text-base">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <JsonLd data={faqJsonLd(faq.visit)} />
    </>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 8v4l2.5 2" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function AccessIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
      <circle cx="12" cy="5.5" r="2" fill="currentColor" />
      <path
        d="M12 8v4m0 0 3 2m-3-2-3 2m3 0v4m-4 0h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ParkingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
      <rect x="5" y="4.5" width="14" height="15" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10 15V9h3a2 2 0 1 1 0 4h-3" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
