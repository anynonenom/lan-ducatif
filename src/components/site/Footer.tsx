import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="blob bg-magenta -top-40 -left-20 w-96 h-96" />
        <div className="blob bg-purple -bottom-40 -right-20 w-[28rem] h-[28rem]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="EducazenKids" className="h-16 w-auto bg-white rounded-2xl p-2" width={64} height={64} />
            <p className="mt-5 font-editorial italic text-white/70 leading-relaxed">
              L'enseignement sur mesure — un cadre bienveillant où chaque enfant trouve sa place.
            </p>
          </div>
          <div>
            <h4 className="font-label text-xs text-magenta-light mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                ["/", "Accueil"],
                ["/a-propos", "À propos"],
                ["/activites", "Activités"],
                ["/blog", "Blog"],
                ["/boutique", "Boutique"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/70 hover:text-white transition-colors text-sm">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-label text-xs text-magenta-light mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-magenta-light" /><span>06 60 68 69 93<br/>07 66 68 27 25</span></li>
              <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-magenta-light" /><span>contact@educazenkids.ma</span></li>
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-magenta-light" /><span>Agadir, Maroc</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label text-xs text-magenta-light mb-5">Suivez-nous</h4>
            <div className="flex gap-3">
              <a href="#" className="rounded-full bg-white/10 p-3 hover:bg-magenta transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="rounded-full bg-white/10 p-3 hover:bg-magenta transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
            <p className="mt-6 text-xs text-white/50 font-editorial italic">Ouvert du lundi au vendredi<br/>8h00 — 18h00</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50 font-label">
          <span>© 2026 EducazenKids — Tous droits réservés</span>
          <span>Centre Éducatif & Psychosocial · Agadir</span>
        </div>
      </div>
      <div className="h-1 bg-gradient-brand" />
    </footer>
  );
}
