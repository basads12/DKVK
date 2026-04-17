import Link from "next/link";

type HeroProps = {
  kicker?: string;
  headline: string;
  subheadline?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function Hero({ kicker, headline, subheadline, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-wide px-5 lg:px-8">
        {kicker ? (
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">{kicker}</p>
        ) : null}
        <h1 className="mt-2 max-w-3xl text-[44px] font-light leading-[1.05] tracking-[-0.02em] text-bordeaux lg:text-[72px]">
          {headline}
        </h1>
        {subheadline ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink lg:text-[22px]">{subheadline}</p>
        ) : null}
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <Link
            href={primaryCta.href}
            className="inline-flex min-h-14 items-center justify-center rounded-md bg-bordeaux px-8 text-base font-medium text-creme transition-colors duration-200 ease-dkvk hover:bg-bordeaux-pressed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className="inline-flex min-h-12 items-center text-base text-ink underline underline-offset-4 transition-colors duration-150 ease-dkvk hover:text-bordeaux"
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
