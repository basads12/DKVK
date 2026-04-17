type Step = {
  title: string;
  body: string;
};

type ThreeStepsProps = {
  eyebrow: string;
  heading: string;
  subheading: string;
  steps: Step[];
};

export function ThreeSteps({ eyebrow, heading, subheading, steps }: ThreeStepsProps) {
  return (
    <section className="bg-[#F7F4EE] py-20 lg:py-28">
      <div className="mx-auto max-w-default px-5 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">{eyebrow}</p>
        <h2 className="mt-2 text-[32px] font-light leading-tight tracking-[-0.015em] text-bordeaux lg:text-[48px]">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink">{subheading}</p>
        <ol className="mt-10 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-border bg-white p-6 shadow-[0_8px_24px_rgba(26,23,19,0.06)]">
              <p className="text-2xl font-medium text-gold">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl font-medium text-ink">{step.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-ink">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
