import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { testimonials } from "@/data/skills";

export default function Testimonials() {
  return (
    <section className="border-t border-line px-7 py-20 md:py-24">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-12 max-w-[620px]">
          <Eyebrow index={7} label="Client Words" />
          <h2 className="font-display text-[30px] font-medium tracking-tight text-ink sm:text-[36px]">
            What People Say
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 border-t border-line pt-10 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="group flex flex-col">
              <span className="mb-3 font-display text-[36px] italic leading-none text-ink/20 transition-colors duration-300 group-hover:text-accent/50">
                &ldquo;
              </span>
              <p className="flex-1 text-[15px] leading-[1.75] text-muted">{t.quote}</p>
              <div className="mt-6">
                <p className="text-[14.5px] font-medium text-ink">{t.name}</p>
                <p className="text-[13px] text-muted">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
