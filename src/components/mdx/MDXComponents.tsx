export const mdxComponents = {
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mdx-reveal mb-5 text-[17px] leading-[1.8] text-muted" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mdx-reveal mb-4 mt-12 font-display text-[26px] font-medium tracking-tight text-ink" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mdx-reveal mb-3 mt-8 font-display text-[20px] font-medium text-ink" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className="font-semibold text-ink" {...props} />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="link-underline font-semibold text-accent" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mdx-reveal mb-5 ml-5 list-disc space-y-2 text-[17px] leading-[1.8] text-muted" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li {...props} />,
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="mdx-reveal mdx-quote my-9 border-l-2 border-ink pl-6" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded bg-ink/[0.06] px-1.5 py-0.5 font-mono text-[0.9em] text-ink" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mdx-reveal my-8 overflow-x-auto rounded-xl bg-ink px-5 py-4 font-mono text-[13.5px] leading-[1.7] text-bg"
      {...props}
    />
  ),
};
