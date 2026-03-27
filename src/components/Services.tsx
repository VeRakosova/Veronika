import { Search, MousePointerClick, Share2, TrendingUp } from "lucide-react";

const services = [
  {
    title: "PPC Audit kampaní",
    text: "Pália vaše aktuálne kampane peniaze? Urobím hĺbkovú kontrolu vašich účtov, odhalím slabé miesta a navrhnem konkrétne vylepšenia, ktoré prinesú okamžité výsledky.",
    icon: Search,
  },
  {
    title: "Správa Google Ads & Sklik",
    text: "Zasiahnite ľudí presne v momente, keď hľadajú vaše produkty alebo služby. Nastavím a zoptimalizujem kampane vo vyhľadávaní, nákupoch (PMax) aj v obsahovej sieti.",
    icon: MousePointerClick,
  },
  {
    title: "Meta Ads",
    text: "Vytvorím výkonnostné kampane na Facebooku a Instagrame, ktoré nielen budujú vašu značku, ale predovšetkým predávajú a privádzajú relevantné leady.",
    icon: Share2,
  },
  {
    title: "Zrozumiteľný Reporting",
    text: "Žiadne zložité tabuľky. Na pravidelnej báze vám ukážem prehľadné reporty. Presne uvidíte, koľko vás stála reklama a aký zisk priniesla.",
    icon: TrendingUp,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Kompletné zastrešenie vašej reklamy od A po Z
          </h2>
          <p className="text-lg text-slate-600">
            Nemusíte hľadať viacerých freelancerov. Postarám sa o celý proces tak, aby vaše investície do reklamy dávali zmysel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group p-8 bg-white rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-32 h-32" />
                </div>
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{service.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
