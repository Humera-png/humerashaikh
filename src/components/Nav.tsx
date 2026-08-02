"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/thoughts", label: "Thoughts", id: null },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const ids = links.map((l) => l.id).filter((id): id is string => Boolean(id));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-container items-center justify-between gap-6 px-7">
        <Link href="/" className="font-display text-[17px] font-medium tracking-tight text-ink">
          Humera Shaikh
        </Link>

        <nav className="mx-auto hidden gap-7 text-[14.5px] font-medium text-muted md:flex">
          {links.map((l) => {
            const isActive = l.id ? activeId === l.id : pathname.startsWith("/thoughts");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative pb-1 transition-colors ${isActive ? "text-ink" : "hover:text-ink"}`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-[1px] left-0 right-0 h-[1.5px] bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <a
          href="https://calendly.com/humerashaikhh605"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full bg-ink px-[20px] py-[10px] text-[13.5px] font-medium text-bg transition-opacity hover:opacity-85 md:inline-flex"
        >
          Book a Call
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg border border-line md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-4 rounded bg-ink"
          />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="h-[2px] w-4 rounded bg-ink" />
          <motion.span
            animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
            className="h-[2px] w-4 rounded bg-ink"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-line bg-white md:hidden"
          >
            <div className="flex flex-col gap-4 px-7 py-6">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-[15px] font-medium text-muted hover:text-ink"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
