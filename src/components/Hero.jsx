import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white pt-28 md:pt-32">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10 py-8">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-widest uppercase text-white/70">
              Futuristic • Minimal • Monochrome
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Super‑sharp black & white design for modern brands
            </h1>
            <p className="mt-5 text-white/70 max-w-xl">
              We craft high‑contrast, high‑clarity digital experiences. Clean lines, strong grids, and a cinematic feel that lets your story stand out.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#work" className="uppercase tracking-widest text-sm bg-white text-black px-5 py-3 rounded-sm font-semibold hover:bg-white/90 transition">See work</a>
              <a href="#contact" className="uppercase tracking-widest text-sm px-5 py-3 rounded-sm border border-white/20 hover:border-white/40 transition">Get in touch</a>
            </div>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
