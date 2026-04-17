import { type Review } from "@/content/site";

type ReviewsListProps = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  items: Review[];
};

export function ReviewsList({ eyebrow, heading, subheading, items }: ReviewsListProps) {
  return (
    <section className="bg-sand py-12 lg:py-28">
      <div className="mx-auto max-w-default px-5 lg:px-8">
        {eyebrow ? (
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-gold">{eyebrow}</p>
        ) : null}
        <h2 className="mt-2 text-[32px] font-light text-bordeaux lg:text-[48px]">{heading}</h2>
        {subheading ? <p className="mt-4 text-lg text-ink">{subheading}</p> : null}
        <div className="mx-auto mt-10 max-w-narrow space-y-12 lg:space-y-16">
          {items.map((review) => (
            <blockquote key={review.author} className="space-y-4">
              <p className="text-[17px] leading-relaxed text-ink lg:text-[19px]">{`“${review.quote}”`}</p>
              <cite className="block text-sm not-italic text-muted">
                — {review.author}, {review.city}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
