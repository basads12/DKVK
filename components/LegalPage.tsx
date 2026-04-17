import Link from "next/link";
import { legalDate, siteConfig } from "@/content/site";

type LegalSection = {
  title: string;
  body: string;
};

type LegalPageProps = {
  title: string;
  sections: LegalSection[];
};

export function LegalPage({ title, sections }: LegalPageProps) {
  return (
    <section className="bg-creme py-12 lg:py-20">
      <div className="mx-auto max-w-default px-5 lg:px-8">
        <h1 className="text-[40px] font-light text-bordeaux lg:text-[56px]">{title}</h1>
        <p className="mt-4 text-sm text-muted">Laatst bijgewerkt op {legalDate}</p>
        <div className="mt-8 space-y-8">
          {sections.map((section) => (
            <section key={section.title} aria-labelledby={section.title}>
              <h2 id={section.title} className="text-2xl font-medium text-ink">
                {section.title}
              </h2>
              <p className="mt-3 text-[17px] leading-relaxed text-ink">{section.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-10 rounded-md border border-border bg-sand p-5">
          <p className="text-[17px] leading-relaxed text-ink">
            {siteConfig.name}, {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}.
          </p>
          <p className="mt-2 text-[17px] text-ink">
            <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4 hover:text-bordeaux">
              {siteConfig.email}
            </a>{" "}
            ·{" "}
            <a href="tel:+31740000000" className="underline underline-offset-4 hover:text-bordeaux">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-3 text-sm text-muted">
            Voor juridische controle adviseren wij een laatste check door een jurist.
          </p>
        </div>
        <Link href="/" className="mt-8 inline-block text-ink underline underline-offset-4 hover:text-bordeaux">
          Terug naar homepage
        </Link>
      </div>
    </section>
  );
}
