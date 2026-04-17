import Link from "next/link";
import { siteConfig } from "@/content/site";
import { LogoMark } from "@/components/LogoMark";

const footerColumns = [
  {
    title: "Galerie",
    links: [
      { href: "/galerie", label: "Over de galerie" },
      { href: "/galerie#team", label: "Het team" },
      { href: "/galerie#kunstenaars", label: "Onze kunstenaars" },
    ],
  },
  {
    title: "Praktisch",
    links: [
      { href: "/uw-bezoek", label: "Uw bezoek" },
      { href: "/cheque", label: "Uw cheque activeren" },
      { href: "/planner", label: "Plan uw middag" },
    ],
  },
  {
    title: "Overige afspraken",
    links: [
      { href: "/afspraak/omruilen", label: "Schilderij omruilen" },
      { href: "/galerie/bezoek", label: "Afspraak zonder cheque" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-sand pb-10 pt-12 lg:pt-16">
      <div className="mx-auto max-w-wide px-5 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="text-lg font-medium text-ink">{column.title}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base text-ink underline-offset-4 transition-colors duration-150 ease-dkvk hover:text-bordeaux hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-medium text-ink">Contact</h2>
            <address className="mt-4 not-italic text-base leading-relaxed text-ink">
              {siteConfig.name}
              <br />
              {siteConfig.address.street}
              <br />
              {siteConfig.address.postalCode} {siteConfig.address.city}
              <br />
              {siteConfig.appointmentOnly}
            </address>
            <p className="mt-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-ink underline-offset-4 hover:text-bordeaux hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-2">
              <a
                href="tel:+31740000000"
                className="text-ink underline-offset-4 hover:text-bordeaux hover:underline"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <LogoMark small />
            <p className="text-sm text-muted">
              Sinds 2005 in Hengelo. KvK {siteConfig.kvk} · BTW {siteConfig.btw}
            </p>
            <p className="flex flex-wrap gap-4 text-sm text-ink">
              <Link href="/privacy" className="underline-offset-4 hover:text-bordeaux hover:underline">
                Privacy
              </Link>
              <Link
                href="/algemene-voorwaarden"
                className="underline-offset-4 hover:text-bordeaux hover:underline"
              >
                Algemene voorwaarden
              </Link>
              <Link href="/cookies" className="underline-offset-4 hover:text-bordeaux hover:underline">
                Cookies
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
