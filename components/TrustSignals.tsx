type TrustSignalsProps = {
  items?: string[];
  className?: string;
};

const defaultSignals = ["Geen verplichting", "Rustige ontvangst", "U bepaalt het tempo"];

export function TrustSignals({ items = defaultSignals, className = "" }: TrustSignalsProps) {
  return (
    <ul className={`space-y-1.5 text-sm text-muted ${className}`.trim()}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span aria-hidden className="text-[#4D7A45]">
            ✔
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
