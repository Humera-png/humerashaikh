import Link from "next/link";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/#contact", label: "Contact" },
];

const socials = [
  { href: "https://www.linkedin.com/in/humerashaikhofficial", label: "LinkedIn", short: "in" },
  { href: "https://github.com/Humera-png", label: "GitHub", short: "gh" },
  { href: "https://www.upwork.com/freelancers/~01abf633e12f90d800?mp_source=share", label: "Upwork", short: "up" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-5 px-7 pb-6">
        <div>
          <p className="font-display text-[16px] font-medium text-ink">Humera Shaikh</p>
          <p className="mt-1 text-[13.5px] text-muted">AI Systems Architect · Ahmedabad, India</p>
        </div>

        <nav className="flex flex-wrap gap-5 text-[13.5px] font-medium text-muted">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-2.5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-line text-[11px] font-semibold uppercase text-muted transition-colors hover:border-ink hover:text-ink"
            >
              {s.short}
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-[12.5px] text-muted">© 2026 Humera Shaikh. All rights reserved.</p>
    </footer>
  );
}
