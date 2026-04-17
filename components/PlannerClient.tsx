"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FormField } from "@/components/FormField";
import { TrustSignals } from "@/components/TrustSignals";

type Step = 1 | 2 | 3 | 4 | 5;

const days = [
  {
    id: "maandag",
    label: "Maandag",
    note: "De stilste dag. Ideaal als u in alle rust wilt kijken en vergelijken.",
  },
  {
    id: "donderdag",
    label: "Donderdag",
    note: "Evenwichtige dag. Rustig tempo met wat meer beweging in de galerie.",
  },
  { id: "vrijdag", label: "Vrijdag", note: "Constante dag. Fijn als u een helder, rustig ritme prettig vindt." },
  {
    id: "zaterdag",
    label: "Zaterdag",
    note: "Levendiger sfeer. Meer bezoekers, meer energie, nog steeds op afspraak.",
  },
];

const times = [
  { id: "10:00", label: "Ochtend — vanaf 10:00" },
  { id: "13:30", label: "Middag — vanaf 13:30" },
  { id: "15:30", label: "Eind van de middag — vanaf 15:30" },
];

export function PlannerClient() {
  const [step, setStep] = useState<Step>(1);
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postcode: "",
  });
  const [error, setError] = useState("");

  const dayLabel = useMemo(() => days.find((item) => item.id === day)?.label ?? "-", [day]);

  const canContinue =
    (step === 1 && Boolean(day)) ||
    (step === 2 && Boolean(time)) ||
    (step === 3 &&
      form.firstName &&
      form.lastName &&
      /\S+@\S+\.\S+/.test(form.email) &&
      /^(\+31|0031|0)[1-9][0-9]{8}$/.test(form.phone.replace(/\s+/g, "")) &&
      /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/.test(form.postcode));

  const onNext = () => {
    if (step === 4) {
      setStep(5);
      return;
    }

    if (!canContinue) {
      setError("Controleer uw invoer voordat u verdergaat.");
      return;
    }

    setError("");
    setStep((prev) => (prev + 1) as Step);
  };

  const onBack = () => {
    setError("");
    setStep((prev) => Math.max(1, prev - 1) as Step);
  };

  return (
    <section className="bg-white py-20 pb-32 lg:py-24 lg:pb-24">
      <div className="mx-auto max-w-narrow px-5 lg:px-8">
        {step <= 4 ? (
          <p className="text-sm text-muted" aria-live="polite">
            Stap {step} van 4
          </p>
        ) : null}
        <p className="mt-3 text-lg text-ink">U kiest nu een moment. De rest regelen wij.</p>

        {step === 1 ? (
          <div className="mt-5 space-y-6">
            <h1 className="text-[40px] font-light text-bordeaux lg:text-[56px]">Kies uw moment.</h1>
            <p className="text-lg text-ink">Welke dag past het beste bij de sfeer die u zoekt?</p>
            <p className="text-sm text-muted">U kunt dit later altijd aanpassen.</p>
            <ul className="space-y-3">
              {days.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setDay(item.id)}
                    className={`w-full rounded-xl border p-5 text-left transition-colors ${
                      day === item.id ? "border-bordeaux bg-creme" : "border-border bg-sand"
                    }`}
                  >
                    <p className="text-lg font-medium text-ink">{item.label}</p>
                    <p className="mt-1 text-sm text-muted">{item.note}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="mt-5 space-y-6">
            <h1 className="text-[40px] font-light text-bordeaux lg:text-[56px]">Hoe laat schikt het?</h1>
            <p className="text-lg text-ink">Kies het moment dat het beste in uw ritme past.</p>
            <p className="text-sm text-muted">U kunt dit later altijd aanpassen.</p>
            <ul className="space-y-3">
              {times.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setTime(item.id)}
                    className={`w-full rounded-xl border p-5 text-left transition-colors ${
                      time === item.id ? "border-bordeaux bg-creme" : "border-border bg-sand"
                    }`}
                  >
                    <p className="text-lg text-ink">{item.label}</p>
                  </button>
                </li>
              ))}
            </ul>
            <div className="rounded-xl border border-border bg-sand p-4 text-sm leading-relaxed text-ink">
              <p className="font-medium">Veelgestelde vraag</p>
              <p className="mt-1">
                Kan ik later wijzigen? Ja. In uw bevestigingsmail staat een link om rustig te verzetten of annuleren.
              </p>
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="mt-5 space-y-6">
            <h1 className="text-[40px] font-light text-bordeaux lg:text-[56px]">Uw gegevens.</h1>
            <p className="text-lg text-ink">Alleen de gegevens die nodig zijn voor uw ontvangst.</p>
            <p className="text-sm text-muted">u kunt dit later aanpassen</p>
            <div className="space-y-5">
              <FormField
                id="firstName"
                label="Voornaam"
                required
                autoComplete="given-name"
                value={form.firstName}
                onChange={(event) => setForm((prev) => ({ ...prev, firstName: event.target.value }))}
              />
              <FormField
                id="lastName"
                label="Achternaam"
                required
                autoComplete="family-name"
                value={form.lastName}
                onChange={(event) => setForm((prev) => ({ ...prev, lastName: event.target.value }))}
              />
              <FormField
                id="email"
                type="email"
                label="E-mailadres"
                required
                helper="Voor de bevestigingsmail."
                autoComplete="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              />
              <FormField
                id="phone"
                type="tel"
                label="Telefoonnummer"
                required
                helper="Alleen om u te bereiken als er iets verandert."
                autoComplete="tel"
                value={form.phone}
                onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
              />
              <FormField
                id="plannerPostcode"
                label="Postcode"
                required
                autoComplete="postal-code"
                value={form.postcode}
                onChange={(event) => setForm((prev) => ({ ...prev, postcode: event.target.value }))}
              />
            </div>
            <p className="rounded-sm border border-border bg-sand p-3 text-sm text-ink">
              We gebruiken deze gegevens alleen voor uw afspraak en bevestiging.
            </p>
            <p className="text-sm text-muted">
              Uw gegevens worden niet gedeeld. Zie onze{" "}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-bordeaux">
                privacyverklaring
              </Link>
              .
            </p>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="mt-5 space-y-6">
            <h1 className="text-[40px] font-light text-bordeaux lg:text-[56px]">Klopt het zo?</h1>
            <p className="text-lg text-ink">Controleer rustig alles voordat wij uw moment vastleggen.</p>
            <p className="text-sm text-muted">U kunt dit later altijd aanpassen.</p>
            <dl className="space-y-3 rounded-sm border border-border bg-sand p-5">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Datum</dt>
                <dd className="text-ink">{dayLabel}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Tijd</dt>
                <dd className="text-ink">{time || "-"}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Naam</dt>
                <dd className="text-ink">{`${form.firstName} ${form.lastName}`.trim()}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">E-mail</dt>
                <dd className="text-ink">{form.email}</dd>
              </div>
            </dl>
            <div className="rounded-xl border border-border bg-white p-4 text-sm leading-relaxed text-ink">
              <p className="font-medium">Nog een praktische vraag</p>
              <p className="mt-1">
                Waarom ziet u geen bedragen? Uw middag is al geregeld. Hier plant u alleen uw bezoekmoment.
              </p>
            </div>
          </div>
        ) : null}

        {step === 5 ? (
          <div className="mt-5 space-y-6">
            <h1 className="text-[40px] font-light text-bordeaux lg:text-[56px]">Uw afspraak staat.</h1>
            <p className="text-lg text-ink">Wij kijken ernaar uit u te ontvangen.</p>
            <p className="text-[17px] leading-relaxed text-ink">
              U ontvangt binnen enkele minuten een bevestiging per e-mail. Staat die er niet, kijk dan in uw spam-map
              of neem contact met ons op.
            </p>
            <Link href="/" className="text-ink underline underline-offset-4 hover:text-bordeaux">
              Terug naar de homepage
            </Link>
          </div>
        ) : null}

        {error ? (
          <p role="alert" className="mt-6 rounded-sm bg-[#F8EAE8] p-3 text-sm text-error">
            {error}
          </p>
        ) : null}

        {step <= 4 ? (
          <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-creme p-4 lg:static lg:mt-8 lg:border-0 lg:bg-transparent lg:p-0">
            <div className="mx-auto max-w-narrow">
              <div className="flex gap-3">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={onBack}
                    className="inline-flex min-h-12 items-center justify-center rounded-md border border-ink px-6 text-ink transition-colors hover:border-bordeaux hover:text-bordeaux"
                  >
                    Terug
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={onNext}
                  className="inline-flex min-h-14 flex-1 items-center justify-center rounded-md bg-bordeaux px-8 text-base font-medium text-creme transition-colors duration-200 ease-dkvk hover:bg-bordeaux-pressed lg:flex-none"
                >
                  {step === 3 ? "Bevestigen" : step === 4 ? "Afspraak vastleggen" : "Volgende"}
                </button>
              </div>
              <TrustSignals className="mt-3" />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
