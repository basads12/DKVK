import { MediaPlaceholder, WireframeContainer, WireframeSection } from "@/components/wireframe/WireframePrimitives";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Plan uw middag — Galerie De Kunst van Kunst",
  description: "Transactionele planner",
  path: "/planner",
  noindex: true,
});

export default function PlannerPage() {
  return (
    <>
      <WireframeSection tone="neutral" className="py-16">
        <WireframeContainer>
          <MediaPlaceholder label="Top media banner placeholder" className="min-h-40 md:min-h-48" />
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection>
        <WireframeContainer>
          <h1 className="text-3xl font-semibold text-neutral-800 lg:text-4xl">Step intro section</h1>
          <p className="mt-4 text-sm text-neutral-600">Intro text placeholder</p>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection tone="neutral">
        <WireframeContainer>
          <h2 className="text-2xl font-medium text-neutral-800">Day selection cards</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <article key={item} className="rounded-xl border border-neutral-200 bg-white p-5">
                <p className="text-sm text-neutral-600">Day card placeholder</p>
              </article>
            ))}
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection>
        <WireframeContainer>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8">
            <h2 className="text-2xl font-medium text-neutral-800">Action area</h2>
            <p className="mt-3 text-sm text-neutral-600">Action helper text placeholder</p>
            <div className="mt-6 h-11 w-full max-w-xs rounded-md border border-neutral-300 bg-white" />
          </div>
        </WireframeContainer>
      </WireframeSection>

      <WireframeSection tone="neutral">
        <WireframeContainer>
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-medium text-neutral-800">Trust strip</h2>
            <ul className="mt-4 grid gap-2 text-sm text-neutral-600 md:grid-cols-3">
              <li>Trust item</li>
              <li>Trust item</li>
              <li>Trust item</li>
            </ul>
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
