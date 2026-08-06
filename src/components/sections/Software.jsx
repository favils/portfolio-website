"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import BracketButton from "@/components/ui/BracketButton";
import WindowFrame from "@/components/ui/WindowFrame";
import { projects } from "@/data/projects";

const TABS = [
  { id: "engineering", label: "ENGINEERING" },
  { id: "design", label: "WEB / DESIGN" },
];

export default function Software() {
  const [tab, setTab] = useState("engineering");
  const filtered = projects.filter((p) => p.category === tab);

  return (
    <section id="software" className="scroll-mt-24 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <SectionHeader title="Software" note="selected work — code and design" />

        <div className="mb-12 flex gap-1 border-b border-hairline font-mono text-[11px] tracking-wide">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`-mb-px border-b px-3 py-2 transition-colors ${
                tab === t.id
                  ? "border-signal text-signal"
                  : "border-transparent text-paper-faint hover:text-paper-dim"
              }`}
            >
              [{tab === t.id ? "•" : " "}] {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <RevealOnScroll key={p.title} delay={(i % 3) * 0.05}>
              <div className="group">
                <WindowFrame
                  path={`PROJECTS \\ ${p.type} \\ <FATIMAVILLENA.COM>`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-void">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover grayscale-[45%] transition-all duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                    />
                    <div className="absolute left-2 top-2 bg-void/80 px-1.5 py-0.5 font-mono text-[9px] tracking-wide text-paper-faint">
                      // fig.{String(i + 1).padStart(2, "0")} \\
                    </div>

                    {p.stack && (
                      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-dashed border-hairline-bright bg-void/85 px-3 py-2.5">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="font-mono text-[9px] tracking-wide text-paper-dim"
                          >
                            ▪ {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </WindowFrame>

                <div className="dotted-rule mt-3" />

                <h3 className="mt-3 font-display text-xl leading-tight tracking-tight text-paper">
                  {p.title}
                </h3>
                <div className="mt-1 font-mono text-[9px] tracking-wide text-paper-faint">
                  ▪ {p.type}
                </div>

                <div className="mt-2.5 flex gap-2">
                  {p.github && (
                    <BracketButton href={p.github} icon="↗">
                      GITHUB
                    </BracketButton>
                  )}
                  {p.live && (
                    <BracketButton href={p.live} icon="→">
                      {p.liveLabel ?? "VIEW LIVE"}
                    </BracketButton>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
