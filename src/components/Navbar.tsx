

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/50 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-slate-900 group">
          Veronika <span className="text-emerald-600 transition-colors group-hover:text-emerald-500">Rákošová</span>
        </a>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-emerald-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm">Služby</a>
          <a href="#about" className="hover:text-emerald-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm">O mne</a>
          <a href="#contact" className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2">
            Kontakt
          </a>
        </div>
      </div>
    </nav>
  );
}
