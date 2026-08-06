import SectionHeader from "@/components/ui/SectionHeader";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { roles, education, featuredProjects, skills } from "@/data/experience";

function Entry({ range, title, org, location, points, index, total }) {
  return (
    <div className="relative pl-8 sm:pl-10">
      <div className="absolute left-0 top-1.5 h-2 w-2 -translate-x-[3.5px] rounded-full border border-signal bg-void" />
      {index < total - 1 && (
        <div className="absolute left-0 top-4 bottom-[-2.5rem] w-px bg-hairline" />
      )}
      <div className="font-mono text-[11px] tracking-widest text-signal">
        {range}
      </div>
      <h3 className="mt-1.5 font-display text-2xl tracking-tight text-paper">
        {title}
      </h3>
      <div className="mt-1 font-mono text-[12px] text-paper-dim">
        {org} {location && <span className="text-paper-faint">— {location}</span>}
      </div>
      <ul className="mt-4 flex flex-col gap-2.5">
        {points.map((p, i) => (
          <li
            key={i}
            className="flex gap-3 text-[14px] leading-relaxed text-paper-dim"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-paper-faint" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const timeline = [...roles, education];

  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-hairline"
    >
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <SectionHeader
          title="Experience"
          note="roles, education, and selected projects"
        />

        <div className="flex flex-col gap-14">
          {timeline.map((entry, i) => (
            <RevealOnScroll key={entry.title} delay={i * 0.05}>
              <Entry {...entry} index={i} total={timeline.length} />
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-24 border-t border-hairline pt-10">
          <div className="font-mono text-[12px] text-signal">
            {"{ selected projects }"}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {featuredProjects.map((p) => (
              <RevealOnScroll key={p.title}>
                <div className="font-mono text-[11px] text-paper-faint">
                  {p.range}
                </div>
                <h4 className="mt-1 font-display text-lg text-paper">
                  {p.title}
                </h4>
                <div className="mt-1 font-mono text-[11px] text-paper-dim">
                  {p.stack}
                </div>
                <ul className="mt-3 flex flex-col gap-2">
                  {p.points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[13px] leading-relaxed text-paper-dim"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-paper-faint" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-hairline pt-10">
          <div className="font-mono text-[12px] text-signal">
            {"{ stack }"}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <div className="font-mono text-[11px] text-paper-faint">
                  {group.toUpperCase()}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="border border-hairline px-2 py-1 font-mono text-[11px] text-paper-dim"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
