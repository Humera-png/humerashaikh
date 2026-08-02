import Link from "next/link";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { getAllThoughts } from "@/lib/thoughts";

export default function ThoughtsPreview() {
  const thoughts = getAllThoughts();

  return (
    <section id="writing" className="border-t border-line px-7 py-20 md:py-24">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[620px]">
            <Eyebrow index={8} label="Writing" />
            <h2 className="font-display text-[30px] font-medium tracking-tight text-ink sm:text-[36px]">Thoughts</h2>
          </div>
          <Link href="/thoughts" className="link-underline text-[14px] font-medium text-ink">
            View all &rarr;
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {thoughts.map((t) => (
            <Link key={t.slug} href={`/thoughts/${t.slug}`} className="group block border-t border-line pt-6">
              <p className="mb-3 flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-muted">
                <span>{t.category}</span>
                <span className="h-1 w-1 rounded-full bg-line" />
                <span>{t.readingTime}</span>
              </p>
              <h3 className="font-display text-[21px] font-medium tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1">
                {t.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-muted">{t.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
