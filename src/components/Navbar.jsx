import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLink = "text-sm uppercase tracking-widest text-white/80 hover:text-white transition-colors";

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-3">
          <div className="size-7 rounded-sm bg-white"></div>
          <span className="text-white font-semibold tracking-tight text-lg group-hover:opacity-90">DevRel Talent</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#work" className={navLink}>Work</a>
          <a href="#services" className={navLink}>Services</a>
          <a href="#about" className={navLink}>About</a>
          <a href="#contact" className="text-sm uppercase tracking-widest bg-white text-black px-4 py-2 rounded-sm font-medium hover:bg-white/90 transition">Contact</a>
        </nav>

        <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#work" className={navLink} onClick={() => setOpen(false)}>Work</a>
            <a href="#services" className={navLink} onClick={() => setOpen(false)}>Services</a>
            <a href="#about" className={navLink} onClick={() => setOpen(false)}>About</a>
            <a href="#contact" className="text-sm uppercase tracking-widest bg-white text-black px-4 py-2 rounded-sm font-medium" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
