import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { capabilities } from "@/data/skills";
import { certifications } from "@/data/experience";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line px-7 py-20 md:py-24">
      <div className="mx-auto max-w-container">
        <Reveal className="mb-12 max-w-[620px]">
          <Eyebrow index={6} label="Toolkit" />
          <h2 className="font-display text-[30px] font-medium tracking-tight text-ink sm:text-[36px]">
            Capabilities
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-10 sm:grid-cols-3 lg:grid-cols-4">
          {capabilities.map((group, i) => (
            <Reveal key={group.category} delay={(i % 4) * 0.05}>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-ink">{group.category}</p>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-[14.5px] text-muted transition-colors duration-200 hover:text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16 border-t border-line pt-10">
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">Certifications</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {certifications.map((c) => (
              <div key={c.name}>
                <p className="text-[15px] font-medium text-ink">{c.name}</p>
                <p className="mt-1 text-[13.5px] text-muted">{c.provider}</p>
                <p className="mt-0.5 text-[12.5px] font-medium text-muted">{c.date}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
