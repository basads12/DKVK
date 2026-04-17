"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FormField } from "@/components/FormField";

type Step = 1 | 2 | 3 | 4 | 5;

const days = [
  { id: "maandag", label: "Maandag", note: "Onze rustigste dag. De galerie is nagenoeg leeg." },
  { id: "donderdag", label: "Donderdag", note: "Rustig, met ruime tijd voor een gesprek." },
  { id: "vrijdag", label: "Vrijdag", note: "Rustig en gelijkmatig ingepland." },
  { id: "zaterdag", label: "Zaterdag", note: "Bijna vol." },
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
    <section className="bg-creme py-12 pb-28 lg:py-20 lg:pb-20">
      <div className="mx-auto max-w-narrow px-5 lg:px-8">
        {step <= 4 ? (
          <p
            role="progressbar"
            aria-label="Planner voortgang"
            aria-valuenow={step}
            aria-valuemax={4}
            className="text-sm text-muted"
          >
            Stap {step} van 4
          </p>
        ) : null}

        {step === 1 ? (
          <div className="mt-5 space-y-6">
            <h1 className="text-[40px] font-light text-bordeaux lg:text-[56px]">Welke dag schikt u?</h1>
            <p className="text-lg text-ink">Een middag duurt 45 tot 90 minuten.</p>
            <ul className="space-y-3">
              {days.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setDay(item.id)}
                    className={`w-full rounded-sm border p-4 text-left ${
                      day === item.id ? "border-bordeaux bg-creme" : "border-border bg-sand"
                    }`}
                  >
                    <p className="text-lg font-medium text-ink">{item.label}</p>
                    <p className="text-sm text-muted">{item.note}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="mt-5 space-y-6">
            <h1 className="text-[40px] font-light text-bordeaux lg:text-[56px]">Hoe laat schikt het?</h1>
            <p className="text-lg text-ink">Wij reserveren het dagdeel volledig voor u.</p>
            <ul className="space-y-3">
              {times.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setTime(item.id)}
                    className={`w-full rounded-sm border p-4 text-left ${
                      time === item.id ? "border-bordeaux bg-creme" : "border-border bg-sand"
                    }`}
                  >
                    <p className="text-lg text-ink">{item.label}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="mt-5 space-y-6">
            <h1 className="text-[40px] font-light text-bordeaux lg:text-[56px]">Uw gegevens.</h1>
            <p className="text-lg text-ink">Alleen wat wij nodig hebben om u te ontvangen.</p>
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
            <p className="text-lg text-ink">Nog één controle, dan leggen wij uw afspraak vast.</p>
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
            <div className="mx-auto flex max-w-narrow gap-3">
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
          </div>
        ) : null}
      </div>
    </section>
  );
}
