"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { FormField } from "@/components/FormField";
import { TrustSignals } from "@/components/TrustSignals";
import { partners, reviews } from "@/content/site";

type ChequeFormProps = {
  code?: string;
};

const knownCheques = [
  { chequeNumber: "KWC-2026-001", postcode: "7551HT", firstName: "Anita", partner: "Aluwdoors" },
  { chequeNumber: "KWC-2026-002", postcode: "1217AG", firstName: "Robert", partner: "Steellife" },
  { chequeNumber: "KWC-2026-003", postcode: "7622BT", firstName: "Maaike", partner: "Grando" },
];

function isValidPostcode(value: string) {
  return /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/.test(value.trim());
}

export function ChequeForm({ code }: ChequeFormProps) {
  const partnerEntry = useMemo(() => {
    if (!code) return null;
    return partners[code as keyof typeof partners] ?? { name: "Uw partnerbedrijf" };
  }, [code]);

  const [errors, setErrors] = useState<{ chequeNumber?: string; postcode?: string; generic?: string }>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  if (code) {
    return (
      <div className="rounded-md border border-border bg-sand p-6">
        <p className="text-sm uppercase tracking-[0.14em] text-gold">{`Namens ${partnerEntry?.name}`}</p>
        <h2 className="mt-3 text-2xl font-light text-bordeaux lg:text-[40px]">
          Beste bezoeker, {partnerEntry?.name} heeft een middag voor u gereserveerd.
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-ink">
          In onze galerie in Hengelo, op een dag die u uitkomt.
        </p>
        <Link
          href="/planner"
          className="mt-8 inline-flex min-h-14 items-center justify-center rounded-md bg-bordeaux px-8 text-base font-medium text-creme transition-colors duration-200 ease-dkvk hover:bg-bordeaux-pressed"
        >
          Plan uw middag
        </Link>
        <TrustSignals className="mt-4" />
        <blockquote className="mt-5 rounded-sm border border-border bg-creme p-4">
          <p className="text-sm leading-relaxed text-ink">
            “We hebben op ons tempo gekeken en gesproken. Dat voelde prettig en rustig.”
          </p>
          <cite className="mt-2 block text-xs not-italic text-muted">
            — {reviews.ponteyn.author}, {reviews.ponteyn.city}
          </cite>
        </blockquote>
      </div>
    );
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const chequeNumber = String(formData.get("chequeNumber") ?? "").trim().toUpperCase();
    const postcode = String(formData.get("postcode") ?? "").trim().toUpperCase();
    const nextErrors: typeof errors = {};

    if (!chequeNumber) nextErrors.chequeNumber = "Dit veld is verplicht.";
    if (!postcode) nextErrors.postcode = "Dit veld is verplicht.";
    if (postcode && !isValidPostcode(postcode)) nextErrors.postcode = "Vult u een geldige postcode in.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    window.setTimeout(() => {
      const match = knownCheques.find(
        (item) => item.chequeNumber === chequeNumber && item.postcode === postcode.replace(/\s+/g, "")
      );
      setLoading(false);
      if (!match) {
        setSuccess(false);
        setErrors({
          generic: "Deze combinatie herkennen wij niet. Controleert u uw nummer en postcode.",
        });
        return;
      }
      setErrors({});
      setSuccess(true);
    }, 450);
  };

  return (
    <div className="rounded-md border border-border bg-creme p-6 shadow-sm">
      <form onSubmit={onSubmit} className="space-y-6" noValidate>
        <div aria-live="polite">
          {errors.generic ? <p className="rounded-sm bg-[#F8EAE8] p-3 text-sm text-error">{errors.generic}</p> : null}
        </div>
        <FormField
          id="chequeNumber"
          name="chequeNumber"
          label="Chequenummer"
          required
          helper="U vindt het chequenummer rechtsonder op uw cheque."
          autoComplete="off"
          error={errors.chequeNumber}
        />
        <FormField
          id="postcode"
          name="postcode"
          label="Postcode"
          required
          autoComplete="postal-code"
          helper="Bijvoorbeeld 7555 AB."
          error={errors.postcode}
        />
        <p className="rounded-sm border border-border bg-sand p-3 text-sm text-ink">
          We gebruiken deze invoer alleen om uw cheque te herkennen.
        </p>
        <button
          type="submit"
          className="inline-flex min-h-14 w-full items-center justify-center rounded-md bg-bordeaux px-8 text-base font-medium text-creme transition-colors duration-200 ease-dkvk hover:bg-bordeaux-pressed lg:w-auto"
        >
          {loading ? "Controleer uw cheque..." : "Controleer uw cheque"}
        </button>
        <TrustSignals />
        <p className="text-sm text-muted">
          Wij gebruiken uw gegevens uitsluitend om uw cheque te herkennen. Zie onze{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-bordeaux">
            privacyverklaring
          </Link>
          .
        </p>
      </form>
      {success ? (
        <div className="mt-4 space-y-3">
          <p className="rounded-sm bg-[#EAF0E8] p-3 text-sm text-success">
            Uw cheque is herkend → kies nu rustig een moment
          </p>
          <Link className="block text-base text-ink underline underline-offset-4 hover:text-bordeaux" href="/planner">
            Plan uw middag
          </Link>
          <blockquote className="rounded-sm border border-border bg-sand p-4">
            <p className="text-sm leading-relaxed text-ink">
              “Er is niets opgedrongen. We werden rustig ontvangen met koffie en tijd.”
            </p>
            <cite className="mt-2 block text-xs not-italic text-muted">
              — {reviews.vanKesteren.author}, {reviews.vanKesteren.city}
            </cite>
          </blockquote>
        </div>
      ) : null}
    </div>
  );
}
