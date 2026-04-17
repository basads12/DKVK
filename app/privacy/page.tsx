import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacyverklaring — Galerie De Kunst van Kunst",
  description: "Privacyverklaring van Galerie De Kunst van Kunst.",
  path: "/privacy",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacyverklaring"
      sections={[
        {
          title: "Welke gegevens wij verwerken",
          body: "Wij verwerken naam, e-mailadres, telefoonnummer, postcode en chequenummer voor het plannen en bevestigen van afspraken.",
        },
        {
          title: "Waarom wij gegevens verwerken",
          body: "Wij gebruiken gegevens uitsluitend voor afspraakbevestiging, contact bij wijzigingen en verificatie van cheque- of schilderijnummers.",
        },
        {
          title: "Bewaartermijn",
          body: "Wij bewaren gegevens maximaal 24 maanden na het laatste contact, tenzij een wettelijke verplichting anders voorschrijft.",
        },
        {
          title: "Uw rechten",
          body: "U heeft recht op inzage, correctie en verwijdering van uw gegevens. U kunt hiervoor contact met ons opnemen via e-mail of telefoon.",
        },
      ]}
    />
  );
}
