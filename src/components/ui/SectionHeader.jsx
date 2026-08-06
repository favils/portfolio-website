export default function SectionHeader({ title, note }) {
  return (
    <div className="mb-14">
      <h1 className="font-display lowercase text-5xl tracking-tight text-paper sm:text-6xl">
        <span className="mr-3 font-mono text-3xl font-normal text-signal sm:text-4xl">
          //
        </span>
        {title}
      </h1>
      {note && (
        <div className="mt-4 font-mono text-[12px] leading-relaxed text-paper-faint">
          {"{ "}
          {note}
          {" }"}
        </div>
      )}
    </div>
  );
}
