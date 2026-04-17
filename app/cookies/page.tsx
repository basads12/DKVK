import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookieverklaring — Galerie De Kunst van Kunst",
  description: "Cookieverklaring van Galerie De Kunst van Kunst.",
  path: "/cookies",
  noindex: true,
});

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookieverklaring"
      sections={[
        {
          title: "Welke cookies wij gebruiken",
          body: "Wij gebruiken uitsluitend strikt noodzakelijke cookies voor sessiebeheer, beveiliging en de plannerflow.",
        },
        {
          title: "Geen trackingcookies in v1",
          body: "Wij plaatsen geen marketing- of analytische cookies van derden in deze fase.",
        },
        {
          title: "Toekomstige analytics",
          body: "Als wij in een latere fase analytics toevoegen, doen wij dat uitsluitend met duidelijke opt-in.",
        },
      ]}
    />
  );
}
