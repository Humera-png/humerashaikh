export default function Eyebrow({ index, label, centered }: { index: number; label: string; centered?: boolean }) {
  return (
    <p
      className={`mb-3 flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="text-ink/35">{String(index).padStart(2, "0")}</span>
      {label}
    </p>
  );
}
