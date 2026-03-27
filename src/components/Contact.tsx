"use client";

import { Mail, Phone, Link, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setMessage("Vaša správa bola úspešne odoslaná. Ozvem sa vám do 24 hodín.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setMessage(result.message || "Pri odosielaní nastala chyba. Skúste to prosím neskôr.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Nastala neočakávaná chyba. Skúste to prosím neskôr.");
    }
  }

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

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-2xl text-slate-800 shadow-emerald-900/10">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Napíšte mi</h3>
            
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Správa odoslaná!</h4>
                <p className="text-slate-600 mb-8 max-w-xs">{message}</p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-8 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
                >
                  Poslať ďalšiu správu
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="a9c9de9d-d962-40cf-bf29-ce6b30310e8e" />
                <input type="hidden" name="subject" value="Nový dopyt z webu" />
                <input type="hidden" name="from_name" value="Veronika Rákošová Web" />
                
                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-start gap-3 mb-6">
                    <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                    <p className="text-sm font-medium">{message}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Meno a priezvisko</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
                    placeholder="Napr. Jozef Novák"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Váš e-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
                    placeholder="jozef@firma.sk"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-slate-700 mb-2">Webstránka / E-shop</label>
                  <input 
                    type="text" 
                    id="website" 
                    name="website"
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
                    placeholder="www.vas-web.sk"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Krátka správa</label>
                  <textarea 
                    id="message" 
                    name="message"
                    required
                    rows={4}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors resize-none"
                    placeholder="S čím vám môžem pomôcť?"
                  ></textarea>
                </div>
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className={`w-full flex items-center justify-center gap-2 py-4 px-6 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-600/25 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`}
                  >
                    {status === "submitting" ? "Odosielam..." : "Odoslať nezáväzný dopyt"}
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-16 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Veronika Rákošová. Všetky práva vyhradené.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
