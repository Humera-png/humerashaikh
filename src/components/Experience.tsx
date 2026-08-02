"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { experience } from "@/data/experience";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 65%",
            scrub: 0.6,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="border-t border-line px-7 py-20 md:py-24">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-12 max-w-[620px]">
          <Eyebrow index={5} label="Experience" />
          <h2 className="font-display text-[30px] font-medium tracking-tight text-ink sm:text-[36px]">
            Where I&apos;ve Worked
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative max-w-[760px] pl-8">
          <div className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-line" />
          <div ref={lineRef} className="absolute bottom-1.5 left-[5px] top-1.5 w-px origin-top bg-ink" />

          <div className="space-y-11">
            {experience.map((item, i) => (
              <Reveal key={item.org + item.date} delay={Math.min(i * 0.05, 0.3)} y={16} className="relative">
                <span className="absolute -left-8 top-1.5 h-[9px] w-[9px] rounded-full bg-ink" />
                <p className="mb-1.5 text-[13px] font-semibold text-muted">{item.date}</p>
                <h3 className="font-display text-[19px] font-medium text-ink">
                  {item.role} <span className="font-sans text-[15px] text-muted">&middot; {item.org}</span>
                </h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
