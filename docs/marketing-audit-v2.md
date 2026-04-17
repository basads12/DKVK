# Marketing-audit v2 — dkvk-kvk-v10.vercel.app
**Versie:** 17 april 2026, na iteratie-ronde v1.3 + 3-steps editorial redesign
**Perspectief:** CRO-lead + brand strategist + senior copywriter + visual director + UX-psycholoog

---

## 🎯 Executive summary

Sinds de vorige audit (6.0/10 premium) zijn **7 fixes live** en is de 3-stappen-sectie compleet opnieuw ontworpen (SaaS-cards → editorial typografie). Je staat nu op **7.2/10 premium**. De website is echt verbeterd: minder defensief, warmer, visueel rustiger. Drie structurele problemen blijven echter overeind: **(1) `/galerie` toont geen galerie**, **(2) `/planner` is nog steeds een wireframe-blocker**, en **(3) reviews missen gezichten**. Plus een aantal micro-zwakten die opvallen nu de grote dingen fixed zijn.

---

## ✅ Wat er sinds v1 daadwerkelijk beter is

| Gebied | Voorheen | Nu |
|---|---|---|
| 3-stappen-sectie | SaaS-cards met borders + iconen | Editorial 01/02/03 typografie, geen borders |
| "Wij leiden u rustig rond" | Box met border, sand-bg, rounded | Gecentreerde typografie, gouden hairlines |
| Reviews-attributie | "Familie Van Kesteren" | "Jan en Annelies V. — Ermelo" |
| `/cheque` openings | H1 direct boven formulier | H1 + 3 regels uitleg van het product |
| Home hero CTA | 1 pad (alleen cheque) | 2 paden: cheque-flow + "nog geen cheque" |
| `/contact` parking | *"meestal gratis, vaak direct voor deur"* | *"Parkeren is gratis voor de deur"* (assertief) |
| `/contact` openingstijden | Ontbraken | *"di–za, 10:00–17:00. Zondag/maandag op aanvraag"* |
| Defensieve "hoeft" | 4× op home, 3× op uw-bezoek | 0× totaal |
| Vrouw-met-schilderij animatie | Niet aanwezig | Op `/cheque` (maar nog in box — zie issue hieronder) |

**Netto effect**: de site voelt **minder als een template** en **meer als een uitnodiging**. Het verschil tussen v1.0 en v1.3 is merkbaar voor iedere eerste bezoeker.

---

## 🏠 Home — diagnose opnieuw (7.5/10)

### Wat werkt

- **3-stappen met grote 01/02/03** is nu je sterkste visuele moment. Dit voelt editorial.
- **Reviews** zijn concreet, specifiek, emotioneel raak (vooral "Mijn man komt normaal nooit in een galerie...").
- **Drone-video hero** geeft ambitie.
- **Sinds 2005 sectie** met IMG_1600 portrait-beeld is rustig en dichtbij.

### Wat nog ruimte heeft

1. **Hero-body herhaalt nog steeds defensief patroon**:
   > *"Sinds 2005 ontvangen wij bezoekers persoonlijk, zonder druk en zonder verplichting om iets te kopen."*

   Twee keer "zonder" in één zin. Vervang door iets positiefs:
   > *"Sinds 2005 ontvangen wij bezoekers persoonlijk. U beslist of u iets meeneemt — wij verkopen niet, u koopt."*

2. **Reviews met initialen-badges** (JE, RE, HE) voelen nu nog meer als een restant dan voorheen. Andere elementen zijn geëvolueerd, deze niet. → **Initialen vervangen door klein rond portret-placeholder** (gestileerde illustratie of echte foto's) of **helemaal geen badge**, alleen typografie.

3. **Geen enkele kunstenaar of werk** op home. De volgende marketing-vraag is: wat kópen mensen bij jullie? Dit wordt nergens geadresseerd. Home is 100% merk, 0% product.

4. **"In twee stappen" in de grote CTA-sectie** klopt niet met de "In drie stappen" sectie eerder op dezelfde pagina. → Maak consistent: "In drie stappen naar uw bezoek" overal.

5. **Location-sectie** heeft 2 exit-links (Contact + Google Maps) zonder ingesloten kaart. Op home is dit wrijving. → Hetzij: mini-kaart inline, hetzij: 1 primaire CTA ("Bekijk route").

### Premium-lek: system fonts
H1 is nog steeds system-font (Helvetica Neue). Op galerie-niveau zou een subtiele serif (Canela, Editorial New, Cormorant) 25% premium-gevoel toevoegen. Eén `next/font`-import, geen runtime-kost.

---

## 🖼 `/galerie` — grootste zwakte blijft (5/10)

**Harde diagnose uit de scan**: *"velvet rope without revealed treasures — sophisticated absence masquerading as refined curation."*

Dat is een vernietigende maar kloppende observatie. Wat er na de v1.3 iteratie nog steeds ontbreekt:

| Wat zou er moeten staan | Wat er staat |
|---|---|
| Naam van 2–3 kunstenaars | Niets |
| 1 representatief werk per kunstenaar | Niets |
| Titel, techniek, formaat per werk | Niets |
| Curatorial statement ("wij werken met...") | Algemene "figuratief en abstract" regel |
| Team-bio (2–3 alinea's per persoon) | Functie-regels van 1 zin |

De drone-video `V-slot-B` op deze pagina toont de buurt. Voor een galerie-pagina is dat bizar — de video zou de *werken* of de *binnenruimte* moeten tonen.

**Consequentie voor conversie**: een serieuze kunstkoper die hier terechtkomt sluit de tab. Een cheque-houder die hier terechtkomt twijfelt: *"is dit wel een échte galerie?"*

---

## 👋 `/uw-bezoek` — best presterende pagina (8.5/10)

Scan bevestigt:
- Concrete scene-beschrijving werkt
- "U bent te gast" is emotioneel raak
- FAQ adresseert échte angsten
- Step-beelden (KVK-serie) voelen geleefd, niet gestaged

**Eén puntje**: de pagina eindigt met *"Klaar om uw middag te plannen?"* → maar daar is `/planner` leeg. **Voor de conversie-flow is dit een fatale hand-off naar een wireframe.** (Zie issue hieronder.)

---

## 💳 `/cheque` — animatie staat nog in een box (7/10)

Scan zegt: *"bounded, responsive box rather than full-bleed background placement... max-w-[280px] lg:max-w-[360px]"*.

**De wijziging die ik vroeg is niet volledig gelanden.** De wrapper heeft de `bg-sand` en `border` waarschijnlijk verwijderd, maar de `max-w-[280px]` container met bounded sizing is er nog. De vrouw **staat dus nog in een vak, kleiner nu**.

→ Aparte fix nodig (zie top-10 hieronder).

Overigens: **uitleg-tekst boven formulier** is live én werkt goed. Het formulier zelf, validatie, testimonial en FAQ zijn solide.

---

## 📞 `/contact` — bijna klaar (8/10)

Alle v1.3 fixes zijn live. Nog twee micro-observaties:
1. **Twee CTA's in hero** (cheque + maak afspraak zonder cheque) is nu goed. Maar de hover-state van de secondary button voelt nog basic.
2. **Email-adres** `welkom@dekunstvankunst.nl` — zorg dat die ook daadwerkelijk werkt voor bezoekers. (Check met de eigenaar.)

---

## 🧭 `/planner` — BLOCKER (N/A, nog wireframe)

Dit is nu de grootste conversie-blocker op je hele site.

**Scenario**: iemand met een cheque komt op de site, activeert succesvol, en eindigt op `/planner` dat nog een wireframe is. Dit is de eerste contact waar hun vertrouwen **meetbaar** moet zijn (voorwaarde voor daadwerkelijk bezoek). Ze krijgen placeholder.

Elke dag dat dit niet opgelost is verlies je conversies op je warmste lead-type.

---

## 📊 Top 10 fixes v1.3 → v1.7 — geprioriteerd

Geprioriteerd op impact / moeite-ratio. Nu scherper omdat de basis staat.

### 🟢 Quick wins (< 30 min elk)

| # | Fix | Impact | Route |
|---|---|---|---|
| 1 | Hero-body herschrijven: van *"zonder druk, zonder verplichting"* naar positieve formulering (*"U beslist of u iets meeneemt"*) | Hoog | `/` |
| 2 | `/cheque` animatie echt uit de box halen — verwijder `max-w-[280px]` container, geef de animatie een natuurlijke plek **naast** de H1-tekst op desktop, **boven** de H1 op mobile | Midden | `/cheque` |
| 3 | "In twee stappen" in de grote CTA-sectie aanpassen naar "In drie stappen" (consistentie) | Laag | `/` |
| 4 | Reviews-badges: initialen vervangen door ofwel small caps voornamen (JA / RM / HI) zonder cirkel-border, of weghalen | Midden | `/` en `/cheque` |

### 🟠 Middel-werk (1–3 uur)

| # | Fix | Impact | Route |
|---|---|---|---|
| 5 | `/planner` bouwen als "Laat uw nummer achter — wij bellen binnen 24u" landingsform (geen booking-flow, alleen contact-capture met naam + telefoon + voorkeur dag/dagdeel). Keert conversie-blocker om in warme lead. | **Kritiek** | `/planner` |
| 6 | `/galerie` sectie "Wat u bij ons ziet" — 3 kunstenaars met portret + 1 alinea + 1 werk-afbeelding. Zelfs als je niet alle info hebt, 1-2 tonen is oneindig veel beter dan 0. | **Zeer hoog** | `/galerie` |
| 7 | Team-sectie op `/galerie` herschrijven: 1 uitgebreide intro over Marianne (2 alinea's) + eventueel Erik en Sanne in kleinere kaart. Niet 3 gelijke interchangeable kaartjes. | Hoog | `/galerie` |
| 8 | Serif-webfont via `next/font/google` voor alle H1 en H2 (suggestie: Cormorant Garamond of Fraunces, beide open-source). | Hoog | Global |

### 🔴 Groter werk

| # | Fix | Impact | Wat |
|---|---|---|---|
| 9 | Newsletter-lead-magnet: *"Ontvang onze maandelijkse kunstbrief — één kunstenaar in de schijnwerper"* met Mailchimp/Loops-integratie. Home + footer + galerie + 404. | Zeer hoog | Nieuw component |
| 10 | Echte fotografie-sessie (team-portretten + 5 detail-close-ups). Brief staat in `docs/beeldstrategie.md`. | Hoog | Buiten code |

---

## 🎯 De drie volgende stappen die je vandaag zou kunnen doen

1. **Fix 5 — `/planner` bouwen (1 uur werk voor Cursor)**
   Dit is de grootste return on effort. Stuur Cursor:

   ```
   Bouw /planner als eenvoudig contactform. Verwijder alle wireframe-code.
   Structuur:
   - Hero met H1 "Plan uw middag" + subtitel "Wij bellen u binnen 24 uur op
     een moment dat u uitkomt"
   - Form met velden:
     * Uw naam (required, text)
     * Telefoonnummer (required, tel, validated met basis regex)
     * Voorkeur dagdeel (radio: ochtend / middag)
     * Voorkeur dag (select: doordeweeks / weekend / maakt niet uit)
     * Eventuele opmerking (textarea, optional)
   - Submit-button in gold, tekst: "Verstuur"
   - Onder form: "Liever zelf bellen? [telefoonnummer uit siteConfig]"
   - Na submit: success-state met "Dank, wij nemen binnen 24u contact op"

   Server action: stuur naar een mailto: link of simpele fetch naar /api/planner
   (api-route aanmaken die een simpele email send, of console.log voor nu
   met TODO-comment voor echte integratie).

   Design: matcht /contact en /cheque — bordeaux/gold/creme.
   noindex blijft (is transactional).

   Commit: feat(planner): replace wireframe with lead-capture form
   ```

2. **Fix 6 — `/galerie` kunstenaars-sectie (2 uur)**
   Zelfs 2 kunstenaars met beperkte info is transformatief. Dit vraagt *content* van jou (of opzettelijke placeholders die later ingevuld worden). Als je nu geen kunstenaar-info hebt: **spawn TODO-blocks met `opacity-50`** zodat het skelet staat en jij later invult.

3. **Fix 1, 2, 3, 4 combineren — home polish (1 uur)**
   Vier kleine verfijningen in één commit:
   - Hero-body herschrijven
   - /cheque animatie echt uit box
   - "In twee stappen" → "In drie stappen"
   - Reviews initialen-redesign

---

## 🔍 Observaties die niet in de top-10 zitten maar de moeite waard zijn

### Copy-patronen
Drie woorden komen op home-galerie-cheque samen **minstens 8×** voor: *rust, tempo, tijd*. Wordt merkherkenning, maar ook voorspelbaar. → Varieer met *stilte, vrijheid, overzicht, aandacht, ruimte*.

### Premium-signaal ontbrekend: autoriteit
Nergens op site staat:
- Hoeveel werken in de collectie?
- Hoeveel kunstenaars representeer je?
- Hoeveel exposities per jaar?
- Hoeveel bezoekers sinds 2005?

Concrete cijfers = premium signaal. Verzin er eventueel een die klopt: *"Sinds 2005 toonden wij werk van 47 kunstenaars aan ruim 12.000 bezoekers."*

### Micro-interactie die ontbreekt
Nergens subtiele scroll-in animaties (fade-up bij in-view). `framer-motion` staat toe, maar is niet gebruikt. Op pagina's waar typografie dominant is, lift een eenmalige `opacity + y: 20→0` de ervaring direct.

### Meta-layer
- **OG-image** ontbreekt — bij delen in WhatsApp/LinkedIn krijg je geen preview. Poster van drone V-slot-A is perfect als og-image.
- **`metadataBase`** wijst nog naar `dekunstvankunst.nl`. Canonicals zijn stuk.
- **Favicon** — niet gecheckt, maar als default-next.js blijft, signaleert niet-af.

---

## 🎖 Eindoordeel

| Aspect | v1.0 | v1.3 | v1.7 doel |
|---|---|---|---|
| Premium-gevoel | 6.0 | 7.2 | 8.5 |
| Copy-helderheid | 6.5 | 7.8 | 8.5 |
| Conversie-pad (cheque) | 7.0 | 7.5 | 9.0 (na planner-fix) |
| Conversie-pad (cold) | 3.0 | 5.5 | 7.5 (na galerie-fix) |
| Visuele consistentie | 6.5 | 7.5 | 8.5 |
| Trust-signalen | 5.0 | 6.5 | 8.0 |
| Merkdifferentiatie | 5.0 | 6.0 | 7.5 |

**Je beweegt in het juiste tempo.** De v1.3-iteratie heeft geen gat veroorzaakt — alles wat beter was, is structureel beter. Geen regressies. Dat is zeldzaam.

**De kritische blokkers voor v2.0 zijn**: `/planner` uit wireframe, `/galerie` met kunst erin, newsletter. Dat is 2 werkdagen werk voor Cursor (of deels buiten code: fotografie, content).

**Wat je niet moet doen**: andere pagina's verder polijsten voordat deze drie dingen staan. De winst zit daar.
