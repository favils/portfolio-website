export default function WindowFrame({ path, children }) {
  return (
    <div className="border border-hairline bg-panel">
      <div className="flex items-center justify-between border-b border-hairline px-2.5 py-1.5">
        <span className="truncate font-mono text-[9px] tracking-wide text-paper-faint">
          {path}
        </span>
        <span className="flex shrink-0 items-center gap-1.5 pl-2">
          <span className="h-1.5 w-1.5 rounded-full border border-hairline-bright" />
          <span className="h-1.5 w-1.5 rounded-full border border-hairline-bright" />
        </span>
      </div>
      {children}
    </div>
  );
}
