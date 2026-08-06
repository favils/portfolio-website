import RevealOnScroll from "@/components/ui/RevealOnScroll";
import AnnotatedLink from "@/components/ui/AnnotatedLink";
import BracketButton from "@/components/ui/BracketButton";
import WindowFrame from "@/components/ui/WindowFrame";

export default function Hero() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden">
      <div className="radial-glow" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-20 sm:px-10 sm:pt-24 lg:px-16 lg:pt-32">
        <RevealOnScroll>
          <div className="font-mono text-[12px] text-paper-faint">
            {"{ software engineer and graphic design hobbyist }"}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-paper sm:text-6xl lg:text-7xl">
            i design things,
            <br />
            then make them work.
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper-dim">
            Software Engineer based in Miami, FL.
            NYU CS grad, splitting time between code and design.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <BracketButton href="#software" icon="■" external={false}>
              EXPLORE SOFTWARE
            </BracketButton>
            <AnnotatedLink href="https://github.com/favils">
              GITHUB
            </AnnotatedLink>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} className="mt-16">
          <WindowFrame path="SYSTEM \ PROFILE \ <FATIMAVILLENA.COM>">
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 px-5 py-6 font-mono text-[11px] text-paper-faint sm:flex sm:flex-wrap sm:gap-x-12">
              <div>
                FILE: <span className="text-paper-dim">FATIMA_VILLENA</span>
              </div>
              <div>
                BASE: <span className="text-paper-dim">MIAMI, FL</span>
              </div>
              <div>
                STATUS: <span className="text-signal">ACTIVE</span>
              </div>
              <div>
                REV: <span className="text-paper-dim">2026.08</span>
              </div>
            </div>
          </WindowFrame>
        </RevealOnScroll>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-24 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16">
          <RevealOnScroll>
            <div className="font-mono text-[12px] text-signal">
              {"{ what i build }"}
            </div>
            <p className="mt-4 text-base leading-relaxed text-paper-dim">
              Full-stack web apps and internal tools, plus computer-vision
              side projects like an ASL hand-gesture interpreter.  Working prototypes
              available down below.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.05}>
            <div className="font-mono text-[12px] text-signal">
              {"{ outside of work }"}
            </div>
            <p className="mt-4 text-base leading-relaxed text-paper-dim">
              Graphic design, gaming, and vlog editing. Most nights I'm reading or
              reviewing sci-fi/fantasy, or in the kitchen experimenting with
              Latin/South Asian fusion.
            </p>
          </RevealOnScroll>
        </div>

        <div className="mt-16 border-t border-hairline pt-6 font-mono text-[11px] text-paper-faint">
          nyu — b.s. computer science, dec 2024
        </div>
      </div>
    </section>
  );
}
