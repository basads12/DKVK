import { LegalPage } from "@/components/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Algemene voorwaarden — Galerie De Kunst van Kunst",
  description: "Algemene voorwaarden van Galerie De Kunst van Kunst.",
  path: "/algemene-voorwaarden",
  noindex: true,
});

export default function AlgemeneVoorwaardenPage() {
  return (
    <LegalPage
      title="Algemene voorwaarden"
      sections={[
        {
          title: "Identiteit ondernemer",
          body: "Galerie De Kunst van Kunst is gevestigd in Hengelo en werkt uitsluitend op afspraak. KvK- en BTW-gegevens staan in de footer van deze site.",
        },
        {
          title: "Totstandkoming afspraak",
          body: "Een afspraak komt tot stand na bevestiging per e-mail. In die bevestiging staan datum, tijd en contactgegevens voor wijzigingen.",
        },
        {
          title: "Wijzigen en annuleren",
          body: "Wijzigen of annuleren kan via de bevestigingsmail of telefonisch. Wij vragen u dit zo vroeg mogelijk door te geven.",
        },
        {
          title: "Aansprakelijkheid",
          body: "Wij doen ons uiterste best om informatie op de website actueel en correct te houden. Kennelijke fouten of vergissingen binden ons niet.",
        },
      ]}
    />
  );
}
