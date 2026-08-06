import SectionHeader from "@/components/ui/SectionHeader";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import WindowFrame from "@/components/ui/WindowFrame";
import BracketButton from "@/components/ui/BracketButton";

const placeholderBooks = [
  { id: 1, title: "TBD", author: "—" },
  { id: 2, title: "TBD", author: "—" },
  { id: 3, title: "TBD", author: "—" },
];

export default function Books() {
  return (
    <section id="books" className="scroll-mt-24 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <SectionHeader title="Books" note="last 3 read" />

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3">
          {placeholderBooks.map((book, i) => (
            <RevealOnScroll key={book.id} delay={i * 0.05}>
              <div>
                <div className="w-[128px]">
                  <WindowFrame path="BOOKS \ READ \ <GOODREADS.COM>">
                    <div className="relative aspect-[2/3] w-full bg-void" />
                  </WindowFrame>
                </div>

                <h3 className="mt-4 font-display text-xl leading-tight text-paper">
                  {book.title}
                </h3>
                <div className="mt-1 font-mono text-[11px] text-paper-faint">
                  {book.author}
                </div>

                <div className="mt-3">
                  <BracketButton href="#" icon="↗">
                    GOODREADS
                  </BracketButton>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
