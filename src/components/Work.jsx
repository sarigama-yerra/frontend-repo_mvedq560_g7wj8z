export default function Work() {
  const projects = [
    {
      title: "DevRel Playbook",
      tag: "Strategy",
      desc: "End-to-end developer relations strategy with measurable community impact.",
      image: null,
    },
    {
      title: "API Launch System",
      tag: "Go-to-market",
      desc: "Content, tutorials, and partner enablement for a clean API launch.",
      image: null,
    },
    {
      title: "Community OS",
      tag: "Community",
      desc: "Framework for programs, rituals, and contributor pathways.",
      image: null,
    },
    {
      title: "Docs Clarity",
      tag: "DX",
      desc: "Information architecture and examples that reduce time-to-first-success.",
      image: null,
    },
  ];

  return (
    <section id="work" className="bg-black text-white scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">Selected work</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">Case studies</h2>
          </div>
          <a href="#contact" className="hidden md:inline-block text-sm uppercase tracking-widest bg-white text-black px-4 py-2 rounded-sm font-medium hover:bg-white/90 transition">Start a project</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="aspect-[16/9] w-full bg-gradient-to-br from-white/10 to-transparent" />
              <div className="p-6">
                <div className="mb-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
                  <span className="px-2 py-0.5 rounded-sm bg-white/10 text-white/70">{p.tag}</span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight group-hover:opacity-90">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60">{p.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
