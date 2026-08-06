export default function BracketButton({ href, children, icon = "+", external = true }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-1.5 border border-hairline px-2.5 py-1.5 font-mono text-[10px] tracking-wide text-paper-dim transition-colors hover:border-signal hover:text-signal"
    >
      <span className="text-paper-faint group-hover:text-signal">
        [{icon}]
      </span>
      {children}
    </a>
  );
}
