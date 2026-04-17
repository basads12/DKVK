import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";
import { faq, reviews, siteConfig } from "@/content/site";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Galerie De Kunst van Kunst — Hengelo, uitsluitend op afspraak",
  description:
    "Een middag voor u geregeld in onze galerie in Hengelo. Persoonlijke ontvangst, koffie, rust. Uitsluitend op afspraak, sinds 2005.",
  path: "/",
});

export default function HomePage() {
  const homeReviews = [reviews.vanKesteren, reviews.ponteyn, reviews.veldhuis];
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`,
  )}`;

  const steps: { title: string; body: string; icon: ReactNode }[] = [
    {
      title: "Activeer uw cheque",
      body: "Vul chequenummer en postcode in. Binnen enkele seconden ziet u of alles klopt.",
      icon: <TicketIcon />,
    },
    {
      title: "Plan uw middag",
      body: "Kies een dagdeel dat u schikt. Maandag is doorgaans ons rustigste moment.",
      icon: <CalendarIcon />,
    },
    {
      title: "Ontvangen worden met koffie",
      body: "Wij nemen de tijd, zonder verkooppraat en zonder verplichtingen.",
      icon: <CoffeeIcon />,
    },
  ];

  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden bg-bordeaux text-creme">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/Video/web/DJI_20260319182158_0030_D_MASTER-poster.jpg"
            className="h-full w-full object-cover object-center sm:object-[50%_40%]"
          >
            <source src="/Video/web/DJI_20260319182158_0030_D_MASTER-1080p.mp4" type="video/mp4" />
          </video>
          <Image
            src="/Video/web/DJI_20260319182158_0030_D_MASTER-poster.jpg"
            alt="Luchtbeeld van de galerie in Hengelo."
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-center sm:object-[50%_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/55 to-bordeaux/90" />
        </div>

        <div className="relative mx-auto flex min-h-[78vh] max-w-wide items-end px-5 py-14 md:px-8 md:py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">Galerie in Hengelo</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl lg:text-[56px]">
              Een middag in de galerie, uitsluitend op afspraak.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-creme/90 md:text-lg">
              Uw cheque is een uitnodiging voor rust, koffie en aandacht. Sinds 2005 ontvangen wij bezoekers persoonlijk,
              zonder druk en zonder verplichting om iets te kopen.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/cheque"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 text-sm font-semibold text-ink transition-colors hover:bg-[#d08a43]"
              >
                Activeer uw cheque
              </Link>
              <Link href="/uw-bezoek" className="text-sm font-medium text-creme underline underline-offset-4 hover:text-gold">
                Lees wat u kunt verwachten
              </Link>
            </div>
            <p className="mt-3 text-xs text-gold">
              <Link href="/galerie" className="hover:underline hover:underline-offset-4">
                Nog geen cheque? Lees eerst wie we zijn →
              </Link>
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-creme/90 md:grid-cols-3 md:gap-4">
              <li>Op afspraak</li>
              <li>Geen verplichting</li>
              <li>Rustige ontvangst</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-creme py-16 md:py-20">
        <div className="mx-auto max-w-default px-5 md:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-sand px-6 py-8 text-center text-sm leading-relaxed text-ink md:text-base">
            U hoeft niets voor te bereiden. U wordt ontvangen met koffie, kijkt op uw eigen tempo en beslist pas als u er
            zelf om vraagt.
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-default px-5 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">Zo werkt het</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">In drie stappen naar uw bezoek</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-border bg-creme p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-bordeaux/5 text-bordeaux">
                  {step.icon}
                </div>
                <p className="mt-4 text-sm font-medium text-gold">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-creme py-16 md:py-20">
        <div className="mx-auto grid max-w-wide gap-8 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">Sinds 2005</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">Een galeriebezoek zonder haast.</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink md:text-base">
              <p>
                Galerie De Kunst van Kunst ontvangt al ruim twintig jaar bezoekers in Hengelo. Altijd op afspraak, zodat er
                tijd is voor uw vragen en voorkeuren.
              </p>
              <p>
                U hoeft geen kunstkenner te zijn. We laten werken zien, vertellen alleen waar u om vraagt en laten u vooral
                zelf kijken.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/Kunstwerken/IMG_1600-scaled-e1631607975134.jpeg"
              alt="Schilderij uit de collectie van de galerie."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-default px-5 md:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">Ervaringen van bezoekers</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">Wat gasten over hun middag vertellen</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {homeReviews.map((review) => (
              <blockquote key={review.author} className="rounded-2xl border border-border bg-creme p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-bordeaux/35 bg-bordeaux/5 text-xs font-semibold uppercase tracking-[0.08em] text-bordeaux">
                  {initialsFromAuthor(review.author)}
                </div>
                <p className="text-sm leading-relaxed text-ink">{`“${review.quote}”`}</p>
                <cite className="mt-4 block text-sm not-italic text-muted">
                  — {review.author}, {review.city}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creme py-16 md:py-20">
        <div className="mx-auto grid max-w-wide gap-8 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">Locatie</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">Makkelijk bereikbaar in Hengelo</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink md:text-base">
              U vindt ons aan het {siteConfig.address.street} in {siteConfig.address.city}. Parkeren kan meestal recht voor
              de deur en is gratis. Liever eerst bellen? Dat kan op {siteConfig.phone}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-sand px-6 text-sm font-semibold text-ink transition-colors hover:bg-bordeaux hover:text-creme"
              >
                Bekijk route en contact
              </Link>
              <Link
                href={mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-creme px-6 text-sm font-semibold text-ink transition-colors hover:bg-sand"
              >
                Open in Google Maps
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/Kunstwerken/Gezelligheid-dame-donker-scaled-1.webp"
                alt="Sfeervol beeld van een bezoek in de galerie."
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <Link
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-28 items-end overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-sand via-creme to-[#f6e8d6] p-4 text-ink"
            >
              <div className="absolute right-4 top-4 h-7 w-7 rounded-full border border-bordeaux/30 bg-bordeaux/10" />
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-gold">Kaart</p>
                <p className="mt-1 text-sm font-semibold">{siteConfig.address.street}</p>
                <p className="text-xs text-muted">
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </p>
                <p className="mt-2 text-xs font-medium text-bordeaux transition-colors group-hover:text-ink">
                  Open routebeschrijving
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bordeaux py-16 md:py-20">
        <div className="mx-auto max-w-default px-5 md:px-8">
          <div className="relative aspect-[4/1] min-h-72 overflow-hidden rounded-2xl border border-gold/40">
            <Image
              src="/Kunstwerken/Website-impressie-52.webp"
              alt="Panoramisch sfeerbeeld uit de galerie."
              fill
              sizes="100vw"
              className="object-cover object-center opacity-25"
            />
            <div className="relative z-10 p-8 md:p-12">
              <h2 className="max-w-2xl text-3xl font-semibold text-creme md:text-4xl">Plan een rustige middag voor uzelf.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-creme/90 md:text-base">
                Activeer uw cheque in twee stappen en kies daarna een moment dat bij u past. Wij zorgen voor koffie, tijd en
                een persoonlijke ontvangst.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/cheque"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 text-sm font-semibold text-ink transition-colors hover:bg-[#d08a43]"
                >
                  Activeer uw cheque
                </Link>
                <Link
                  href="/uw-bezoek"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-creme/40 px-6 text-sm font-semibold text-creme transition-colors hover:bg-creme/10"
                >
                  Bekijk uw bezoek
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-creme py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-narrow px-5 md:px-8">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Veelgestelde vragen</h2>
          <dl className="mt-8 space-y-4">
            {faq.home.map((item) => (
              <div key={item.q} className="rounded-2xl border border-border bg-sand p-5 md:p-6">
                <dt className="text-base font-semibold text-ink md:text-lg">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink md:text-base">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <JsonLd data={faqJsonLd(faq.home)} />
    </>
  );
}

function initialsFromAuthor(author: string) {
  const clean = author.replace("Familie ", "").replace("Dhr. en mw. ", "").trim();
  return clean
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function TicketIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6">
      <path
        d="M5 7.5h14a1 1 0 0 1 1 1V11a2 2 0 0 0 0 4v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V15a2 2 0 0 0 0-4V8.5a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 7.5v11" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6">
      <rect x="4" y="5.5" width="16" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <path d="M8 3.5v4M16 3.5v4M4 10h16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <rect x="8" y="12.5" width="3" height="3" rx="0.75" fill="currentColor" />
    </svg>
  );
}

function CoffeeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6">
      <path
        d="M5 11h10v3.75A3.25 3.25 0 0 1 11.75 18H8.25A3.25 3.25 0 0 1 5 14.75V11Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path d="M15 12h1.5a2 2 0 0 1 0 4H15" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M7 20h8M8.5 7.5c0-.5.5-.9.5-1.5 0-.8-1-1.2-1-2M12 7.5c0-.5.5-.9.5-1.5 0-.8-1-1.2-1-2" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
