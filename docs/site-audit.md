# Site-audit — dkvk-kvk-v10.vercel.app

Datum: 17 april 2026
Scope: live site + lokale code op `/Users/basaandestegge/SITE2.0`

## Diagnose in één regel

De site is **geen site maar een wireframe-skeleton**. De afhaal-flow (`/cheque`, `/afspraak/omruilen`, `/contact`) is functioneel klaar. De **overtuigingslaag** (home, galerie, uw-bezoek, planner) is 100% placeholder — daar valt nu álle conversie en vertrouwen weg.

---

## Wat wél klopt (niet slopen)

- **Routing & IA**: 4 nav-items kloppen (Cheque, Uw bezoek, Galerie, Contact). Legal-trio apart gehouden. `/afspraak/omruilen` bestaat.
- **Werkende flows**: `ChequeForm` en `OmruilForm` valideren client-side, kennen partners (ALU123 → Aluwdoors etc.), personaliseren H1 op code.
- **Contact-pagina**: echte NAW, lazy map, werkende `tel:`/`mailto:`. Dit is de enige pagina die nu al vertrouwen wekt.
- **Content-bron**: alles in [content/site.ts](content/site.ts) — snel te bewerken zonder rebuild-regressie.
- **Design tokens**: bordeaux/gold/creme/sand/ink zijn gedefinieerd in [tailwind.config.js](tailwind.config.js). Maar: wireframe-componenten gebruiken ze niet (alleen `neutral-*`).
- **SEO**: metadata per pagina, JSON-LD, sitemap, robots. Transactionele pagina's correct `noindex`.
- **A11y-basis**: skip-link, focus-visible, aria-labels, semantische tags.

---

## Top 10 visuele problemen (met route + sectie)

| # | Locatie | Probleem | Waarom het pijn doet |
|---|---|---|---|
| 1 | `/` — hero | H1 is letterlijk "Hero text". Sub is "Supporting text placeholder". Grijs beeld-placeholder rechts. | Eerste 2 seconden = beslissing. Nu lijkt het een fout-deployment. |
| 2 | `/` — **alle 7 secties** | `neutral-*` greys i.p.v. design-tokens. Geen bordeaux, geen gold, geen cream. | De site heeft een huisstijl op papier die nergens op het scherm verschijnt. |
| 3 | `/galerie` | 6 media-placeholders, 3 tekst-blokken "Team section" / "Seit 2005" placeholder. Duitse placeholder in Nederlands stuk. | De galerie-pagina verkoopt de galerie. Nu verkoopt hij niets. |
| 4 | `/uw-bezoek` | Hele "Zo verloopt uw middag" (3 step-cards + hoofdbeeld) is placeholder. | Dit is de vertrouwenspagina. Nu onzichtbaar. |
| 5 | `/planner` | Banner, day-selection, time-picker, trust-strip — allemaal placeholder. | Pagina staat in nav niet, maar is wel bereikbaar en leeg. |
| 6 | `layout.tsx` | Font = system Helvetica. Geen custom webfont. | Voor een galerie-op-afspraak-niveau is stocksans té generic. Een subtiele serif voor H1/H2 (bv. Editorial New, Canela, Cormorant) tilt het merk meteen. |
| 7 | Sectie-alternering | `main > section:nth-of-type(even)` krijgt `#f7f4ee`. Wireframes gebruiken `tone="neutral"` met eigen achtergrond. | Twee stapelende achtergrondsystemen → soms wit-wit, soms dubbel sand. Ritme weg. |
| 8 | Hero-CTA-button | Grijs met grijze border op lichte achtergrond — contrast 3.5:1 (borderline WCAG AA Large, fail AA normal). | CTA is waar 80% van je conversie vandaan komt. Nu visueel ondergeschikt aan de rest. |
| 9 | Geen beeld bovenaan elke pagina | Hero ontbreekt op `/cheque` en `/afspraak/omruilen`. Die zijn nu een koude H1 op wit. | Transactionele pagina's voelen als formulier-hokjes, niet als galerie-ervaring. |
| 10 | Geen beweging | 0 animaties. Geen subtiele entry, geen parallax, geen video-loops. | "Premium galerie" verwacht rust maar niet statisch. Eén goed ingezette subtiele beweging doet 80% van het werk. |

---

## Top 10 gemiste kansen

| # | Route | Kans | Verwacht effect |
|---|---|---|---|
| 1 | `/` — hero | Vervang placeholder door **drone-videoloop** (zojuist getranscodeerd: `Public/Video/web/DJI_*-1080p.mp4`) met poster-frame fallback. | Eerste seconde verkoopt "premium galerie" zonder één woord. |
| 2 | `/` | Drie echte stappen tonen: *Activeer cheque → Plan uw middag → Ontvangen worden met koffie*. Korte, niet-generieke copy. | Removes friction: mensen begrijpen de flow in 10 seconden. |
| 3 | `/` + `/galerie` | Echte `reviews` uit [content/site.ts](content/site.ts) tonen (Van Kesteren, Ponteyn, Veldhuis — bestaan al). | Social proof nu volledig onbenut. |
| 4 | `/galerie` — hero | Interieur-shot van galerie (uit heroverwogen beeldbank — zie stap 3). Grote, full-bleed. | Zet direct de toon "je stapt ergens binnen". |
| 5 | `/galerie` — team | 3 echte portretten + 1 alinea per kunstenaar (nu volledig leeg). | Maakt de galerie menselijk. |
| 6 | `/uw-bezoek` | Tijdlijn met 3 echte momenten: *u komt binnen / koffie en rondleiding / geen verplichting om te kopen*. Met echte foto per moment. | Verlaagt drempel voor eerste bezoek — de grootste conversie-blokker. |
| 7 | `/cheque` | Na succesvolle cheque-validatie → tonen wat de ontvanger kan verwachten (sneak peek van de middag, 1 beeld + 2 regels). | Bouwt anticipatie tussen activeren en afspraak. |
| 8 | `/contact` | Drone-poster-frame als hero in plaats van de standaard `Hero`-component. | Maakt de "waar vindt u ons"-vraag beantwoord vóór het lezen. |
| 9 | Global footer | Kleine "sinds 2005" — met 1 sfeerbeeld-thumbnail naast NAW-kolommen. | Verankert het merk op elke pagina. |
| 10 | 404-pagina | Nu: "Deze pagina bestaat niet." → kans om die te vullen met een sfeerbeeld + "Kom gewoon langs, uitsluitend op afspraak". | 404's zijn momenten waar je alsnog warmte kunt uitstralen. |

---

## Vertrouwen & conversie — waar het weglekt

1. **Hero-placeholder**: bezoekers die via Google op de homepage komen zien letterlijk "Hero text" als H1. Verlies: ~70% van de eerste indruk.
2. **Geen tarieven, geen "wat kost dit"-context** op home of galerie. Mensen die via een cheque binnenkomen weten wat gratis is; eerste-indruk-bezoekers niet.
3. **`/planner` is leeg**: wie op "Plan uw bezoek" klikt belandt op een placeholder-pagina. Zelfs als `noindex`, is de interne link naar een lege pagina conversie-lek.
4. **Geen telefoonnummer in de hero of sticky CTA**: voor het doelpubliek (ouderen/niet-digitale kopers op afspraak) is bellen vaak de voorkeur. Nu ligt telefoon onderaan de footer.
5. **`/cheque` mist uitleg vóór het formulier**: de H1 en 1 regel daaronder springen meteen in validatie. Een kort "wat is een cheque", "geldigheid", "wat gebeurt er na activeren" — nu afwezig.
6. **Geen OG-image / social card**: bij delen in WhatsApp/LinkedIn verschijnt geen preview-beeld. Voor een merk dat veel via doorverwijzing werkt (cheque-mechaniek) is dit kritiek.
7. **Reviews zijn er wél (in code), maar nergens zichtbaar**: `reviews`-array in content/site.ts wordt niet door `ReviewsList` component gerendered op enige route.
8. **Geen "hoe werkt het"-video**: drone-videos nu getranscodeerd — één 10s-loop met overlay "uitsluitend op afspraak, sinds 2005" doet meer dan 5 placeholder-secties.
9. **Cookies-tekst noemt "v1"**: interne terminologie lekt naar public legal page. Verwijderen.
10. **`metadataBase: https://dekunstvankunst.nl`** (in layout.tsx) terwijl de deployed URL `dkvk-kvk-v10.vercel.app` is. Canonicals wijzen naar domein dat nog niet live is → SEO-issue bij publiceren.

---

## Prioriteitsvolgorde voor stap 3 (beeldstrategie)

Niet alle pagina's tegelijk vullen. Volgorde voor maximale conversie-impact:

1. **`/` (home)** — grootste zichtbaarheid, nu 100% placeholder
2. **`/uw-bezoek`** — grootste conversie-blokker voor eerste bezoekers
3. **`/galerie`** — verkoopt het merk
4. **`/cheque`** — kleine polish rond werkend formulier
5. **`/contact`** — bijna klaar, alleen hero upgraden met drone
6. **`/planner`** — pas aanpakken als booking-flow inhoudelijk gepland is
7. **Footer / 404 / OG-image** — details die overal tegelijk landen

---

## Technische blockers voor productie (niet stap 3, wel noemen)

- `Public/` hoofdletter P → breekt op Vercel bij case-sensitive paths in code
- `metadataBase` wijst naar productiedomein dat nog niet gelinkt is
- Geen webfont geladen (performance-OK, merk-niet-OK)
- Alternerende section-backgrounds via `nth-of-type(even)` + wireframe-tones botsen → rationaliseren zodra echte secties komen

---

**Volgende stap:** `ok stap 3` voor beeldstrategie + mapping per route, waarbij ik de ✅/⚠️-lijst + de 10 drone-videos koppel aan de secties hierboven.
