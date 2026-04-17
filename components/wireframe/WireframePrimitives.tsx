import { ReactNode } from "react";

type WireframeSectionProps = {
  children: ReactNode;
  tone?: "white" | "neutral";
  className?: string;
};

type WireframeContainerProps = {
  children: ReactNode;
  className?: string;
};

type MediaPlaceholderProps = {
  label: string;
  className?: string;
};

export function WireframeSection({ children, tone = "white", className = "" }: WireframeSectionProps) {
  const toneClass = tone === "neutral" ? "bg-neutral-50" : "bg-white";
  return <section className={`${toneClass} py-20 lg:py-24 ${className}`.trim()}>{children}</section>;
}

export function WireframeContainer({ children, className = "" }: WireframeContainerProps) {
  return <div className={`mx-auto w-full max-w-6xl px-5 lg:px-8 ${className}`.trim()}>{children}</div>;
}

export function MediaPlaceholder({ label, className = "" }: MediaPlaceholderProps) {
  return (
    <div
      className={`flex min-h-56 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 text-sm text-neutral-500 ${className}`.trim()}
    >
      {label}
    </div>
  );
}
