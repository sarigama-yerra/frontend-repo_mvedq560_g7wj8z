export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} DevRel Talent. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="text-white/60 hover:text-white">LinkedIn</a>
          <a href="#" className="text-white/60 hover:text-white">Twitter</a>
          <a href="#" className="text-white/60 hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}
