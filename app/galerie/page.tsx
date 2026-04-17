import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { faq } from "@/content/site";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "De galerie — Hengelo, sinds 2005 · De Kunst van Kunst",
  description:
    "Galerie De Kunst van Kunst ontvangt al sinds 2005 bezoek op afspraak in Hengelo. Een kleine groep kunstenaars, een rustige ruimte.",
  path: "/galerie",
});

export default function GaleriePage() {
  const galleryGrid: { src: string; alt: string; aspectClass: string }[] = [
    {
      src: "/Kunstwerken/Website-impressie-28-scaled-1.webp",
      alt: "Ruimtelijk sfeerbeeld uit de galerie.",
      aspectClass: "aspect-square",
    },
    {
      src: "/Kunstwerken/Website-impressie-38-scaled-1.webp",
      alt: "Verticale compositie van een werk en wandpresentatie.",
      aspectClass: "aspect-[4/5]",
    },
    {
      src: "/Kunstwerken/Website-impressie-41.webp",
      alt: "Breed beeld van de collectie-opstelling in de ruimte.",
      aspectClass: "aspect-[3/2]",
    },
    {
      src: "/Kunstwerken/Website-impressie-45.webp",
      alt: "Sfeervol detail van de galerie-omgeving.",
      aspectClass: "aspect-[4/5]",
    },
    {
      src: "/Kunstwerken/Website-impressie-47-scaled-1.webp",
      alt: "Panoramische blik op de galeriewand.",
      aspectClass: "aspect-[3/2]",
    },
    {
      src: "/Kunstwerken/Website-impressie-52.webp",
      alt: "Abstraherende kleurvlakken uit de collectie.",
      aspectClass: "aspect-square",
    },
  ];

  return (
    <>
      <section className="bg-creme py-12 md:py-16">
        <div className="mx-auto max-w-wide px-5 md:px-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/Kunstwerken/Website-impressie-14-scaled-1.webp"
              alt="Interieur van Galerie De Kunst van Kunst."
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              priority
              className="object-cover"
            />
          </div>
          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">Galerie De Kunst van Kunst</p>
            <h1 className="mt-3 text-4xl font-semibold text-ink md:text-5xl">Een rustige galerie in Hengelo, sinds 2005.</h1>
            <p className="mt-4 text-sm leading-relaxed text-ink md:text-base">
              Wij ontvangen uitsluitend op afspraak, zodat u de ruimte krijgt om zonder haast rond te kijken. Geen groepen,
              geen drukte, wel aandacht en tijd.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto grid max-w-wide gap-8 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">Sinds 2005</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">Een galerie die tijd maakt voor uw bezoek.</h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-ink md:text-base">
              <p>
                We werken met een kleine selectie kunstenaars en een wisselende presentatie van figuratief en abstract werk.
              </p>
              <p>
                Omdat we op afspraak werken, is elk bezoek persoonlijk. U bepaalt het tempo, wij geven context wanneer u dat
                prettig vindt.
              </p>
              <p>Zo blijft de ervaring overzichtelijk, warm en vrij van verkooppraat.</p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/Kunstwerken/Website-impressie-20-scaled-1-e1732727424230.webp"
              alt="Sfeerimpressie van de collectie in de galerie."
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-creme py-16 md:py-20">
        <div className="mx-auto max-w-default px-5 md:px-8">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Het team</h2>
          {/* TODO: vervang placeholders met echte 4:5 team-portretten uit fotoshoot A1 */}
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Marianne de Vries",
                role: "Galeriehouder",
                bio: "Begeleidt bezoekers tijdens rondleidingen en bewaakt de selectie van nieuwe werken.",
              },
              {
                name: "Erik van Dalen",
                role: "Collectiecoordinator",
                bio: "Verzorgt de opbouw van exposities en stemt opdrachten af met kunstenaars.",
              },
              {
                name: "Sanne Mulder",
                role: "Gastvrouw op afspraak",
                bio: "Ontvangt bezoekers, plant afspraken en zorgt voor een rustige middag in de galerie.",
              },
            ].map((member) => (
              <article key={member.name} className="rounded-2xl border border-border bg-sand p-5">
                {/* TODO: vervang door next/image met canoniek teamportret */}
                <div className="mb-4 h-24 w-24 rounded-full border border-border bg-creme" aria-hidden />
                <h3 className="text-xl font-semibold text-ink">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-wide px-5 md:px-8">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Sfeer in de galerie</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {galleryGrid.map((item) => (
              <div
                key={item.src}
                className={`relative overflow-hidden rounded-2xl border border-border bg-creme ${item.aspectClass}`}
              >
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bordeaux py-16 md:py-20">
        <div className="mx-auto max-w-wide px-5 md:px-8">
          <h2 className="text-3xl font-semibold text-creme md:text-4xl">Galerie in beweging</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-creme/90 md:text-base">
            Krijg alvast een indruk van de omgeving en de sfeer rondom de galerie voordat u uw afspraak plant.
          </p>
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-gold/40">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/Video/web/DJI_20260319182510_0041_D_MASTER-poster.jpg"
              className="h-full w-full object-cover motion-reduce:hidden"
            >
              <source media="(max-width: 767px)" src="/Video/web/DJI_20260319182510_0041_D_MASTER-720p.mp4" type="video/mp4" />
              <source media="(min-width: 768px)" src="/Video/web/DJI_20260319182510_0041_D_MASTER-1080p.mp4" type="video/mp4" />
            </video>
            <Image
              src="/Video/web/DJI_20260319182510_0041_D_MASTER-poster.jpg"
              alt="Luchtbeeld van de buurt rond de galerie."
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="hidden object-cover motion-reduce:block"
            />
          </div>
        </div>
      </section>

      <section className="bg-creme py-16 md:py-20">
        <div className="mx-auto max-w-default px-5 md:px-8">
          <div className="rounded-2xl border border-border bg-sand p-8">
            <h2 className="text-3xl font-semibold text-ink md:text-4xl">Bezoek plannen</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink md:text-base">
              U bent welkom met of zonder cheque. Plan een afspraak op een moment dat u past, dan zorgen wij voor koffie en
              een rustige ontvangst.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/galerie/bezoek"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-bordeaux px-6 text-sm font-semibold text-creme transition-colors hover:bg-bordeaux-pressed"
              >
                Maak afspraak zonder cheque
              </Link>
              <Link
                href="/cheque"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-creme px-6 text-sm font-semibold text-ink transition-colors hover:bg-sand"
              >
                Activeer uw cheque
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-narrow px-5 md:px-8">
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Veelgestelde vragen</h2>
          <dl className="mt-8 space-y-4">
            {faq.gallery.map((item) => (
              <div key={item.q} className="rounded-2xl border border-border bg-creme p-5 md:p-6">
                <dt className="text-base font-semibold text-ink md:text-lg">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink md:text-base">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <JsonLd data={faqJsonLd(faq.gallery)} />
    </>
  );
}
