const artists = [
  {
    name: "Marieke ten Cate",
    bio: "Werkt in rustige kleurvlakken en natuurlijke structuren, met nadruk op materiaal en licht.",
  },
  {
    name: "Johan Meijer",
    bio: "Schildert verstilde interieurs en landschappen met een warme, aardse toon.",
  },
  {
    name: "Ilse ter Horst",
    bio: "Maakt werk met duidelijke penseelstructuur en een ingetogen ritme.",
  },
];

export function ArtistsAccordion() {
  return (
    <div className="mt-8 border-t border-border">
      {artists.map((artist) => (
        <details key={artist.name} className="group border-b border-border">
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between text-lg font-medium text-ink">
            {artist.name}
            <span className="text-2xl transition-transform duration-300 ease-dkvk group-open:rotate-45">+</span>
          </summary>
          <div className="pb-6 pr-6 text-[17px] leading-relaxed text-ink">{artist.bio}</div>
        </details>
      ))}
    </div>
  );
}
