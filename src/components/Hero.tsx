"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";

const facts = ["Ahmedabad, India", "B.Tech, Computer Science", "AI Systems Architect & Full-Stack Developer"];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [imgFailed, setImgFailed] = useState(false);

  // normalized pointer position, -0.5..0.5 on each axis
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  // the portrait is the only thing that moves — tilt, a few px of parallax, nothing else
  const portraitX = useSpring(useTransform(px, (v) => v * -14), { damping: 22, stiffness: 120 });
  const portraitY = useSpring(useTransform(py, (v) => v * -9), { damping: 22, stiffness: 120 });
  const rotateX = useSpring(useTransform(py, (v) => v * -4), { damping: 20, stiffness: 100 });
  const rotateY = useSpring(useTransform(px, (v) => v * 5), { damping: 20, stiffness: 100 });

  // light sweep + shadow follow the same input, standing in for real lighting
  const lightX = useTransform(px, [-0.5, 0.5], [20, 80]);
  const lightY = useTransform(py, [-0.5, 0.5], [10, 60]);
  const lightBackground = useTransform(
    [lightX, lightY],
    ([lx, ly]: number[]) => `radial-gradient(circle 260px at ${lx}% ${ly}%, rgba(255,255,255,0.7), transparent 65%)`
  );
  const shadowX = useSpring(useTransform(px, (v) => v * 16), { damping: 22, stiffness: 100 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="mx-auto grid max-w-container grid-cols-1 items-center gap-16 px-7 pb-20 pt-14 md:grid-cols-[1fr_0.92fr] md:pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="order-2 md:order-1"
      >
        <p className="mb-7 flex items-center gap-2 text-[14px] font-medium text-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Hey, I&apos;m Humera
        </p>

        <h1 className="mb-8 font-display text-[42px] font-medium leading-[1.05] tracking-tight text-ink sm:text-[54px] lg:text-[64px]">
          I Design &amp;
          <br />
          Build <em>Systems</em>
          <br />
          That Scale.
        </h1>

        <p className="mb-10 max-w-[460px] text-[17px] leading-[1.7] text-muted">
          I build AI systems, automation workflows, SaaS products, and internal software that eliminate operational
          bottlenecks for growing businesses, from Ahmedabad, India.
        </p>

        <div className="mb-12 flex flex-wrap items-center gap-8">
          <MagneticButton href="https://calendly.com/humerashaikhh605">Book a Strategy Call</MagneticButton>
          <a href="#projects" className="link-underline text-[15px] font-medium text-ink">
            Explore My Work &rarr;
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-6 text-[13.5px] font-medium text-muted">
          {facts.map((f, i) => (
            <span key={f} className="flex items-center gap-4">
              {f}
              {i < facts.length - 1 && <span className="h-1 w-1 rounded-full bg-line" />}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="order-1 flex justify-center md:order-2 md:justify-end"
        style={{ perspective: 1200 }}
      >
        <div className="relative w-full max-w-[380px]">
          <span className="absolute -left-7 top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-muted/70 lg:block">
            Ahmedabad &middot; 2026
          </span>

          <motion.div
            style={{
              x: portraitX,
              y: portraitY,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-t-full rounded-b-3xl bg-paper shadow-lg"
          >
            {!imgFailed ? (
              <img
                src="/portrait.png"
                alt="Portrait of Humera Shaikh"
                className="h-full w-full object-cover object-top"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-display text-[110px] italic text-ink/15">HS</span>
              </div>
            )}

            {/* soft light sweep, tracks pointer — stands in for a real light source */}
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay"
              style={{ background: lightBackground }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-transparent" />
          </motion.div>

          {/* a grounded contact shadow — small and tight, not a glow */}
          <motion.div
            style={{ x: shadowX }}
            className="absolute bottom-[-10px] left-1/2 -z-10 h-8 w-[65%] -translate-x-1/2 rounded-full bg-ink/[0.14] blur-lg"
          />

          <p className="mt-5 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-muted/60">
            Frontend &middot; Backend &middot; Database &middot; Automation &middot; AI
          </p>
        </div>
      </motion.div>
    </section>
  );
}
