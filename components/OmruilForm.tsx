"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FormField } from "@/components/FormField";

const knownPaintings = [
  { paintingNumber: "DKVK-4012", postcode: "7551HT" },
  { paintingNumber: "DKVK-4013", postcode: "1217AG" },
];

export function OmruilForm() {
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const paintingNumber = String(formData.get("paintingNumber") ?? "").trim().toUpperCase();
    const postcode = String(formData.get("postcode") ?? "").trim().toUpperCase().replace(/\s+/g, "");

    const match = knownPaintings.find(
      (item) => item.paintingNumber === paintingNumber && item.postcode === postcode
    );

    if (!match) {
      setMessage({
        type: "error",
        text: "Dit nummer herkennen wij niet. Bel ons gerust, wij zoeken het met u uit.",
      });
      return;
    }

    setMessage({ type: "success", text: "Wij hebben u gevonden. Plan hieronder een moment dat u schikt." });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      {message ? (
        <p
          className={`rounded-sm p-3 text-sm ${message.type === "error" ? "bg-[#F8EAE8] text-error" : "bg-[#EAF0E8] text-success"}`}
          role="alert"
        >
          {message.text}
        </p>
      ) : null}
      <FormField
        id="paintingNumber"
        name="paintingNumber"
        label="Schilderij-nummer"
        required
        helper="Dit nummer vindt u op het certificaat bij uw schilderij."
      />
      <FormField id="postcode" name="postcode" label="Postcode" required autoComplete="postal-code" />
      <button
        type="submit"
        className="inline-flex min-h-14 w-full items-center justify-center rounded-md bg-bordeaux px-8 text-base font-medium text-creme transition-colors duration-200 ease-dkvk hover:bg-bordeaux-pressed lg:w-auto"
      >
        Controleren
      </button>
      {message?.type === "success" ? (
        <Link href="/planner?context=omruil" className="block text-base text-ink underline underline-offset-4">
          Plan uw afspraak
        </Link>
      ) : null}
    </form>
  );
}
