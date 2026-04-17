type DarkAnchorProps = {
  heading: string;
  subheading: string;
  body: string;
  cta?: { label: string; href: string };
};

export function DarkAnchor({ heading, subheading, body, cta }: DarkAnchorProps) {
  return (
    <section className="bg-ink py-16 lg:py-28">
      <div className="mx-auto max-w-wide px-5 lg:px-8">
        <h2 className="text-[32px] font-light tracking-[-0.015em] text-creme lg:text-[48px]">{heading}</h2>
        <p className="mt-3 text-xl text-[#D8D0C1]">{subheading}</p>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-creme">{body}</p>
        {cta ? (
          <a
            href={cta.href}
            className="mt-8 inline-flex min-h-14 items-center justify-center rounded-md bg-bordeaux px-8 text-base font-medium text-creme transition-colors duration-200 ease-dkvk hover:bg-bordeaux-pressed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-creme"
          >
            {cta.label}
          </a>
        ) : null}
      </div>
    </section>
  );
}
