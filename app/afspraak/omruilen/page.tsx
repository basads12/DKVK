import { OmruilForm } from "@/components/OmruilForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Schilderij omruilen — Galerie De Kunst van Kunst",
  description: "Wilt u een werk omruilen? Vul uw schilderij-nummer en postcode in. Wij regelen het rustig voor u.",
  path: "/afspraak/omruilen",
});

export default function OmruilenPage() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-narrow px-5 lg:px-8">
        <h1 className="text-[44px] font-light text-bordeaux lg:text-[72px]">Een werk omruilen.</h1>
        <p className="mt-4 text-lg text-ink">U bent klant bij ons. Wij regelen dit rustig voor u.</p>
        <p className="mt-4 text-[17px] leading-relaxed text-ink">
          Vul hieronder het nummer van uw schilderij en uw postcode in. Na herkenning kiest u een dag en tijd die u
          schikt.
        </p>
        <div className="mt-10">
          <OmruilForm />
        </div>
      </div>
    </section>
  );
}
