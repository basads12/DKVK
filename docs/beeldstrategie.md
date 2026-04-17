# Beeldstrategie — dkvk-kvk-v10

Versie: 17 april 2026
Input: `docs/beeldaudit.md` (89 bestanden — ✅36 ⚠️32 ❌21) + 10 drone-videos (`Public/Video/web/*`) + `docs/site-audit.md`.

## Werkafspraken

- Paden beginnen met `/` (Next.js public-root), dus `Public/Kunstwerken/foo.jpg` → `/Kunstwerken/foo.jpg` in code.
- Elk beeld heeft **één canoniek pad**. Dubbele paden (Overige fotos/ vs Kunstwerken/Overige fotos/) → `/Overige fotos/...`.
- Aspect-notatie: `16:9`, `4:5`, `1:1` of vrij (bv. `2.0:1`).
- Voor hero-videos: `-poster.jpg` altijd meeladen voor LCP en fallback.
- **Twijfelgevallen** (Website-impressie-* en KVK-*) zijn in deze strategie pragmatisch geplaatst als sfeer/interieur op basis van aspect + naam. Wijkt dat af van wat jij ziet → één regel terug en ik shuffle.

## Stijl-kapstok (afgeleid van ✅-lijst)

- **Polariteit figuratief ↔ abstract** (50/50 in ✅-set) → beide laten zien, niet kiezen.
- **Aardtonen**: bordeaux, gold, cream, sand, ink. Geen uitschieters naar cool blue/grijs.
- **Geen stock-kiekjes**: alles komt van eigen galerie of drone, klaar.

---

## Korte legenda op video-pool

Alle 10 drone-videos zijn 4K masters, 11–16s, 30fps. Web-versies in `/Video/web/`:

| Ref | Pad (1080p) | Duur | Grootte | Poster |
|---|---|---:|---:|---|
| V1 | `/Video/web/DJI_20260319182158_0030_D_MASTER-1080p.mp4` | 14.9s | 13.0 MB | `..._0030_..._poster.jpg` |
| V2 | `/Video/web/DJI_20260319182247_0033_D_MASTER-1080p.mp4` | 15.0s | 10.9 MB | `..._0033_..._poster.jpg` |
| V3 | `/Video/web/DJI_20260319182344_0037_D_MASTER-1080p.mp4` | 15.8s | 13.7 MB | `..._0037_..._poster.jpg` |
| V4 | `/Video/web/DJI_20260319182426_0038_D_MASTER-1080p.mp4` | 11.8s | 8.4 MB | `..._0038_..._poster.jpg` |
| V5 | `/Video/web/DJI_20260319182439_0039_D_MASTER-1080p.mp4` | 12.3s | 10.8 MB | `..._0039_..._poster.jpg` |
| V6 | `/Video/web/DJI_20260319182510_0041_D_MASTER-1080p.mp4` | 14.8s | 7.5 MB | `..._0041_..._poster.jpg` |
| V7 | `/Video/web/DJI_20260319182555_0042_D_MASTER-1080p.mp4` | 11.9s | 11.4 MB | `..._0042_..._poster.jpg` |
| V8 | `/Video/web/DJI_20260319182608_0043_D_MASTER-1080p.mp4` | 12.5s | 13.2 MB | `..._0043_..._poster.jpg` |
| V9 | `/Video/web/DJI_20260319182625_0044_D_MASTER-1080p.mp4` | 12.2s | 8.7 MB | `..._0044_..._poster.jpg` |
| V10| `/Video/web/DJI_20260319182639_0045_D_MASTER-1080p.mp4` | 15.5s | 10.7 MB | `..._0045_..._poster.jpg` |

**Keuze later door jou**: je kijkt naar de 10 posters en wijst V-nummers toe aan de 3 video-slots hieronder (home-hero, contact-hero, over-pagina-loop). Ik reserveer nu slots, geen specifieke V-nummers.

---

## Per pagina

### `/` — Home

Prioriteit #1. 7 secties, alle 7 nu placeholder.

| # | Sectie | Beeldtype | Aspect | Doel | Bron |
|---|---|---|---|---|---|
| 1 | Hero | **VIDEO-LOOP** (autoplay muted loop playsinline) + poster-fallback | 16:9 full-bleed, op mobile 4:5 crop via `object-position` | "Premium galerie" verkopen zonder woorden | **V-slot-A** (drone-video naar keuze, exterieur/bovenaanzicht pand) |
| 2 | Intro-box "U hoeft niets voor te bereiden" | géén beeld | — | Rust na hero | — |
| 3 | "In drie stappen" (grid 3) | 3 × icoon/pictogram (niet foto) | 1:1 | Info, niet verleiden | SVG-iconen nog te maken (aanvulling) |
| 4 | About-sectie "Sinds 2005" | 1 GRID-beeld rechts | 4:5 portrait | Vertrouwen | `/Kunstwerken/IMG_1600-scaled-e1631607975134.jpeg` (2049×2560, portrait figuratief) |
| 5 | Reviews (3-kolom) | 3 × avatar-circle of decoratief kader | 1:1 klein | Social proof | Géén beeld; gebruik 3 reviews uit `content/site.ts` + bordeaux kader |
| 6 | Location / visit | 1 GRID-beeld + kaart-thumbnail | 4:5 of 3:2 | Drempel verlagen | `/Kunstwerken/Gezelligheid-dame-donker-scaled-1.webp` (2036×2560, dame/interieur) OF Website-impressie-reeks |
| 7 | CTA-sectie | decoratieve stripbanner boven of achter | 4:1 panorama | Finale push | `/Kunstwerken/Website-impressie-52.webp` (2513×1220, panorama) |
| 8 | FAQ | géén beeld | — | Lees-flow | — |

**Totaal home:** 1 video + 2 stills + 1 panorama-banner + 0 in reviews/faq.

---

### `/galerie`

Prioriteit #3. Verkoopt het merk.

| # | Sectie | Beeldtype | Aspect | Doel | Bron |
|---|---|---|---|---|---|
| 1 | Hero (volle breedte) | HERO-still (groot, rustig) | 21:9 of 16:9 | "Kom binnen" | `/Kunstwerken/Website-impressie-14-scaled-1.webp` (2560×1271, 2.01) OF `/Kunstwerken/Website-impressie-29-scaled-1.webp` — beide panorama-interieur |
| 2 | "Sinds 2005" | 1 GRID-beeld + 3 alinea's | 4:5 | Verhaal | `/Kunstwerken/Website-impressie-20-scaled-1-e1732727424230.webp` (2483×1907, 1.30) — brede composite |
| 3 | Team (3 cards) | 3 × portret | 4:5 | Menselijk maken | **ONTBREKEND** — zie aanvullingen |
| 4 | Sfeerbeeld-grid (2×2 of 2×3) | 4–6 × GRID | wisselend: 1:1, 4:5, 3:2 | Toon het pand | Mix: `/Kunstwerken/Website-impressie-28-scaled-1.webp`, `.../-38-scaled-1.webp`, `.../-41.webp`, `.../-45.webp`, `.../-47-scaled-1.webp`, `.../-52.webp` |
| 5 | Video-sectie (secondaire hero) | **VIDEO-LOOP** (een andere dan home) | 16:9 | Galerie-in-actie | **V-slot-B** (drone, panorama omgeving) |
| 6 | CTA-sectie | géén beeld | — | — | — |
| 7 | FAQ | géén beeld | — | — | — |

**Totaal galerie:** 1 video + 7–9 stills. **Gat:** team-portretten ontbreken.

---

### `/uw-bezoek`

Prioriteit #2. Grootste conversie-blokker voor eerste bezoekers.

| # | Sectie | Beeldtype | Aspect | Doel | Bron |
|---|---|---|---|---|---|
| 1 | Hero (full-bleed) | HERO-still | 16:9 | "Dit is wat u krijgt" | `/Overige fotos/IMG_0371-scaled.jpeg` (2560×2557, vierkant — crop naar 16:9) OF drone-poster |
| 2 | Intro | géén beeld | — | — | — |
| 3 | "Zo verloopt uw middag" (3 step-cards) | 3 × step-beeld | 4:3 per card | 3 momenten van de middag | Stap 1: `/Kunstwerken/KVK-5.webp` (1280×1023, waarschijnlijk interieur-koffie), Stap 2: `/Kunstwerken/KVK-8.webp` (1280×904, waarschijnlijk werk bekijken), Stap 3: `/Kunstwerken/KVK-1.webp` (1009×1280, waarschijnlijk gesprek/ontvangst) |
| 4 | "Geen druk" | 1 ondersteunend beeld | 4:5 | Rust uitstralen | `/Kunstwerken/Gezelligheid-dame-donker-scaled-1.webp` (als niet op home gebruikt) of `/Kunstwerken/IMG_1600-scaled-e1631607975134.jpeg` |
| 5 | Praktische details (3 cards) | géén beeld, wel iconen | — | Info compact | SVG-iconen (aanvulling) |
| 6 | CTA-sectie | géén beeld | — | — | — |

**Totaal uw-bezoek:** 4 stills + 3 iconen. **Afhankelijk van visuele check KVK-reeks — zie "Te verifiëren" onderaan.**

---

### `/cheque`

Prioriteit #4. Formulier werkt al. Alleen polish.

| # | Sectie | Beeldtype | Aspect | Doel | Bron |
|---|---|---|---|---|---|
| 1 | H1 + intro | 1 klein decoratief beeld (right-aligned desktop, boven mobile) | 1:1 | Warmte voor koud formulier | `/Kunstwerken/Flowers-scaled-1.webp` (2560×1266, 2.02 — crop naar vierkant) of een stilleven-schilderij `/Kunstwerken/IMG_1600-scaled-e1631607975134.jpeg` |
| 2 | ChequeForm | géén beeld | — | Focus op input | — |
| 3 | Blockquote (Van Kesteren) | géén beeld | — | Social proof | — |
| 4 | Na succes: sneak peek | 1 beeld + 2 regels "wat u kunt verwachten" | 4:5 | Anticipatie | `/Kunstwerken/Website-impressie-32-scaled-1.webp` (2032×2560, portrait — een sfeershot) |
| 5 | FAQ (conditional) | géén beeld | — | — | — |

---

### `/contact`

Prioriteit #5. Bijna klaar. Alleen hero upgraden.

| # | Sectie | Beeldtype | Aspect | Doel | Bron |
|---|---|---|---|---|---|
| 1 | Hero (`Hero` component) | **VIDEO-LOOP poster + achtergrond** | 16:9 | "Waar u ons vindt, vanuit de lucht" | **V-slot-C** (drone-video, bij voorkeur straat-level/aanvliegend pand) |
| 2 | Address-sectie | géén beeld | — | — | — |
| 3 | Route-sectie | LazyMap (bestaat al) | 4:3 | Navigatie | — |
| 4 | DarkAnchor + CtaBlock | 1 decoratief silhouet | — | Pauze | `/Overige fotos/pand-buitenkant.jpg` (800×475, klein — past in dit kleine frame) |
| 5 | FAQ | géén beeld | — | — | — |

---

### `/planner`

Prioriteit #6. Pas invullen ná booking-flow-beslissing.

| # | Sectie | Beeldtype | Aspect | Doel | Bron |
|---|---|---|---|---|---|
| 1 | Top-banner | 1 sfeer-strip | 4:1 | Merk-lint | `/Kunstwerken/Website-impressie-46-scaled-1.webp` (2560×616, 4.16) |
| 2 | Step-intro, day/time selection, action area | géén beeld | — | Focus | — |
| 3 | Trust strip | 3 × klein icoon | — | — | SVG-iconen |

---

### `/afspraak/omruilen`

Geen beeld nodig. H1 + formulier. Laten zoals is.

---

### Legal (`/algemene-voorwaarden`, `/privacy`, `/cookies`)

Geen beeld. Laten zoals is. **Wél**: woord "v1" uit cookies-tekst halen (site-audit punt).

---

### `/not-found`

| Sectie | Beeldtype | Aspect | Doel | Bron |
|---|---|---|---|---|
| Body | 1 zacht sfeerbeeld | 3:2 | Warmte bij fout | `/Kunstwerken/Website-impressie-45.webp` (1594×1969, 0.81 — portrait sfeer) |

---

## Niet gebruiken (expliciete uitsluiting)

Uit de ✅/⚠️-lijst gaan **niet** op de site:

- `/Logo/Logo de Kunst van Kunst groot*.jpg` (3 varianten) — alleen `logo-navbar-transparent-clean.png` gebruiken in nav. De rest is redundant merk-asset.
- `/Logo/logo-navbar-transparent.png` — vervangen door `-clean` variant.
- `/Kunstwerken/KVK-8.jpeg` — duplicaat van `.webp` (zelfde beeld). Alleen `.webp` gebruiken.
- `/Kunstwerken/10-scaled.jpeg` (2560×1164, panorama) — te smal voor hero, te neutraal voor sfeer, skip.
- `/Kunstwerken/IMG_2159-scaled-1.jpg` (2560×1108, panorama) — idem.
- `/Kunstwerken/IMG_1349-scaled-1.webp` (2560×933, ultrawide) — idem, niet inzetbaar.
- `/Kunstwerken/Design-impression-roze.webp` — naam wijst op render/mockup, niet authentiek.
- `/Kunstwerken/Dier.webp` (1280×623) — te klein, panorama, skip.
- `/Kunstwerken/Schilderijen.jpg` (800×600) — te klein.
- `/Kunstwerken/kunstenaars.jpg`, `/Kunstwerken/Team.jpg` (beide 800×600) — te klein voor team-sectie; échte portretten maken (zie aanvullingen).
- `/Kunstwerken/galerie.jpg`, `/Kunstwerken/Doeken-2.jpg`, `/Kunstwerken/tas.jpg`, `/Kunstwerken/Vernis.jpg` — alle 800×600, te klein voor enige plek.
- `/Kunstwerken/Uit-balans.jpeg`, `/Kunstwerken/Website-impressie-23.jpeg`, `/Kunstwerken/Website-impressie-13-scaled-*`, `/Kunstwerken/Website-impressie-9-scaled-*`, `/Kunstwerken/KVK-6.webp`, `/Kunstwerken/KVK-2.webp` — passen niet in het huidige slot-plan. Bewaren als reserve, niet actief inzetten.
- `/Kunstwerken/IMG_1347-scaled-kopie.jpg` — "kopie" in naam, niet canoniek.
- Alle `❌`-items uit audit (21) — per definitie niet.

---

## Aanvullingen — wat ontbreekt nog

Gaten die niet uit de huidige bank te vullen zijn. Voor elk: **fotografie-briefing** (afgeleid van de dominante stijl in jouw ✅-set).

### A1. Team-portretten (3 stuks)

- **Slot**: `/galerie` team-sectie (3 cards).
- **Aspect**: 4:5 per portret, 2000×2500 px minimaal.
- **Compositie**: halflichaam, niet frontaal, één schouder iets naar voren. Echte omgeving (in de galerie, niet studio).
- **Licht**: natuurlijk, zacht, liefst vanuit een raam (galerie heeft die volgens drone-beelden).
- **Kleding**: eigen kleren, warm van toon (bordeaux/cream/aardtonen — past bij merkpalet).
- **Props**: één werk op de achtergrond onscherp, niet overheersen.
- **Vermijden**: studio-achtergrond, gestileerde bedrijfsfotografie, glimlachen in camera.

### A2. Drie step-beelden voor `/uw-bezoek` (als KVK-reeks niet bruikbaar blijkt)

- **Slot**: "Zo verloopt uw middag" 3 cards.
- **Aspect**: 4:3, 2000×1500 px.
- **Scènes**:
  1. **Ontvangst**: handen met koffiekopje op houten tafel, warm licht. Géén gezichten. Detail.
  2. **Rondleiding**: iemand van achteren gezien, kijkend naar een schilderij. Suggestie zonder identificatie.
  3. **Gesprek**: twee mensen in gesprek bij een werk, half-silhouet.
- **Stijl**: documentair, niet geposeerd. Dezelfde aardtonen als de schilderijen.

### A3. 5–8 detail-close-ups (textuur, penseelstreek)

- **Slot**: overal waar je nu "support beeld" als rustpunt wilt.
- **Aspect**: 1:1 of 4:5, 1600×1600 px.
- **Compositie**: macro, diepte-van-veld zeer ondiep. Penseelstreek / verfklodder / randje van een doek / signatuur.
- **Waarom**: de huidige ✅-set heeft **nul** échte details. Dit mist nu helemaal.

### A4. Interieur-exterieur schakel (1 beeld)

- **Slot**: `/contact` tussen route en CTA, OF als reserve voor `/`.
- **Aspect**: 16:9, 2560×1440.
- **Compositie**: deur van de galerie van buitenaf, binnenkant zichtbaar (uitnodigend). Gouden uur.

---

## Gebruik van de drone-videos — hoe kiezen

Je hebt 10 video's, je hebt 3 slots (V-slot-A/B/C). Loop even door `Public/Video/web/*-poster.jpg` en beoordeel per video in 5 seconden:

| Video-eigenschap | Past op |
|---|---|
| Aanvliegend op het pand, pand centraal | **V-slot-C** (contact-hero) |
| Rustig panorama over de omgeving, pand klein of afwezig | **V-slot-A** (home-hero) |
| Straat/wijk/context, niet alleen pand | **V-slot-B** (galerie tussen-video) |
| Veel lucht, weinig pand | reserve of 404 |
| Harde beweging / snelle pan | niet gebruiken als loop |

Stuur mij `V1=A V4=C V7=B` en ik update dit document + stel het klaar voor stap 4.

---

## Te verifiëren door jou (één keer, 5 minuten)

Beslissingen die ik pragmatisch heb gemaakt zonder de beelden te zien. Per bestand één woord (ja/nee of herclassificatie):

| Pad | Aanname in deze strategie | Jij zegt |
|---|---|---|
| `/Kunstwerken/Website-impressie-14-scaled-1.webp` | Sfeer/interieur (galerie-hero) | ? |
| `/Kunstwerken/Website-impressie-28-scaled-1.webp` | Sfeer (grid galerie) | ? |
| `/Kunstwerken/Website-impressie-52.webp` | Sfeer-panorama (home CTA-banner) | ? |
| `/Kunstwerken/KVK-1.webp` | Interieur (uw-bezoek step 3) | ? |
| `/Kunstwerken/KVK-5.webp` | Interieur (uw-bezoek step 1) | ? |
| `/Kunstwerken/KVK-8.webp` | Interieur (uw-bezoek step 2) | ? |
| `/Kunstwerken/Gezelligheid-dame-donker-scaled-1.webp` | Sfeer/portret-sfeer | ? |
| `/Kunstwerken/IMG_1600-scaled-...jpeg` | Schilderij portrait | ? |

Antwoord bv.: `KVK-1 = koffie-detail, OK voor step 1`. Of `Website-impressie-14 = echt een schilderij`, dan schuif ik.

---

## Reservepool (niet toegewezen, maar bruikbaar)

Als één van bovenstaande slots blijkt te botsen, hier staan ~10 extra ✅-beelden klaar:

- `/Kunstwerken/Torso-man-voorkant-rood-zwart-scaled-1.webp` — sterke solo-schilderij-hero (portrait)
- `/Kunstwerken/Sky-is-the-limit-paars-scaled-1.webp` — abstract, moody
- `/Kunstwerken/Website-impressie-10-scaled-1.webp`, `.../-38-scaled-1.webp`, `.../-43-scaled-1.webp`, `.../-48-scaled-1.webp` — portrait sfeer
- `/Kunstwerken/Website-impressie-40-scaled-1.webp`, `.../-47-scaled-1.webp`, `.../-4-scaled.jpeg` — landscape sfeer
- `/Overige fotos/IMG_0296-scaled.jpeg`, `.../IMG_0372-scaled.jpeg`, `.../IMG_0374-scaled.jpeg` — vierkante schilderijen, extra hero-kandidaten
- `/Overige fotos/IMG_2056-scaled.jpg`, `.../Aaaaaa.jpg` — landscape schilderijen
- `/Kunstwerken/Loef-scaled.jpg` — als Cursor's "portret"-label klopt, reserve voor team-sectie (tot echte portretten er zijn)
- `/Kunstwerken/Quitar-2.1-scaled-1.jpg`, `/Kunstwerken/Gebouwen-scaled-1.webp`, `/Kunstwerken/Flowers-scaled-1.webp` — decoratieve panorama's voor banners/scheiders

---

## Samenvatting

**Gebruikt actief**: 1 video (home) + 1 video (galerie) + 1 video (contact) + ~15 stills uit de ✅/⚠️-lijst.
**Reserve**: ~15 stills (pool).
**Niet gebruiken**: ~20 bestanden (zie bovenstaande sectie).
**Moet nog gemaakt**: team-portretten (3), optioneel step-beelden (3), detail-close-ups (5–8), interieur-exterieur schakel (1).

**Volgende stap**: `ok stap 4` voor tekstueel wireframe per pagina, mobile-first, met de bestandspaden hierboven al ingevuld. Of eerst feedback op deze strategie (vooral op V-slot-toewijzing en de 8 te verifiëren bestanden) — dan werk ik dit document bij en ga dan pas door.
