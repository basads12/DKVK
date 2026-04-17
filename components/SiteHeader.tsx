"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark } from "@/components/LogoMark";

const navItems = [
  { href: "/cheque", label: "Cheque" },
  { href: "/uw-bezoek", label: "Uw bezoek" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isPlanner = pathname === "/planner";

  return (
    <header
      className={`sticky top-0 z-40 bg-creme transition-[border-color] duration-200 ease-dkvk ${scrolled ? "border-b border-border" : "border-b border-transparent"}`}
    >
      <div className="mx-auto flex h-16 w-full max-w-wide items-center gap-4 px-5 lg:h-20 lg:px-8">
        <LogoMark />
        <nav aria-label="Hoofdnavigatie" className="ml-auto hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] font-medium transition-colors duration-150 ease-dkvk hover:text-bordeaux ${active ? "border-b-2 border-bordeaux pb-1 text-bordeaux" : "text-ink"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-6">
          <Link
            href={isPlanner ? "/" : "/cheque"}
            className="rounded-md bg-bordeaux px-5 py-2.5 text-sm font-medium text-creme transition-colors duration-200 ease-dkvk hover:bg-bordeaux-pressed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
          >
            {isPlanner ? "Afbreken" : "Activeer uw cheque"}
          </Link>
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            className="inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="h-0.5 w-6 bg-current" />
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-creme px-5 py-8 lg:hidden">
          <nav aria-label="Mobiel hoofdmenu">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-14 items-center text-xl font-medium text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordeaux"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
