import Link from "next/link";
import { MediaPlaceholder, WireframeContainer, WireframeSection } from "@/components/wireframe/WireframePrimitives";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Galerie De Kunst van Kunst — Hengelo, uitsluitend op afspraak",
  description:
    "Een middag voor u geregeld in onze galerie in Hengelo. Persoonlijke ontvangst, koffie, rust. Uitsluitend op afspraak, sinds 2005.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <WireframeSection tone="neutral" className="py-24 lg:py-28">
        <WireframeContainer>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-neutral-500">Hero section</p>
              <h1 className="mt-3 max-w-xl text-4xl font-semibold text-neutral-800 lg:text-5xl">Hero text</h1>
              <p className="mt-4 max-w-xl text-base text-neutral-600">Supporting text placeholder</p>
              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
                <Link
                  href="/cheque"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-neutral-300 bg-neutral-100 px-6 text-sm font-medium text-neutral-700"
                >
                  Activeer uw cheque
                </Link>
                <Link href="/uw-bezoek" className="text-sm text-neutral-500 underline underline-offset-4">
                  Lees wat u kunt verwachten
                </Link>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-neutral-500">
                <li>✔ Op afspraak</li>
                <li>✔ Geen verplichting</li>
                <li>✔ Rustig ontvangen</li>
              </ul>
            </div>
            <MediaPlaceholder label="Image placeholder" className="min-h-[320px] lg:min-h-[420px]" />
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection className="py-20">
        <WireframeContainer>
          <div className="mx-auto max-w-xl rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-10 text-center text-sm text-neutral-600">
            U hoeft niets voor te bereiden. Wij begeleiden u stap voor stap.
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection tone="neutral">
        <WireframeContainer>
          <h2 className="text-2xl font-medium text-neutral-800">In drie stappen</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article key={item} className="rounded-xl border border-neutral-200 bg-white p-6">
                <p className="text-sm text-neutral-500">Stap {item}</p>
                <h3 className="mt-3 text-lg font-medium text-neutral-800">Step title</h3>
                <p className="mt-2 text-sm text-neutral-600">Short description</p>
              </article>
            ))}
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection>
        <WireframeContainer>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-medium text-neutral-800">About section</h2>
              <div className="mt-4 space-y-3 text-sm text-neutral-600">
                <p>Text block placeholder</p>
                <p>Text block placeholder</p>
                <p>Text block placeholder</p>
              </div>
            </div>
            <MediaPlaceholder label="Image placeholder" className="min-h-[260px] lg:min-h-[320px]" />
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection tone="neutral">
        <WireframeContainer>
          <h2 className="text-2xl font-medium text-neutral-800">Reviews section</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article key={item} className="rounded-xl border border-neutral-200 bg-white p-6">
                <p className="text-sm text-neutral-500">Review block</p>
              </article>
            ))}
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection>
        <WireframeContainer>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-medium text-neutral-800">Location / visit section</h2>
              <div className="mt-4 space-y-3 text-sm text-neutral-600">
                <p>Text block placeholder</p>
                <p>Text block placeholder</p>
              </div>
            </div>
            <MediaPlaceholder label="Image placeholder" className="min-h-[260px] lg:min-h-[320px]" />
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection tone="neutral">
        <WireframeContainer>
          <div className="rounded-xl border border-neutral-200 bg-white p-8">
            <h2 className="text-2xl font-medium text-neutral-800">CTA section</h2>
            <p className="mt-3 text-sm text-neutral-600">Support text placeholder</p>
            <div className="mt-6">
              <Link
                href="/cheque"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-neutral-300 bg-neutral-100 px-6 text-sm font-medium text-neutral-700"
              >
                Activeer uw cheque
              </Link>
            </div>
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection>
        <WireframeContainer>
          <h2 className="text-2xl font-medium text-neutral-800">FAQ section</h2>
          <div className="mt-8 space-y-4">
            {[1, 2, 3].map((item) => (
              <article key={item} className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-sm text-neutral-600">FAQ item placeholder</p>
              </article>
            ))}
          </div>
        </WireframeContainer>
      </WireframeSection>
    </>
  );
}
