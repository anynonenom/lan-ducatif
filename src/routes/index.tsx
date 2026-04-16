import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles, Heart, Target, Brain, ArrowRight, BookOpen, Users, Palette,
  Star, Quote, CheckCircle2, Phone, Calendar,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import hero from "@/assets/hero-children.jpg";
import classroom from "@/assets/about-classroom.jpg";
import poster from "@/assets/inscriptions-poster.jpg";
import activityArt from "@/assets/activity-art.jpg";
import activityNature from "@/assets/activity-nature.jpg";
import activityMontessori from "@/assets/activity-montessori.jpg";
import activityMusic from "@/assets/activity-music.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EducazenKids — L'enseignement sur mesure | Agadir" },
      { name: "description", content: "Centre éducatif et psychosocial à Agadir. Accompagnement personnalisé pour enfants typiques, atypiques, HPI, TDAH, DYS, TSA. Inscriptions ouvertes 2026-2027." },
      { property: "og:title", content: "EducazenKids — L'enseignement sur mesure" },
      { property: "og:description", content: "Maternelle & Primaire — Méthodes Montessori, Freinet, Steiner adaptées." },
    ],
  }),
  component: HomePage,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function HomePage() {
  return (
    <PageShell>
      {/* 1. HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-magenta-bg via-rose to-lavender" />
        <div className="blob bg-magenta/30 -top-32 -right-20 w-[36rem] h-[36rem] animate-float-slow" />
        <div className="blob bg-purple/25 top-1/2 -left-32 w-[28rem] h-[28rem] animate-float-slow" style={{ animationDelay: "4s" }} />
        <div className="blob bg-teal/20 bottom-10 right-1/3 w-72 h-72 animate-float-slow" style={{ animationDelay: "2s" }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 z-10">
            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="section-num mb-6">
              Inscriptions Ouvertes 2026 — 2027
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-ink"
            >
              Offrez à votre enfant un{" "}
              <span className="relative inline-block">
                <span className="text-gradient-brand">avenir</span>
                <motion.svg
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 1.2 }}
                  viewBox="0 0 200 12" className="absolute -bottom-2 left-0 w-full h-3"
                >
                  <motion.path d="M2 8 Q 100 -2 198 6" stroke="oklch(0.52 0.21 357)" strokeWidth="3" fill="none" strokeLinecap="round" />
                </motion.svg>
              </span>
              <br/>plein de réussite.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="mt-8 font-editorial italic text-lg md:text-xl text-ink-light max-w-xl leading-relaxed"
            >
              Un enseignement sur mesure pour enfants typiques, atypiques, avec difficultés ou troubles d'apprentissage.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-hero px-8 py-4 font-bold text-white shadow-glow transition-all hover:shadow-soft hover:-translate-y-0.5">
                S'inscrire maintenant
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/a-propos" className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 bg-white/60 backdrop-blur px-8 py-4 font-bold text-ink hover:border-magenta hover:text-magenta transition-colors">
                Découvrir le centre
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
            >
              {[
                ["Personnalisé", "Plan adapté à chaque enfant"],
                ["Bienveillant", "Cadre chaleureux et sécurisant"],
                ["Inclusif", "Pour tous les profils"],
              ].map(([t, d]) => (
                <div key={t}>
                  <p className="font-display font-extrabold text-ink">{t}</p>
                  <p className="text-xs text-ink-light">{d}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-glow">
              <img src={hero} alt="Enfants joyeux peignant avec leurs mains" className="absolute inset-0 w-full h-full object-cover" width={1536} height={1280} />
              <div className="absolute inset-0 bg-gradient-to-t from-magenta/30 to-transparent" />
            </div>
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
              className="absolute -left-6 top-12 bg-white rounded-2xl shadow-soft p-4 flex items-center gap-3 max-w-[220px]"
            >
              <div className="rounded-xl bg-magenta-bg p-2.5"><Heart className="h-5 w-5 text-magenta" /></div>
              <div>
                <p className="text-xs font-label text-magenta">Bienveillance</p>
                <p className="text-sm font-extrabold text-ink">+500 familles</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
              className="absolute -right-4 bottom-16 bg-white rounded-2xl shadow-soft p-4 max-w-[200px]"
            >
              <div className="flex gap-0.5 mb-1">
                {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="text-xs text-ink-light italic font-editorial">"Mon enfant a retrouvé le goût d'apprendre."</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. MARQUEE */}
      <section className="bg-gradient-to-r from-magenta-bg via-lavender to-teal-bg py-6 overflow-hidden border-y border-border">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12 shrink-0">
              {["Montessori", "Freinet", "Steiner", "HPI", "TDAH", "DYS", "TSA", "Art-thérapie", "Maternelle", "Primaire"].map((w) => (
                <span key={w} className="font-display font-extrabold text-3xl md:text-4xl text-ink/20">
                  {w} <span className="text-magenta/40">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 3. PILIERS */}
      <section className="relative py-28 bg-canvas">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="section-num mb-4">01 — Notre identité</p>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              L'<em className="not-italic text-magenta">âme</em> d'EducazenKids
            </h2>
            <p className="mt-6 font-editorial italic text-lg text-ink-light">
              Quatre piliers qui guident chacune de nos actions, chaque jour.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden shadow-soft">
            {[
              { icon: Sparkles, color: "magenta", title: "Inclusivité", desc: "Chaque enfant accueilli avec sa singularité — la diversité est notre richesse." },
              { icon: Heart, color: "purple", title: "Bienveillance", desc: "Un cadre chaleureux où l'enfant reprend goût à l'apprentissage." },
              { icon: Target, color: "teal", title: "Personnalisation", desc: "Plan d'Accompagnement Personnalisé (PAP) pour chaque élève." },
              { icon: Brain, color: "gold", title: "Innovation", desc: "Module D.I.E.C alliant pédagogie moderne et art-thérapie." },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className={`group relative bg-white p-10 hover:bg-${p.color}-bg transition-colors duration-500`}
              >
                <div className={`absolute top-0 left-0 h-1 w-12 bg-${p.color} group-hover:w-full transition-all duration-700`} />
                <p.icon className={`h-10 w-10 text-${p.color} mb-6`} />
                <h3 className="text-xl font-extrabold mb-3">{p.title}</h3>
                <p className="text-sm text-ink-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT SPLIT */}
      <section className="relative py-28 bg-warm overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="relative aspect-[5/6] rounded-[2.5rem] overflow-hidden shadow-glow">
              <img src={classroom} alt="Salle de classe Montessori" loading="lazy" className="absolute inset-0 w-full h-full object-cover" width={1280} height={1024} />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gradient-hero rounded-3xl p-8 text-white shadow-glow max-w-xs">
              <p className="font-label text-xs opacity-80 mb-2">Depuis 2020</p>
              <p className="font-display font-extrabold text-3xl leading-tight">+8 années d'expérience pédagogique</p>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gold/30 animate-spin-slow flex items-center justify-center">
              <span className="font-label text-xs text-ink rotate-12">★ Agadir ★</span>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
            <p className="section-num mb-4" style={{ color: "var(--purple)" }}>02 — À propos</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1]">
              Un centre où chaque enfant <em className="not-italic text-purple">trouve sa place</em>.
            </h2>
            <p className="mt-6 text-lg text-ink-light leading-relaxed">
              EducazenKids est un centre éducatif et psychosocial pensé pour accompagner les enfants dans toute leur diversité — normo-pensants, HPI, TDAH, DYS, TSA — avec une équipe pluridisciplinaire qui réunit pédagogie moderne, accompagnement psychosocial et art-thérapie.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Méthodes Montessori, Freinet et Steiner adaptées",
                "Plan d'Accompagnement Personnalisé pour chaque élève",
                "Équipe pluridisciplinaire et paramédicale",
                "Module D.I.E.C unique au Maroc",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-ink">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/a-propos" className="mt-10 inline-flex items-center gap-2 font-bold text-purple hover:gap-3 transition-all">
              En savoir plus sur notre approche <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. ACTIVITÉS */}
      <section className="relative py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="section-num mb-4" style={{ color: "var(--teal)" }}>03 — Nos activités</p>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Apprendre <em className="not-italic text-teal">en s'épanouissant</em>.
              </h2>
            </div>
            <Link to="/activites" className="inline-flex items-center gap-2 font-bold text-teal hover:gap-3 transition-all">
              Toutes les activités <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: activityMontessori, title: "Pédagogie Montessori", tag: "Maternelle", color: "magenta" },
              { img: activityArt, title: "Art-thérapie", tag: "Tout âge", color: "purple" },
              { img: activityMusic, title: "Éveil musical", tag: "3-8 ans", color: "teal" },
              { img: activityNature, title: "Découverte nature", tag: "Plein air", color: "gold" },
            ].map((a, i) => (
              <motion.div
                key={a.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden bg-canvas shadow-soft cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={1024} height={1024} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <span className={`inline-block font-label text-[10px] px-3 py-1 rounded-full bg-${a.color} mb-3`}>{a.tag}</span>
                  <h3 className="text-2xl font-extrabold leading-tight">{a.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INSCRIPTIONS BANNER */}
      <section className="relative py-28 bg-gradient-to-br from-magenta via-magenta-light to-purple overflow-hidden">
        <div className="blob bg-white/10 top-10 left-10 w-72 h-72" />
        <div className="blob bg-gold/20 bottom-10 right-10 w-96 h-96" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp} className="text-white">
            <p className="font-label text-xs text-white/70 mb-4">04 — Rentrée 2026 — 2027</p>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.95]">
              Inscriptions<br/>
              <span className="font-editorial italic font-normal">Ouvertes</span>
            </h2>
            <p className="mt-6 font-editorial italic text-xl text-white/90 max-w-lg">
              Maternelle & Primaire — Réservez la place de votre enfant pour la prochaine rentrée scolaire.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-magenta hover:scale-105 transition-transform shadow-glow">
                <Calendar className="h-5 w-5" /> Demander un rendez-vous
              </Link>
              <a href="tel:0660686993" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 font-bold text-white hover:bg-white/10 transition-colors">
                <Phone className="h-5 w-5" /> 06 60 68 69 93
              </a>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="relative">
            <div className="relative max-w-md mx-auto rounded-3xl overflow-hidden shadow-glow rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src={poster} alt="Affiche inscriptions ouvertes" loading="lazy" className="w-full h-auto" width={640} height={853} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. BLOG + TÉMOIGNAGES (combiné) */}
      <section className="py-28 bg-canvas">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="section-num justify-center mx-auto mb-4">05 — Du blog</p>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Conseils & <em className="not-italic text-gradient-brand">inspiration</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { img: blog1, cat: "Éducation", title: "5 façons d'aider votre enfant à reprendre confiance", date: "10 Avril 2026" },
              { img: blog2, cat: "Famille", title: "Lire avec son enfant : un rituel qui change tout", date: "02 Avril 2026" },
              { img: blog3, cat: "Créativité", title: "L'art-thérapie pour les enfants atypiques", date: "25 Mars 2026" },
            ].map((b, i) => (
              <motion.article
                key={b.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 shadow-soft">
                  <img src={b.img} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={1024} height={768} />
                </div>
                <p className="font-label text-xs text-magenta mb-3">{b.cat} · {b.date}</p>
                <h3 className="text-xl font-extrabold leading-snug group-hover:text-magenta transition-colors">{b.title}</h3>
              </motion.article>
            ))}
          </div>

          <motion.div {...fadeUp} className="rounded-3xl bg-gradient-to-br from-purple-bg via-lavender to-magenta-bg p-12 md:p-16 relative overflow-hidden">
            <Quote className="absolute top-8 right-8 h-24 w-24 text-magenta/15" />
            <p className="section-num mb-6">Témoignage</p>
            <blockquote className="font-editorial italic text-2xl md:text-4xl text-ink leading-tight max-w-3xl">
              "Depuis qu'elle est à EducazenKids, ma fille a retrouvé son sourire et le plaisir d'aller à l'école. L'équipe est exceptionnelle de bienveillance."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gradient-hero flex items-center justify-center text-white font-extrabold text-xl">
                F
              </div>
              <div>
                <p className="font-extrabold text-ink">Fatima B.</p>
                <p className="text-sm text-ink-light">Maman de Lina, 7 ans</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
