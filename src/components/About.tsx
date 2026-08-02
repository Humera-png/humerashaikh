import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { education } from "@/data/experience";

export default function About() {
  return (
    <section id="about" className="border-t border-line px-7 py-20 md:py-24">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-14 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow index={1} label="About" />
          <h2 className="font-display text-[30px] font-medium tracking-tight text-ink sm:text-[36px]">Who I Am</h2>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5 text-[16.5px] leading-[1.75] text-muted">
          <p>
            Most AI projects don&apos;t fail because of the AI. They fail because they never become useful
            products. Having GPT-4, Claude, or any other model isn&apos;t the difficult part anymore. The real
            challenge is turning it into software that solves a real business problem and fits naturally into how
            a team already works.
          </p>
          <p>
            I&apos;m an AI Systems Architect and Full-Stack Developer based in Ahmedabad. I have a Computer Science
            background, but most of what I actually use day-to-day I learned by shipping real products for real
            clients, not from a syllabus: AI chatbots and voice assistants, billing systems that run a
            business&apos;s daily operations. Along the way I developed a
            specific interest in the unglamorous parts of a company: the manual processes, the spreadsheets
            standing in for real systems, the operational debt that quietly caps how fast a team can grow.
          </p>
          <p>
            Today I design and build AI systems, internal platforms, and automation workflows that remove that
            debt, not as isolated scripts, but as dependable infrastructure a business can grow on. I care less
            about writing code than about building products: things that get used, that hold up under pressure,
            and that make the people around them faster.
          </p>

          <div className="grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-2">
            {education.map((e) => (
              <div key={e.school}>
                <p className="text-[13px] font-semibold text-ink">{e.date}</p>
                <p className="mt-1 text-[15px] font-medium text-ink">{e.school}</p>
                <p className="mt-0.5 text-[14px] text-muted">{e.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
