import Link from "next/link";
import { MediaPlaceholder, WireframeContainer, WireframeSection } from "@/components/wireframe/WireframePrimitives";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Wat u kunt verwachten bij uw bezoek — Galerie De Kunst van Kunst",
  description:
    "Een persoonlijke middag in onze galerie in Hengelo. Rustig welkom, koffie, tijd om te kijken. U kiest zelf of u iets meeneemt.",
  path: "/uw-bezoek",
});

export default function UwBezoekPage() {
  return (
    <>
      <WireframeSection>
        <WireframeContainer>
          <MediaPlaceholder label="Hero image placeholder" className="min-h-[260px] md:min-h-[340px] lg:min-h-[420px]" />
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection tone="neutral">
        <WireframeContainer>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-semibold text-neutral-800 lg:text-4xl">Intro section</h1>
            <p className="mt-4 text-sm text-neutral-600">Intro text placeholder</p>
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection>
        <WireframeContainer>
          <h2 className="text-2xl font-medium text-neutral-800">Zo verloopt uw middag</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article key={item} className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                <MediaPlaceholder label="Image placeholder" className="min-h-40" />
                <h3 className="mt-4 text-lg font-medium text-neutral-800">Step title {item}</h3>
                <p className="mt-2 text-sm text-neutral-600">Step text placeholder</p>
              </article>
            ))}
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection tone="neutral">
        <WireframeContainer>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-medium text-neutral-800">Geen druk section</h2>
              <div className="mt-4 space-y-3 text-sm text-neutral-600">
                <p>Text block placeholder</p>
                <p>Text block placeholder</p>
              </div>
            </div>
            <MediaPlaceholder label="Image placeholder" className="min-h-[260px] lg:min-h-[320px]" />
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection>
        <WireframeContainer>
          <h2 className="text-2xl font-medium text-neutral-800">Praktische details</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article key={item} className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-sm text-neutral-500">Detail card</p>
              </article>
            ))}
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection tone="neutral">
        <WireframeContainer>
          <div className="rounded-xl border border-neutral-200 bg-white p-8 text-center">
            <h2 className="text-2xl font-medium text-neutral-800">CTA section</h2>
            <p className="mt-3 text-sm text-neutral-600">Support text placeholder</p>
            <div className="mt-6">
              <Link
                href="/planner"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-neutral-300 bg-neutral-100 px-6 text-sm font-medium text-neutral-700"
              >
                CTA button
              </Link>
            </div>
          </div>
        </WireframeContainer>
      </WireframeSection>
    </>
  );
}
