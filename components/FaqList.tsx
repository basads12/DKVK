type FaqItem = {
  q: string;
  a: string;
};

type FaqListProps = {
  heading: string;
  items: FaqItem[];
};

export function FaqList({ heading, items }: FaqListProps) {
  return (
    <section className="bg-creme py-12 lg:py-28">
      <div className="mx-auto max-w-narrow px-5 lg:px-8">
        <h2 className="text-[32px] font-light text-bordeaux lg:text-[48px]">{heading}</h2>
        <dl className="mt-10 space-y-8">
          {items.map((item) => (
            <div key={item.q}>
              <dt className="text-xl font-medium text-ink">{item.q}</dt>
              <dd className="mt-3 text-[17px] leading-relaxed text-ink">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
