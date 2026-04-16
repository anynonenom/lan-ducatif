import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Heart, Sparkles, Target, Brain, Users, BookOpen, Palette, GraduationCap } from "lucide-react";
import classroom from "@/assets/about-classroom.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — EducazenKids | Notre histoire" },
      { name: "description", content: "Découvrez la mission, la vision et l'équipe pluridisciplinaire d'EducazenKids — centre éducatif et psychosocial à Agadir." },
      { property: "og:title", content: "À propos d'EducazenKids" },
      { property: "og:description", content: "Notre mission : permettre à chaque enfant de reprendre goût à l'apprentissage." },
    ],
  }),
  component: AboutPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="01 — Notre histoire"
        title={<>L'<em className="not-italic text-magenta">enseignement</em><br/>sur mesure.</>}
        subtitle="Un centre où chaque enfant — quel que soit son profil — trouve sa place et s'épanouit."
        accent="magenta"
      />

      {/* Mission / Vision */}
      <section className="py-24 bg-canvas">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden shadow-soft">
          {[
            { letter: "M", label: "Notre Mission", text: "Permettre à chaque enfant de reprendre goût à l'apprentissage, faire émerger ses compétences et vivre une expérience éducative unique — dans un cadre inclusif et personnalisé.", bg: "bg-magenta-bg", color: "text-magenta" },
            { letter: "V", label: "Notre Vision", text: "Devenir la référence de l'éducation inclusive au Maroc — un modèle où chaque enfant, quelles que soient ses spécificités, trouve sa place et s'épanouit.", bg: "bg-lavender", color: "text-purple" },
          ].map((m, i) => (
            <motion.div key={m.letter} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className={`relative overflow-hidden p-12 ${m.bg}`}>
              <span className={`absolute -bottom-10 -right-4 font-display font-black text-[200px] leading-none opacity-[0.06] ${m.color}`}>
                {m.letter}
              </span>
              <p className={`font-label text-xs ${m.color} mb-4`}>{m.label}</p>
              <p className="font-editorial italic text-2xl text-ink leading-relaxed relative z-10">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Histoire avec image */}
      <section className="py-24 bg-warm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-glow">
              <img src={classroom} alt="Notre classe" loading="lazy" className="w-full h-full object-cover" width={1280} height={1024} />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-6 shadow-soft max-w-xs">
              <p className="font-display font-extrabold text-4xl text-magenta">2020</p>
              <p className="text-sm text-ink-light">Année de fondation à Agadir</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
            <p className="section-num mb-4">02 — Notre histoire</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">Né d'une conviction profonde.</h2>
            <div className="space-y-5 text-ink-light leading-relaxed">
              <p>EducazenKids est né de la conviction qu'aucun enfant ne devrait être laissé pour compte. Que ce soit un enfant à haut potentiel, atteint de TDAH, de troubles DYS, du spectre autistique, ou simplement un enfant qui a perdu confiance — chacun mérite une approche pensée pour lui.</p>
              <p>Notre équipe pluridisciplinaire — enseignants spécialisés, psychologues, art-thérapeutes, paramédicaux — travaille main dans la main pour construire un Plan d'Accompagnement Personnalisé adapté à chaque élève.</p>
              <p>Au cœur de notre approche : les méthodes Montessori, Freinet et Steiner, enrichies par notre module exclusif <strong className="text-magenta">D.I.E.C</strong> qui combine pédagogie moderne, art-thérapie et accompagnement psychosocial.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-num mx-auto justify-center mb-4">03 — Nos valeurs</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Quatre piliers, une philosophie.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: "Inclusivité", desc: "Chaque enfant accueilli avec sa singularité.", color: "magenta" },
              { icon: Heart, title: "Bienveillance", desc: "Un cadre chaleureux et sécurisant.", color: "purple" },
              { icon: Target, title: "Personnalisation", desc: "Un PAP unique pour chaque élève.", color: "teal" },
              { icon: Brain, title: "Innovation", desc: "Module D.I.E.C et équipe pluridisciplinaire.", color: "gold" },
            ].map((v, i) => (
              <motion.div key={v.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-3xl bg-${v.color}-bg p-8 overflow-hidden`}
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-soft mb-5`}>
                  <v.icon className={`h-7 w-7 text-${v.color}`} />
                </div>
                <h3 className="text-xl font-extrabold mb-2">{v.title}</h3>
                <p className="text-sm text-ink-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Axes / Pôles */}
      <section className="py-24 bg-teal-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...fadeUp} className="mb-16">
            <p className="section-num mb-4" style={{ color: "var(--teal)" }}>04 — Nos pôles d'action</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl">Trois pôles, un accompagnement complet.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: BookOpen, title: "Apprentissage Scolaire", desc: "De la maternelle au collège — Montessori, Freinet, Steiner adaptés.", color: "magenta" },
              { icon: Users, title: "Formation Parents", desc: "Ateliers et formations — la réussite se construit ensemble.", color: "purple" },
              { icon: Heart, title: "Pôle Psychosocial", desc: "Équipe pluridisciplinaire et paramédicale dédiée.", color: "teal" },
            ].map((p, i) => (
              <motion.div key={p.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-10 shadow-soft hover:-translate-y-1 transition-transform"
              >
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-${p.color} text-white mb-6`}>
                  <p.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-extrabold mb-3">{p.title}</h3>
                <p className="text-ink-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-num mx-auto justify-center mb-4">05 — Notre équipe</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Des professionnels passionnés.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: team1, name: "Salma El Amrani", role: "Directrice pédagogique" },
              { img: team2, name: "Karim Bensouda", role: "Psychologue clinicien" },
              { img: team3, name: "Leïla Mansouri", role: "Art-thérapeute" },
            ].map((p, i) => (
              <motion.div key={p.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-5 shadow-soft">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" width={768} height={896} />
                </div>
                <h3 className="text-xl font-extrabold">{p.name}</h3>
                <p className="text-magenta font-label text-xs mt-2">{p.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["+500", "Familles accompagnées"],
            ["8", "Années d'expérience"],
            ["15+", "Professionnels"],
            ["98%", "Parents satisfaits"],
          ].map(([n, l], i) => (
            <motion.div key={l} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
              <p className="font-display font-black text-5xl md:text-7xl">{n}</p>
              <p className="font-editorial italic text-white/80 mt-2">{l}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
