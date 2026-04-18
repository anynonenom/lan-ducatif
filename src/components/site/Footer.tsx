import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Camera, Share2 } from "lucide-react";
import { Doodle } from "./motion/Doodle";

export function Footer() {
  return (
    <footer className="relative bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="blob bg-magenta -top-40 -left-20 w-96 h-96" />
        <div className="blob bg-purple -bottom-40 -right-20 w-[28rem] h-[28rem]" />
      </div>
      <Doodle kind="star" color="oklch(0.79 0.16 78 / 0.4)" className="absolute top-20 right-1/4 w-10 h-10" />
      <Doodle kind="spark" color="oklch(0.62 0.24 358 / 0.4)" className="absolute bottom-32 left-1/3 w-8 h-8" spin />
      <Doodle kind="circle" color="oklch(0.58 0.10 187 / 0.3)" className="absolute top-1/2 right-10 w-14 h-14" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-16">
          <Link to="/" className="logo-style text-5xl md:text-7xl block leading-none">
            <span className="text-magenta-light">educa</span><span className="text-purple">zen</span><span className="text-teal">kids</span>
          </Link>
          <p className="mt-5 font-handwritten text-2xl text-white/70 max-w-xl">
            L'enseignement sur mesure — un cadre bienveillant où chaque enfant trouve sa place. ✦
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h4 className="font-label text-xs text-magenta-light mb-5">Navigation</h4>
            <ul className="space-y-3">
              {[
                ["/", "Accueil"],
                ["/a-propos", "À propos"],
                ["/activites", "Activités"],
                ["/blog", "Blog"],
                ["/boutique", "Boutique"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all text-sm font-semibold">{label}</Link>
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
              <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-3 hover:bg-magenta hover:scale-110 hover:-rotate-6 transition-all"><Camera className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-3 hover:bg-magenta hover:scale-110 hover:rotate-6 transition-all"><Share2 className="h-5 w-5" /></a>
            </div>
            <p className="mt-6 text-xs text-white/50 font-handwritten text-lg">Ouvert du lundi au vendredi<br/>8h00 — 18h00</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50 font-label">
          <span>© 2026 EducazenKids — Tous droits réservés</span>
          <span>Centre Éducatif & Psychosocial · Agadir</span>
        </div>
      </div>
      <div className="h-1.5 bg-gradient-brand" />
    </footer>
  );
}
