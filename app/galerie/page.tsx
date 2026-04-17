import Link from "next/link";
import { MediaPlaceholder, WireframeContainer, WireframeSection } from "@/components/wireframe/WireframePrimitives";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "De galerie — Hengelo, sinds 2005 · De Kunst van Kunst",
  description:
    "Galerie De Kunst van Kunst ontvangt al sinds 2005 bezoek op afspraak in Hengelo. Een kleine groep kunstenaars, een rustige ruimte.",
  path: "/galerie",
});

export default function GaleriePage() {
  return (
    <>
      <WireframeSection tone="neutral">
        <WireframeContainer>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <MediaPlaceholder label="Wide image placeholder" className="min-h-[260px] lg:min-h-[340px]" />
            <div>
              <h1 className="text-3xl font-semibold text-neutral-800 lg:text-4xl">Hero intro</h1>
              <p className="mt-4 text-sm text-neutral-600">Intro text placeholder</p>
            </div>
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection>
        <WireframeContainer>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-medium text-neutral-800">Sinds 2005 section</h2>
              <div className="mt-4 space-y-3 text-sm text-neutral-600">
                <p>Text block placeholder</p>
                <p>Text block placeholder</p>
              </div>
            </div>
            <MediaPlaceholder label="Image placeholder" className="min-h-[240px] lg:min-h-[320px]" />
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection tone="neutral">
        <WireframeContainer>
          <h2 className="text-2xl font-medium text-neutral-800">Team section</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <article key={item} className="rounded-xl border border-neutral-200 bg-white p-5">
                <p className="text-sm text-neutral-600">Team block</p>
              </article>
            ))}
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection>
        <WireframeContainer>
          <h2 className="text-2xl font-medium text-neutral-800">Atmosphere media grid</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <MediaPlaceholder key={item} label="Image placeholder" className="min-h-48 lg:min-h-56" />
            ))}
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection tone="neutral">
        <WireframeContainer>
          <h2 className="text-2xl font-medium text-neutral-800">Video section</h2>
          <MediaPlaceholder label="Video placeholder" className="mt-8 min-h-[260px] lg:min-h-[360px]" />
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection>
        <WireframeContainer>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8">
            <h2 className="text-2xl font-medium text-neutral-800">CTA section</h2>
            <p className="mt-3 text-sm text-neutral-600">Support text placeholder</p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/planner"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-neutral-300 bg-neutral-100 px-6 text-sm font-medium text-neutral-700"
              >
                CTA button
              </Link>
              <Link href="/cheque" className="text-sm text-neutral-500 underline underline-offset-4">
                Secondary link
              </Link>
            </div>
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection tone="neutral">
        <WireframeContainer>
          <h2 className="text-2xl font-medium text-neutral-800">FAQ / support section</h2>
          <div className="mt-8 space-y-4">
            {[1, 2, 3].map((item) => (
              <article key={item} className="rounded-xl border border-neutral-200 bg-white p-5">
                <p className="text-sm text-neutral-600">Support item placeholder</p>
              </article>
            ))}
          </div>
        </WireframeContainer>
      </WireframeSection>
    </>
  );
}
