import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-creme py-20">
      <div className="mx-auto max-w-narrow px-5 lg:px-8">
        <div className="relative mb-8 aspect-[3/2] overflow-hidden rounded-2xl border border-border">
          <Image
            src="/Kunstwerken/Website-impressie-45.webp"
            alt="Sfeervol beeld uit de galerie."
            fill
            sizes="(max-width: 960px) 100vw, 680px"
            priority
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent" />
        </div>
        <h1 className="text-4xl font-semibold text-bordeaux md:text-5xl lg:text-6xl">Deze pagina bestaat niet.</h1>
        <p className="mt-4 text-base leading-relaxed text-ink md:text-[17px]">
          Dit pad loopt dood, maar de galerie staat voor u open op afspraak.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-14 items-center rounded-md bg-bordeaux px-8 text-sm font-semibold text-creme transition-colors hover:bg-bordeaux-pressed"
        >
          Terug naar home
        </Link>
      </div>
    </section>
  );
}
