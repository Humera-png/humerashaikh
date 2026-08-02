"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { blueprintNodes } from "@/data/blueprint";

function curve(x1: number, y1: number, x2: number, y2: number) {
  const midX = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
}

const VB_W = 900;
const VB_H = 260;
// Horizontal padding added around the node coordinates so the leftmost/rightmost
// labels ("Lead Capture", "Dashboard") always have room to render without
// clipping against the diagram's edge, even in cramped intermediate widths.
const PAD_X = 55;
const TOTAL_W = VB_W + PAD_X * 2; // 1010

export default function SystemBlueprint() {
  const [revealed, setRevealed] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = blueprintNodes.find((n) => n.id === activeId) ?? null;

  return (
    <section className="border-t border-line px-7 py-20 md:py-24">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-10 max-w-[620px]">
          <Eyebrow index={2} label="How I Think" />
          <h2 className="font-display text-[30px] font-medium tracking-tight text-ink sm:text-[36px]">
            One System, Explained.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-muted">
            I could tell you I build AI systems. It&apos;s more useful to show you the shape of one: this is the
            pipeline most of my projects reduce to, once the specifics are stripped away.
          </p>
        </Reveal>

        {!revealed && (
          <Reveal delay={0.08}>
            <button
              onClick={() => setRevealed(true)}
              className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-[14.5px] font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
            >
              Explore My Thinking
            </button>
          </Reveal>
        )}

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-10 pt-4 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
                <div>
                  <div className="relative aspect-[1010/260] w-full">
                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                    viewBox={`${-PAD_X} 0 ${TOTAL_W} ${VB_H}`}
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    {blueprintNodes.slice(0, -1).map((n, i) => {
                      const next = blueprintNodes[i + 1];
                      const isLive = activeId === n.id || activeId === next.id;
                      return (
                        <motion.path
                          key={n.id}
                          d={curve(n.x, n.y, next.x, next.y)}
                          stroke={isLive ? "#6D5EF9" : "#D8D2C4"}
                          strokeWidth={isLive ? 1.4 : 1}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.15 + i * 0.18, ease: [0.65, 0, 0.35, 1] }}
                        />
                      );
                    })}
                  </svg>

                  {blueprintNodes.map((n, i) => (
                    <motion.button
                      key={n.id}
                      type="button"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setActiveId(n.id)}
                      onClick={() => setActiveId(n.id)}
                      className="group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 p-4"
                      style={{ left: `${((n.x + PAD_X) / TOTAL_W) * 100}%`, top: `${(n.y / VB_H) * 100}%` }}
                    >
                      <span
                        className={`flex h-3 w-3 items-center justify-center rounded-full border transition-colors ${
                          activeId === n.id
                            ? "border-accent bg-accent"
                            : "border-ink/40 bg-bg group-hover:border-ink"
                        }`}
                      />
                      <span
                        className={`whitespace-nowrap text-[12.5px] font-medium transition-colors ${
                          activeId === n.id ? "text-ink" : "text-muted group-hover:text-ink"
                        }`}
                      >
                        {n.label}
                      </span>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {blueprintNodes.map((n) => (
                    <button
                      key={n.id}
                      type="button"
                      onClick={() => setActiveId(n.id)}
                      className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                        activeId === n.id
                          ? "border-ink bg-ink text-bg"
                          : "border-line text-muted hover:border-ink hover:text-ink"
                      }`}
                    >
                      {n.label}
                    </button>
                  ))}
                </div>
                </div>

                <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  {active ? (
                    <div>
                      <p className="mb-2 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-muted">
                        {String(blueprintNodes.findIndex((n) => n.id === active.id) + 1).padStart(2, "0")} &middot;{" "}
                        {active.label}
                      </p>
                      <p className="mb-4 font-display text-[19px] font-medium text-ink">{active.description}</p>
                      <p className="mb-4 text-[14.5px] leading-[1.65] text-muted">{active.why}</p>
                      <p className="mb-5 border-l-2 border-line pl-3 text-[13.5px] italic leading-[1.6] text-muted">
                        {active.outcome}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {active.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-line px-3 py-1 text-[12px] font-medium text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-[15px] leading-[1.7] text-muted">
                      Hover or tap a node to see how that stage works, and why it&apos;s built the way it is.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
