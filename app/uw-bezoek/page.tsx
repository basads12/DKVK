import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Wat u kunt verwachten bij uw bezoek — Galerie De Kunst van Kunst",
  description:
    "Een persoonlijke middag in onze galerie in Hengelo. Rustig welkom, koffie, tijd om te kijken. U kiest zelf of u iets meeneemt.",
  path: "/uw-bezoek",
});

export default function UwBezoekPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="border-b border-neutral-200 py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.12em] text-neutral-500">Uw bezoek</p>
          <h1 className="mb-8 text-4xl font-medium leading-tight md:text-5xl">
            Een rustig moment om kunst te ervaren, op uw tempo.
          </h1>
          <div className="mx-auto max-w-2xl space-y-4 text-lg text-neutral-600">
            <p>U komt binnen, hangt uw jas op, en ademt even uit.</p>
            <p>Wij zetten koffie of thee. Daarna bepaalt u het tempo.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-[#F7F4EE] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-3xl font-medium text-neutral-900">Wat er gebeurt wanneer u aankomt</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-7">
              <p className="mb-2 text-sm text-neutral-500">1</p>
              <h3 className="mb-3 text-lg font-medium">Persoonlijk welkom</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                We doen open, nemen uw jas aan en vragen wat u wilt drinken.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-7">
              <p className="mb-2 text-sm text-neutral-500">2</p>
              <h3 className="mb-3 text-lg font-medium">Korte afstemming</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                In een paar minuten horen we wat u mooi vindt en waar u juist niet van houdt.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-7">
              <p className="mb-2 text-sm text-neutral-500">3</p>
              <h3 className="mb-3 text-lg font-medium">Vrij rondkijken</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Daarna loopt u vrij rond. Wij blijven dichtbij als u vragen heeft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-3xl font-medium text-neutral-900">Geen druk, geen verplichting</h2>
          <div className="grid gap-4 text-neutral-700 md:grid-cols-3">
            {[
              "U hoeft niets voor te bereiden.",
              "Er is geen verkooppraatje en geen haast om te beslissen.",
              "Kijken, vergelijken, nog een ronde lopen. Alles is goed.",
            ].map((item) => (
              <article key={item} className="rounded-2xl border border-neutral-200 bg-white p-6 text-sm leading-relaxed">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-[#F7F4EE] py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-8 text-3xl font-medium text-neutral-900">Praktische details</h2>
          <div className="grid gap-4 text-neutral-700 md:grid-cols-3">
            <article className="rounded-2xl border border-neutral-200 bg-white p-6 text-sm leading-relaxed">
              <p className="font-medium text-neutral-900">Tijd</p>
              <p className="mt-2">Meestal 60 tot 90 minuten.</p>
            </article>
            <article className="rounded-2xl border border-neutral-200 bg-white p-6 text-sm leading-relaxed">
              <p className="font-medium text-neutral-900">Met wie</p>
              <p className="mt-2">Alleen, met z&apos;n tweeën of met een klein gezelschap.</p>
            </article>
            <article className="rounded-2xl border border-neutral-200 bg-white p-6 text-sm leading-relaxed">
              <p className="font-medium text-neutral-900">Locatie</p>
              <p className="mt-2">In Hengelo, goed bereikbaar via A1/A35 en ook met het openbaar vervoer.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-medium text-neutral-900">Plan uw bezoek wanneer het u past</h2>
          <p className="mx-auto mb-10 max-w-xl text-neutral-600">
            Kies een moment in de agenda. Wij bevestigen uw afspraak kort daarna.
          </p>
          <Link
            href="/planner"
            className="inline-flex rounded-md bg-[#7A1E2C] px-6 py-3 text-white transition-colors duration-200 hover:bg-[#5E1A26]"
          >
            Plan uw bezoek
          </Link>
        </div>
      </section>
    </main>
  );
}
