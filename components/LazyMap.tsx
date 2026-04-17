"use client";

import { useState } from "react";

export function LazyMap() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title="Route naar Galerie De Kunst van Kunst"
        src="https://www.google.com/maps?q=Hengelo+Overijssel&output=embed"
        loading="lazy"
        className="h-[200px] w-full rounded-sm border border-border lg:h-[320px]"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="flex h-[200px] w-full items-center justify-center rounded-sm border border-border bg-sand lg:h-[320px]">
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="inline-flex min-h-12 items-center justify-center rounded-md bg-bordeaux px-6 text-creme"
      >
        Laad kaart
      </button>
    </div>
  );
}
