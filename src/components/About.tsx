import { User } from "lucide-react";

const processSteps = [
  "Zoznámenie",
  "Audit & Stratégia",
  "Realizácia",
  "Optimalizácia",
  "Reporting"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Photo Placeholder */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl relative group">
              <div className="absolute inset-0 bg-emerald-600/5 group-hover:bg-transparent transition-colors z-10"></div>
              {/* Fallback pattern / generic silhouette */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-300">
                <User className="w-32 h-32 mb-4 opacity-50" />
                <span className="text-sm font-medium tracking-widest uppercase">Miesto pre fotku</span>
              </div>
            </div>
            
            {/* Decorative blob or shape behind photo */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
              Prečo zveriť kampane práve mne?
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Ahoj, som Veronika. Za 6 rokov v e-commerce a online marketingu som si prešla desiatkami reklamných účtov. Riadim sa pravidlom, že dobrý PPC špecialista nie je len &quot;nastavovač reklám&quot;, ale biznis partner.
              </p>
              <p>
                Nenastavujem kampane naslepo. Zaujímajú ma vaše marže, vaša cieľová skupina a váš obchodný cieľ. Ku každému klientovi pristupujem individuálne.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Môj proces práce:</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {processSteps.map((step, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <span className="font-medium text-slate-800">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
