export default function About() {
  return (
    <section id="about" className="bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">About</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">DevRel Talent</h2>
        <p className="mt-5 text-white/70 leading-relaxed">
          We help developer-focused companies craft clear product narratives, launch great docs, and build communities that last. Our approach blends strategy, content, and program design to deliver outcomes: adoption, contribution, and advocacy.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-white/60">What we do</p>
            <ul className="mt-2 text-sm list-disc list-inside text-white/80 space-y-1">
              <li>Developer marketing & storytelling</li>
              <li>Documentation & tutorials</li>
              <li>Community strategy & programs</li>
              <li>Launch planning & enablement</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-white/60">Outcomes</p>
            <ul className="mt-2 text-sm list-disc list-inside text-white/80 space-y-1">
              <li>Faster time-to-first-success</li>
              <li>Clearer product positioning</li>
              <li>Healthier contributor pipelines</li>
              <li>Higher adoption and retention</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
