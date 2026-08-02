"use client";

import { useEffect } from "react";

/** Fades in .mdx-reveal elements (rendered server-side by MDXComponents) as they scroll into view. */
export default function MdxRevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(".prose-mdx .mdx-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
