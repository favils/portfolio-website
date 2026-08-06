export default function PendingPanel({ label }) {
  return (
    <div className="relative flex min-h-[280px] flex-col items-center justify-center gap-4 border border-dashed border-hairline-bright bg-panel/40 px-8 py-16 text-center">
      <div className="rotate-[-3deg] border border-signal/50 px-3 py-1 font-mono text-[12px] text-signal">
        {"// awaiting spec"}
      </div>
      <p className="max-w-sm font-mono text-[12px] leading-relaxed text-paper-faint">
        {label}
      </p>
    </div>
  );
}
