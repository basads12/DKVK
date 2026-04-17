import Link from "next/link";

type LogoMarkProps = {
  small?: boolean;
};

export function LogoMark({ small }: LogoMarkProps) {
  return (
    <Link
      href="/"
      className="inline-flex items-center text-bordeaux focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
      aria-label="Ga naar de homepage van Galerie De Kunst van Kunst"
    >
      <span className={`font-medium tracking-tight ${small ? "text-base" : "text-lg"}`}>
        Galerie De Kunst van Kunst
      </span>
    </Link>
  );
}
