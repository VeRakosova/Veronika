"use client";

import { Mail, Phone, Link, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800 text-white relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Naštartujme rast vášho projektu
          </h2>
          <p className="text-lg text-slate-400">
            Napíšte mi, aký problém s reklamou aktuálne riešite. Ozvem sa vám do 24 hodín a dohodneme si krátky online hovor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info (Left Column) */}
          <div className="space-y-8 lg:pr-8 flex flex-col justify-between">
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50">
              <h3 className="text-xl font-bold mb-8">Kontaktné údaje</h3>
              <ul className="space-y-8">
                <li>
                  <a href="mailto:ahoj@veronikarakosova.sk" className="flex items-center gap-5 text-slate-300 hover:text-emerald-400 transition-colors group">
                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-emerald-900/50 group-hover:scale-110 transition-all shadow-inner">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium">ahoj@veronikarakosova.sk</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+4219XXXXXXX" className="flex items-center gap-5 text-slate-300 hover:text-emerald-400 transition-colors group">
                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-emerald-900/50 group-hover:scale-110 transition-all shadow-inner">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium">+421 9XX XXX XXX</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-5 text-slate-300 hover:text-emerald-400 transition-colors group">
                    <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-emerald-900/50 group-hover:scale-110 transition-all shadow-inner">
                      <Link className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium">LinkedIn: Veronika Rákošová</span>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="text-sm text-slate-500 pl-4">
              <p>&copy; {new Date().getFullYear()} Veronika Rákošová. Všetky práva vyhradené.</p>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-2xl text-slate-800 shadow-emerald-900/10">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Napíšte mi</h3>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Meno a priezvisko</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
                  placeholder="Napr. Jozef Novák"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Váš e-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
                  placeholder="jozef@firma.sk"
                />
              </div>
              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-slate-700 mb-2">Webstránka / E-shop</label>
                <input 
                  type="text" 
                  id="website" 
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
                  placeholder="www.vas-web.sk"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Krátka správa</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors resize-none"
                  placeholder="S čím vám môžem pomôcť?"
                ></textarea>
              </div>
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-600/25 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Odoslať nezáväzný dopyt
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
