import { InputHTMLAttributes } from "react";

type FormFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  helper?: string;
  error?: string;
};

export function FormField({ id, label, helper, error, required, ...props }: FormFieldProps) {
  const describedBy = [helper ? `${id}-helper` : "", error ? `${id}-error` : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={id}
        required={required}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy || undefined}
        className={`h-14 w-full rounded-sm border bg-sand px-4 text-[17px] text-ink transition-[border-color,background-color] duration-150 ease-dkvk focus-visible:outline-none ${
          error
            ? "border-error"
            : "border-border focus:border-bordeaux focus:bg-creme focus:[border-width:2px]"
        }`}
        {...props}
      />
      {helper ? (
        <p id={`${id}-helper`} className="mt-1.5 text-sm text-muted">
          {helper}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
