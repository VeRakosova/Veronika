import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-100 to-emerald-50 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.15]">
          Neklikajte naprázdno. <br className="hidden sm:block" />
          <span className="text-emerald-600">Zmením vaše PPC kampane</span> na stabilný zdroj príjmov.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Som Veronika Rákošová, freelance PPC špecialistka. Už viac ako 6 rokov pomáham firmám rásť. Zastrešujem kompletnú správu výkonnostných kampaní na Google, Mete a Skliku – od hĺbkového auditu až po zrozumiteľný reporting.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#contact" className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
            Chcem nezáväznú konzultáciu
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="w-full sm:w-auto px-8 py-4 text-slate-700 bg-white border border-slate-200 rounded-full font-medium hover:bg-slate-50 hover:border-slate-300 transition-all hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2">
            Zistiť viac o mojich službách
          </a>
        </div>
      </div>
    </section>
  );
}
