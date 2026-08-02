/**
 * Pure atmosphere — two soft, static color washes in opposite corners. No
 * lines, no nodes, no diagrams standing in for meaning they don't carry.
 * Cream stays cream; this just keeps the very edges of the page from
 * feeling flat under long scroll.
 */
export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, #F1EDE3, transparent 70%)" }}
      />
      <div
        className="absolute -left-56 bottom-0 h-[520px] w-[520px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, #EFE9FF, transparent 72%)" }}
      />
    </div>
  );
}
