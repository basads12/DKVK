export const siteConfig = {
  name: "Galerie De Kunst van Kunst",
  shortName: "DKvK",
  url: "https://dekunstvankunst.nl",
  email: "welkom@dekunstvankunst.nl",
  phone: "+31 (0)74 000 00 00",
  address: {
    street: "Prins Bernhardplantsoen 12",
    postalCode: "7551 HT",
    city: "Hengelo",
    region: "Overijssel",
    country: "Nederland",
  },
  kvk: "08123456",
  btw: "NL001234567B01",
  appointmentOnly: "Uitsluitend op afspraak.",
};

export type Review = {
  quote: string;
  author: string;
  city: string;
};

export const reviews: Record<"vanKesteren" | "ponteyn" | "veldhuis", Review> = {
  vanKesteren: {
    quote:
      "Wij kwamen aarzelend aan, met een cheque in de brievenbus die we eerst niet vertrouwden. We werden ontvangen alsof we verwacht werden, met koffie en tijd. Er is niets aangeboden dat we niet wilden. We namen uiteindelijk een werk mee, maar het had net zo goed niet gehoeven.",
    author: "Jan en Annelies V.",
    city: "Ermelo",
  },
  ponteyn: {
    quote:
      "Twee uur gereden, en geen moment spijt. De galerie was rustig op maandagochtend. We hebben op ons tempo gekeken en gesproken. Mijn man komt normaal nooit in een galerie, maar had het thuis nog steeds over hoe prettig het was.",
    author: "Robert en Marieke P.",
    city: "Hilversum",
  },
  veldhuis: {
    quote:
      "Wat ons opviel: geen druk. Niemand die achter je aan loopt. U krijgt koffie en u kijkt. Pas toen wij er zelf naar vroegen, werd er over prijzen gesproken. Dat voelde eerlijk en rustig.",
    author: "Hans en Ineke V.",
    city: "Borne",
  },
};

export const partners = {
  ALU123: { name: "Aluwdoors" },
  STL456: { name: "Steellife" },
  GRD789: { name: "Grando" },
} as const;

export const faq = {
  home: [
    {
      q: "Is deze cheque echt?",
      a: "Ja. De cheque is verstuurd door een zakelijke relatie van u. Op de cheque-pagina controleert u hem met uw chequenummer en postcode.",
    },
    {
      q: "Moet ik iets kopen?",
      a: "Nee. De cheque staat voor een middag in de galerie. Of u iets meeneemt, bepaalt u zelf.",
    },
    {
      q: "Hoe lang duurt een bezoek?",
      a: "Tussen 45 en 90 minuten. U bepaalt het tempo.",
    },
    {
      q: "Wanneer kan ik komen?",
      a: "Uitsluitend op afspraak, op een dag die u schikt. Maandag is onze rustigste dag.",
    },
  ],
  cheque: [
    {
      q: "Waarom twee velden?",
      a: "Zo weten wij zeker dat de cheque bij u hoort, zonder meer gegevens te vragen dan nodig is.",
    },
    {
      q: "Mijn cheque wordt niet herkend. Wat nu?",
      a: "Neem gerust contact op. Mogelijk staat er een tikfout in de invoer of is de cheque eerder geactiveerd. Wij helpen u persoonlijk.",
    },
    {
      q: "Is deze controle veilig?",
      a: "Ja. Wij gebruiken uw gegevens uitsluitend om uw cheque te herkennen en uw afspraak mogelijk te maken.",
    },
  ],
  planner: [
    {
      q: "Waarom zie ik geen bedragen?",
      a: "Uw middag is al geregeld. Deze planner toont alleen planning en gegevens die nodig zijn voor uw afspraak.",
    },
    {
      q: "Kan ik later nog wijzigen?",
      a: "Ja. In de bevestigingsmail staat een link waarmee u rustig kunt verzetten of annuleren.",
    },
  ],
  visit: [
    {
      q: "Hoe lang duurt een bezoek precies?",
      a: "Tussen 45 en 90 minuten. U bepaalt het tempo.",
    },
    {
      q: "Moet ik vooraf iets weten over kunst?",
      a: "Nee. Wij ontvangen veel bezoekers die geen galeriepubliek zijn.",
    },
    {
      q: "Is de galerie rolstoeltoegankelijk?",
      a: "Ja. Onze ruimte is gelijkvloers en drempelvrij bereikbaar.",
    },
  ],
  gallery: [
    {
      q: "Hoe lang bestaat de galerie al?",
      a: "Sinds 2005, op dezelfde plek in Hengelo.",
    },
    {
      q: "Zijn jullie altijd open?",
      a: "Nee. Wij ontvangen uitsluitend op afspraak.",
    },
    {
      q: "Kan ik ook komen zonder cheque?",
      a: "Ja. U kunt onderaan de galeriepagina een afspraak zonder cheque plannen.",
    },
  ],
  contact: [
    {
      q: "Zijn jullie altijd op afspraak?",
      a: "Ja. Zo weet u zeker dat u verwacht wordt en dat er tijd voor u is.",
    },
    {
      q: "Is er parkeergelegenheid?",
      a: "Ja. Parkeren voor de deur, altijd gratis.",
    },
    {
      q: "Ik heb geen cheque. Kan ik toch komen?",
      a: "Ja. U kunt een afspraak zonder cheque maken via de link op de contact- en galeriepagina.",
    },
  ],
};

export const legalDate = "17 april 2026";
