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
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-narrow px-5 lg:px-8">
        <h2 className="text-[32px] font-light text-bordeaux lg:text-[48px]">{heading}</h2>
        <dl className="mt-10 space-y-6">
          {items.map((item) => (
            <div key={item.q} className="rounded-2xl border border-border bg-[#F7F4EE] p-6">
              <dt className="text-xl font-medium text-ink">{item.q}</dt>
              <dd className="mt-3 text-[17px] leading-relaxed text-ink">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
