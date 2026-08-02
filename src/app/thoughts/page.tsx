import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { getAllThoughts } from "@/lib/thoughts";

export const metadata: Metadata = {
  title: "Thoughts | Humera Shaikh",
  description: "Notes on AI systems, automation, and building things that scale.",
};

export default function ThoughtsIndex() {
  const thoughts = getAllThoughts();

  return (
    <div className="px-7 py-20 md:py-24">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-16 max-w-[640px]">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">Writing</p>
          <h1 className="font-display text-[38px] font-medium tracking-tight text-ink sm:text-[48px]">Thoughts</h1>
          <p className="mt-4 text-[16.5px] text-muted">
            Notes on AI systems, automation, and building infrastructure that holds up over time.
          </p>
        </Reveal>

        <div>
          {thoughts.map((t, i) => (
            <Reveal key={t.slug} delay={(i % 2) * 0.06}>
              <Link
                href={`/thoughts/${t.slug}`}
                className="group grid grid-cols-1 gap-3 border-t border-line py-8 first:border-t-0 md:grid-cols-[140px_1fr_auto] md:items-center md:gap-8"
              >
                <p className="text-[13px] font-medium text-muted">{formatDate(t.date)}</p>
                <div>
                  <p className="mb-2 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-muted">
                    {t.category}
                  </p>
                  <h2 className="font-display text-[22px] font-medium tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-[26px]">
                    {t.title}
                  </h2>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-muted">{t.excerpt}</p>
                </div>
                <p className="text-[13px] font-medium text-muted">{t.readingTime}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
