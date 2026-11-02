import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import WindowFrame from "@/components/ui/WindowFrame";
import BracketButton from "@/components/ui/BracketButton";
import PendingPanel from "@/components/ui/PendingPanel";
import { getRecentlyReadBooks } from "@/lib/goodreads";

function Rating({ value }) {
  return (
    <div className="flex gap-1" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 ${
            i < value ? "bg-signal" : "bg-hairline-bright"
          }`}
        />
      ))}
    </div>
  );
}

function formatReadDate(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  })
    .format(d)
    .toLowerCase();
}

export default async function Books() {
  const books = await getRecentlyReadBooks(3);

  return (
    <section id="books" className="scroll-mt-24 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <SectionHeader
          title="Book reviews"
          note={
            <>
              last 3 read — because{" "}
              <a
                href="https://onlinelibrary.wiley.com/doi/full/10.1002/cite.12011"
                target="_blank"
                rel="noopener noreferrer"
                title="Kuhn, “Why Engineers Should Read More Novels”"
                className="text-paper-faint underline decoration-hairline-bright underline-offset-2 transition-colors hover:text-signal"
              >
                the humanities build better engineers
              </a>
            </>
          }
        />

        {books.length === 0 ? (
          <PendingPanel label="Couldn't reach the goodreads feed right now — check back shortly." />
        ) : (
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3">
            {books.map((book, i) => (
              <RevealOnScroll key={book.id} delay={i * 0.05}>
                <div>
                  <div className="w-[128px]">
                    <WindowFrame path="BOOKS \ READ \ <GOODREADS.COM>">
                      <div className="relative aspect-[2/3] w-full overflow-hidden bg-void">
                        {book.image && (
                          <Image
                            src={book.image}
                            alt={book.title}
                            fill
                            sizes="128px"
                            className="object-cover grayscale-[35%] transition-all duration-500 hover:grayscale-0"
                          />
                        )}
                        <div className="absolute left-1 top-1 bg-void/80 px-1 py-0.5 font-mono text-[7px] tracking-wide text-paper-faint">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </WindowFrame>
                  </div>

                  <div className="dotted-rule mt-4" />

                  <h3 className="mt-4 font-display text-xl leading-tight text-paper">
                    {book.title}
                  </h3>
                  <div className="mt-1 font-mono text-[11px] text-paper-faint">
                    {book.author}
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    <Rating value={book.rating} />
                    {formatReadDate(book.readAt) && (
                      <span className="font-mono text-[10px] text-paper-faint">
                        read {formatReadDate(book.readAt)}
                      </span>
                    )}
                  </div>

                  {book.review && (
                    <p className="mt-3 line-clamp-4 text-[13px] leading-relaxed text-paper-dim">
                      {book.review}
                    </p>
                  )}

                  <div className="mt-3">
                    <BracketButton href={book.link} icon="↗">
                      GOODREADS
                    </BracketButton>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
