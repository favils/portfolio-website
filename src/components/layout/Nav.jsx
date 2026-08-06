"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Mail, Github, Linkedin } from "lucide-react";
import FolderIcon from "@/components/ui/FolderIcon";

const FOLDERS = [
  {
    title: "INDEX",
    items: [{ label: "about", href: "#about" }],
  },
  {
    title: "EXPERIENCE",
    items: [{ label: "timeline", href: "#experience" }],
  },
  {
    title: "SOFTWARE",
    items: [{ label: "projects", href: "#software" }],
  },
  {
    title: "BOOK REVIEWS",
    items: [{ label: "currently-reading", href: "#books" }],
  },
  {
    title: "CONNECT",
    items: [
      { label: "email", href: "mailto:fatimavillena@gmail.com", icon: Mail },
      { label: "github", href: "https://github.com/favils", icon: Github },
      {
        label: "linkedin",
        href: "https://www.linkedin.com/in/fatimavillena/",
        icon: Linkedin,
      },
    ],
  },
];

const SECTION_IDS = ["about", "experience", "software", "books"];

function useActiveSection() {
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return activeId;
}

function LocalClock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    function tick() {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "America/New_York",
          hour12: false,
        }).format(new Date())
      );
    }
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="font-mono text-[10px] tracking-wide text-paper-faint">
      mia {time ?? "--:--"} local
    </div>
  );
}

function Folder_({ title, items, activeId, onNavigate }) {
  return (
    <div>
      <div className="flex items-center gap-2 font-mono text-[11px] font-medium tracking-widest text-signal">
        <FolderIcon className="text-signal" />
        {title}
      </div>
      <ul className="mt-2 flex flex-col gap-1 pl-[21px]">
        {items.map((item) => {
          const active = item.href === `#${activeId}`;
          const isHttp = item.href.startsWith("http");
          const Icon = item.icon;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                target={isHttp ? "_blank" : undefined}
                rel={isHttp ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-2 py-0.5 font-mono text-[12px] transition-colors ${
                  active
                    ? "font-medium text-paper"
                    : "text-paper-faint hover:text-paper-dim"
                }`}
              >
                {Icon ? (
                  <Icon
                    size={12}
                    strokeWidth={1.75}
                    className="text-paper-faint/60"
                  />
                ) : (
                  <span className={active ? "text-paper" : "text-paper-faint/60"}>
                    [ {active ? "•" : "    "} ]
                  </span>
                )}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function NavTree({ activeId, onNavigate }) {
  return (
    <div className="flex flex-col gap-6">
      {FOLDERS.map((f) => (
        <Folder_
          key={f.title}
          title={f.title}
          items={f.items}
          activeId={activeId}
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
}

export default function Nav() {
  const activeId = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop rail */}
      <nav className="sticky top-0 z-40 hidden h-screen w-[248px] shrink-0 flex-col justify-between border-r border-hairline bg-void px-7 py-9 lg:flex">
        <div>
          <Link href="#about" className="block font-display text-[28px] leading-none tracking-tight text-paper">
            Fatima Villena
          </Link>
          <div className="mt-8 border-t border-hairline pt-7">
            <NavTree activeId={activeId} />
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-hairline pt-5">
          <LocalClock />
          <div className="font-mono text-[10px] text-paper-faint/50">
            &copy; 2026
          </div>
        </div>
      </nav>

      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex h-14 items-center justify-between border-b border-hairline bg-void px-5 lg:hidden">
        <Link href="#about" className="font-display text-lg tracking-tight text-paper">
          Villena
        </Link>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 items-center justify-center text-paper"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div className="h-14 lg:hidden" aria-hidden="true" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-30 flex flex-col justify-between bg-void px-7 pb-8 pt-24 lg:hidden"
          >
            <NavTree activeId={activeId} onNavigate={() => setOpen(false)} />
            <div className="border-t border-hairline pt-5">
              <LocalClock />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
