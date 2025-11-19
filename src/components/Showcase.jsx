export default function Showcase() {
  const items = [
    {
      title: "High‑contrast visual systems",
      desc: "Bold typography, strict hierarchy, and minimal palettes that read instantly.",
    },
    {
      title: "Motion with intent",
      desc: "Subtle, purposeful micro‑interactions—no fluff, only clarity.",
    },
    {
      title: "Performance first",
      desc: "Fast loads, crisp visuals, and accessible experiences across devices.",
    },
  ];

  return (
    <section id="services" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it) => (
            <div key={it.title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
              <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:opacity-90">{it.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
