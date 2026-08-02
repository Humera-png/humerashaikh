"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const items = [
  { mark: "01", title: "AI Systems", body: "Applied AI that makes decisions, drafts work, and acts, not just chat wrappers." },
  { mark: "02", title: "Internal Platforms", body: "Purpose-built tools that give teams a single, reliable source of truth." },
  { mark: "03", title: "Automation Workflows", body: "Pipelines that quietly remove manual, repetitive work from a team's day." },
  { mark: "04", title: "SaaS Products", body: "Full products, from architecture to billing to launch, built to hold up under real usage." },
  { mark: "05", title: "Developer Tools", body: "Tools that make other builders faster, with the same care I'd want in my own stack." },
];

export default function WhatIBuild() {
  return (
    <section id="build" className="border-t border-line px-7 py-20 md:py-24">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-12 max-w-[620px]">
          <Eyebrow index={3} label="Focus" />
          <h2 className="font-display text-[30px] font-medium tracking-tight text-ink sm:text-[36px]">
            What I Enjoy Building
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div key={item.title} className="relative pt-6">
              <motion.span
                className="absolute left-0 top-0 h-px w-full origin-left bg-line"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.25 + (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="mb-3 font-display text-[14px] italic text-muted">{item.mark}</p>
                <h3 className="mb-2 text-[16.5px] font-medium text-ink">{item.title}</h3>
                <p className="text-[14.5px] leading-[1.65] text-muted">{item.body}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
