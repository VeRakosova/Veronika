import { Briefcase, Users, LayoutGrid, CheckCircle } from "lucide-react";

const facts = [
  { text: "6+ rokov skúseností", icon: Briefcase },
  { text: "10+ spokojných klientov", icon: Users },
  { text: "3 hlavné platformy (Google Ads, Meta, Sklik)", icon: LayoutGrid },
  { text: "100% transparentnosť a dáta", icon: CheckCircle },
];

export default function SocialProof() {
  return (
    <div className="bg-white border-y border-slate-200/60 py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div key={index} className={`flex items-center gap-4 justify-center lg:justify-start hover:scale-105 transition-transform duration-300 ${index > 0 ? 'lg:pl-8 pt-6 sm:pt-0' : ''}`}>
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-semibold text-slate-700 leading-tight pr-2">{fact.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
