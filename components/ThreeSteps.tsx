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
    <section className="bg-sand py-12 lg:py-28">
      <div className="mx-auto max-w-default px-5 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">{eyebrow}</p>
        <h2 className="mt-2 text-[32px] font-light leading-tight tracking-[-0.015em] text-bordeaux lg:text-[48px]">
          {heading}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink">{subheading}</p>
        <ol className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-12">
          {steps.map((step, index) => (
            <li key={step.title} className="space-y-3">
              <p className="text-2xl font-medium text-gold">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="text-xl font-medium text-ink">{step.title}</h3>
              <p className="text-[17px] leading-relaxed text-ink">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
