import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import MagneticButton from "./MagneticButton";

const socials = [
  { href: "https://www.linkedin.com/in/humerashaikhofficial", label: "LinkedIn" },
  { href: "https://calendly.com/humerashaikhh605", label: "Calendly" },
  { href: "https://www.upwork.com/freelancers/~01abf633e12f90d800?mp_source=share", label: "Upwork" },
  { href: "https://github.com/Humera-png", label: "GitHub" },
  { href: "mailto:humerashaikhh605@gmail.com", label: "Email" },
  { href: "tel:+919737029569", label: "+91 97370 29569" },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line px-7 py-24 md:py-28">
      <Reveal className="mx-auto max-w-[640px] text-center">
        <Eyebrow index={9} label="Contact" centered />
        <h2 className="mb-5 font-display text-[32px] font-medium tracking-tight text-ink sm:text-[40px]">
          Let&apos;s build something great together.
        </h2>
        <p className="mb-10 text-[16.5px] text-muted">
          Have a system worth building or a bottleneck worth removing? I&apos;d like to hear about it.
        </p>

        <div className="mb-14 flex flex-wrap justify-center gap-6">
          <MagneticButton href="https://calendly.com/humerashaikhh605">Book a Call</MagneticButton>
          <a
            href="mailto:humerashaikhh605@gmail.com"
            className="link-underline flex items-center text-[15px] font-medium text-ink"
          >
            Send an Email
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 border-t border-line pt-8 text-[14px] font-medium text-muted">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-ink">
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
