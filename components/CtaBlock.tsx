import Link from "next/link";

type CtaBlockProps = {
  heading: string;
  subheading: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CtaBlock({ heading, subheading, primary, secondary }: CtaBlockProps) {
  return (
    <section className="bg-creme py-12 lg:py-28">
      <div className="mx-auto max-w-narrow px-5 text-left lg:px-8">
        <h2 className="text-[32px] font-light text-bordeaux lg:text-[48px]">{heading}</h2>
        <p className="mt-4 text-lg text-ink">{subheading}</p>
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <Link
            href={primary.href}
            className="inline-flex min-h-14 items-center justify-center rounded-md bg-bordeaux px-8 text-base font-medium text-creme transition-colors duration-200 ease-dkvk hover:bg-bordeaux-pressed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
          >
            {primary.label}
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex min-h-12 items-center text-base text-ink underline underline-offset-4 transition-colors duration-150 ease-dkvk hover:text-bordeaux"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
