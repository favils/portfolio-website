function Corner({ className }) {
  return (
    <span
      aria-hidden="true"
      className={`tick-corner border-t border-l ${className}`}
    />
  );
}

export default function BlueprintGrid() {
  return (
    <>
      <div className="blueprint-grid" aria-hidden="true" />
      <Corner className="top-3 left-3" />
      <Corner className="top-3 right-3 rotate-90" />
      <Corner className="bottom-3 left-3 -rotate-90" />
      <Corner className="bottom-3 right-3 rotate-180" />
    </>
  );
}
