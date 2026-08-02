import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Reveal from "@/components/Reveal";
import ReadingProgress from "@/components/ReadingProgress";
import ShareButton from "@/components/ShareButton";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import MdxRevealObserver from "@/components/mdx/MdxRevealObserver";
import { getAllThoughts, getThoughtBySlug } from "@/lib/thoughts";

export function generateStaticParams() {
  return getAllThoughts().map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const all = getAllThoughts();
  const meta = all.find((t) => t.slug === params.slug);
  if (!meta) return {};
  return {
    title: `${meta.title} | Humera Shaikh`,
    description: meta.excerpt,
  };
}

export default function ThoughtPage({ params }: { params: { slug: string } }) {
  const all = getAllThoughts();
  const exists = all.some((t) => t.slug === params.slug);
  if (!exists) notFound();

  const { meta, content } = getThoughtBySlug(params.slug);
  const related = all.filter((t) => t.slug !== params.slug).slice(0, 2);

  return (
    <article>
      <ReadingProgress />

      <div className="border-b border-line px-7 pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-[760px]">
          <Link href="/thoughts" className="link-underline mb-8 inline-block text-[14px] font-medium text-ink">
            &larr; All Thoughts
          </Link>
          <Reveal>
            <p className="mb-5 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-muted">{meta.category}</p>
            <h1 className="font-display text-[34px] font-medium leading-[1.15] tracking-tight text-ink sm:text-[48px]">
              {meta.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-[13.5px] font-medium text-muted">
              <span>{formatDate(meta.date)}</span>
              <span>&middot;</span>
              <span>{meta.readingTime}</span>
              <span>&middot;</span>
              <ShareButton title={meta.title} />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="prose-mdx mx-auto max-w-[760px] px-7 py-16">
        <MDXRemote source={content} components={mdxComponents} />
        <MdxRevealObserver />
      </div>

      {related.length > 0 && (
        <div className="border-t border-line px-7 py-16">
          <div className="mx-auto max-w-[760px]">
            <p className="mb-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">Related</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {related.map((t) => (
                <Link key={t.slug} href={`/thoughts/${t.slug}`} className="group block border-t border-line pt-5">
                  <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-muted">
                    {t.category}
                  </p>
                  <h3 className="font-display text-[18px] font-medium text-ink transition-transform duration-300 group-hover:translate-x-1">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-muted">{t.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
