import { ArrowUpRight } from "lucide-react";

export default function AnnotatedLink({ href, children, external = true }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-1 font-mono text-[11px] tracking-wide text-paper-dim transition-colors hover:text-signal"
    >
      {children}
      <ArrowUpRight
        size={12}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
