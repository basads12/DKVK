import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-narrow px-5 lg:px-8">
        <h1 className="text-[44px] font-light text-bordeaux lg:text-[64px]">Deze pagina bestaat niet.</h1>
        <p className="mt-4 text-[17px] text-ink">U kunt verder via de homepage.</p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-14 items-center rounded-md bg-bordeaux px-8 font-medium text-creme"
        >
          Terug naar home
        </Link>
      </div>
    </section>
  );
}
