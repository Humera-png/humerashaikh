"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";

const tones: Record<Project["tone"], string> = {
  a: "from-[#EFEAE0] to-[#F7F4EE]",
  b: "from-[#E9E4F5] to-[#F5F2FB]",
  c: "from-[#EAE6DC] to-[#F6F4EE]",
  d: "from-[#E7E9E2] to-[#F4F5F0]",
  e: "from-[#EDE7F6] to-[#F7F4FB]",
  f: "from-[#EEE9DD] to-[#F8F5EE]",
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  const [open, setOpen] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const steps = [
    { label: "Problem", text: project.problem },
    { label: "Approach", text: project.approach },
    { label: "Architecture", text: project.architecture },
    { label: "Outcome", text: project.outcome },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 items-start gap-10 border-t border-line py-14 first:border-t-0 first:pt-0 md:grid-cols-2 md:gap-14 ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="group overflow-hidden rounded-2xl border border-line">
        <div
          className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden bg-gradient-to-br p-8 transition-transform duration-700 ease-out group-hover:scale-[1.015] ${tones[project.tone]}`}
        >
          {/* oversized mark, bleeding off the corner like a printer's ornament on a book cover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-10 text-[190px] leading-none text-ink/[0.07] transition-transform duration-700 ease-out group-hover:-translate-y-1"
          >
            {project.glyph}
          </span>

          {/* faint paper-stock hairline texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "repeating-linear-gradient(135deg, #17161A 0px, #17161A 1px, transparent 1px, transparent 14px)",
            }}
          />

          <div className="absolute inset-3 rounded-xl border border-ink/[0.08]" />

          <p className="relative font-display text-[14px] italic text-ink/40">{String(index + 1).padStart(2, "0")}</p>

          <div className="relative">
            <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/50">
              {project.category}
            </p>
            <div className="mb-2.5 h-px w-10 bg-ink/20" />
            <h4 className="font-display text-[34px] font-medium leading-[1.02] tracking-tight text-ink sm:text-[40px]">
              {project.name}
            </h4>
          </div>
        </div>
      </div>

      <div>
        <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-muted">{project.category}</p>
        <h3 className="mb-4 font-display text-[26px] font-medium tracking-tight text-ink sm:text-[30px]">
          {project.name}
        </h3>
        <p className="mb-6 text-[15.5px] leading-[1.7] text-muted">{project.description}</p>

        <p className="mb-5 border-t border-line pt-5 text-[14px] text-muted">
          <span className="font-semibold uppercase tracking-[0.06em] text-ink/70">Stack</span>{" "}
          {project.tags.join(" / ")}
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[13.5px] font-medium text-ink"
            >
              View Live &#8599;
            </a>
          )}
          {project.caseStudyUrl && (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[13.5px] font-medium text-ink"
            >
              View Case Study &#8599;
            </a>
          )}
          <button
            onClick={() => setOpen((v) => !v)}
            className="link-underline text-[13.5px] font-medium text-ink"
          >
            {open ? "Hide screenshot & process" : "View screenshot & process"}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              {!imgFailed && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 overflow-hidden rounded-xl border border-line"
                >
                  <p className="border-b border-line bg-paper px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
                    Product screenshot
                  </p>
                  <img
                    src={project.image}
                    alt={`${project.name} product screenshot`}
                    onError={() => setImgFailed(true)}
                    className="aspect-video w-full object-cover object-top"
                  />
                </motion.div>
              )}

              <div className="mt-6 space-y-5 border-l border-line pl-5">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    <span className="absolute -left-[26px] top-1.5 h-[7px] w-[7px] rounded-full bg-ink" />
                    <p className="mb-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink/70">
                      {step.label}
                    </p>
                    <p className="text-[14px] leading-[1.6] text-muted">{step.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
