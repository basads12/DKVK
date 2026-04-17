# Galerie De Kunst van Kunst — website

Production-ready marketingwebsite in Next.js (App Router), TypeScript en Tailwind CSS, gebouwd mobile-first op basis van de aangeleverde strategische blauwdruk.

## Stack

- Next.js 16 (App Router)
- TypeScript (strict)
- Tailwind CSS 3
- Semantische HTML + toegankelijke focus/ARIA patronen

## Run-instructies

```bash
npm install
npm run dev
```

Productiecheck:

```bash
npm run lint
npm run build
```

## Deployment (Vercel)

### 1) Environment variabelen

- Kopieer `.env.example` naar `.env.local` voor lokale validatie.
- Voeg dezelfde variabelen in Vercel toe per environment:
  - `Production`
  - `Preview`
  - `Development`

### 2) Eerste projectkoppeling

```bash
npm run deploy:preview
```

Bij de eerste run vraagt Vercel om project-linking (`.vercel` map).

### 3) Preview deployment

```bash
npm run lint
npm run build
npm run deploy:preview
```

### 4) Productie deployment

```bash
npm run lint
npm run build
npm run deploy:prod
```

### 5) Post-deploy checks

- Controleer health endpoint: `/api/health`
- Controleer SEO assets:
  - `/robots.txt`
  - `/sitemap.xml`
- Controleer routes:
  - `/`
  - `/cheque`
  - `/planner`
  - `/uw-bezoek`
  - `/galerie`
  - `/contact`

## Wat is gebouwd

- Volledige route-architectuur:
  - `/`
  - `/cheque` + gepersonaliseerde variant via `?code=...`
  - `/planner`
  - `/uw-bezoek`
  - `/galerie`
  - `/galerie/bezoek`
  - `/afspraak/omruilen`
  - `/contact`
  - `/privacy`
  - `/algemene-voorwaarden`
  - `/cookies`
- Centrale contentbron in `content/site.ts` (copy, reviews, contact, FAQ, partnercodes)
- Herbruikbare componenten voor hero, CTA, reviews, dark-anchor, FAQ, formulieren, plannerflow, footer/header
- SEO metadata per pagina, `robots.ts`, `sitemap.ts` en JSON-LD helpers
- Form-validatie met fout- en successtatussen voor cheque- en omruilflow + 4-staps planner
- Responsive navigatie met mobile overlay en consistente bordeaux CTA-stijl

## Aannames (kort)

- Adres-, telefoon-, KvK- en BTW-gegevens zijn voorlopig werkwaarden en moeten worden vervangen door definitieve gegevens.
- Partnercodes in de gepersonaliseerde chequeflow zijn demo-mappingen (`ALU123`, `STL456`, `GRD789`) tot backend-koppeling actief is.
- Verificatie en planner zijn frontend-compleet met mock-validatie; server-side integratiepunten (Cal.com/API/mail) zijn voorbereid in de flow, maar nog niet gekoppeld.
- Juridische teksten zijn leesbaar opgesteld en moeten voor livegang juridisch worden gevalideerd.

## Editpunten voor livegang

- Vervang contactgegevens en bedrijfsnummers in `content/site.ts`.
- Koppel cheque- en omruilverificatie aan echte backend/API.
- Koppel plannerflow aan Cal.com en transactionele e-mailflow.
- Vervang eventuele tijdelijke tekstdetails door definitieve review- en teamcopy.

## Compacte livegang-checklist

- [ ] Definitieve NAW/KvK/BTW/telefoon/e-mail invullen in `content/site.ts`.
- [ ] Definitieve partnernamen, partnerlogo’s en code-resolving koppelen (backend i.p.v. demo-codes).
- [ ] Cheque-validatie vervangen door echte service (inclusief rate-limit en foutcodes).
- [ ] Omruil-validatie koppelen aan bestaande klantdata.
- [ ] Planner koppelen aan Cal.com slots en boekingsbevestiging.
- [ ] Co-branded bevestigingsmail implementeren (`DKvK namens [Partnerbedrijf]`) met DKIM/DMARC-check.
- [ ] Juridische pagina’s laten reviewen door jurist.
- [ ] Productie-omgeving voorzien van HTTPS-only, juiste env vars en gescheiden dev/prod configuratie.
- [ ] Handmatige visuele QA doen op 320px, 768px en 1024px+.
- [ ] Eindcontrole draaien: `npm run lint` en `npm run build`.
