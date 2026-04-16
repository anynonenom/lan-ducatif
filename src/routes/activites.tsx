import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ArrowRight, Clock, Users } from "lucide-react";
import art from "@/assets/activity-art.jpg";
import nature from "@/assets/activity-nature.jpg";
import montessori from "@/assets/activity-montessori.jpg";
import music from "@/assets/activity-music.jpg";

export const Route = createFileRoute("/activites")({
  head: () => ({
    meta: [
      { title: "Activités — EducazenKids | Ateliers & Pédagogies" },
      { name: "description", content: "Découvrez nos activités : Montessori, art-thérapie, éveil musical, découverte nature, formation parents et bien plus." },
      { property: "og:title", content: "Activités EducazenKids" },
      { property: "og:description", content: "Une palette d'ateliers pensés pour chaque enfant." },
    ],
  }),
  component: ActivitiesPage,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const ACTIVITIES = [
  { img: montessori, title: "Pédagogie Montessori", cat: "Maternelle", age: "3 — 6 ans", duration: "Hebdomadaire", desc: "Apprentissage par la manipulation et l'autonomie. Matériel sensoriel, vie pratique, langage et mathématiques.", color: "magenta" },
  { img: art, title: "Art-thérapie", cat: "Bien-être", age: "Tout âge", duration: "1h30/semaine", desc: "Exprimer ses émotions à travers la peinture, l'argile et la création. Un espace de liberté et de découverte de soi.", color: "purple" },
  { img: music, title: "Éveil musical", cat: "Créativité", age: "3 — 8 ans", duration: "1h/semaine", desc: "Découverte des instruments, du rythme et du chant. Stimuler la sensibilité musicale et la coordination.", color: "teal" },
  { img: nature, title: "Découverte nature", cat: "Plein air", age: "5 — 11 ans", duration: "Sortie mensuelle", desc: "Observer, expérimenter et comprendre le vivant. Un retour à l'essentiel par l'apprentissage en plein air.", color: "gold" },
];

const PROGRAMS = [
  { num: "01", title: "Soutien scolaire", desc: "Cours individuels ou en petit groupe avec enseignants spécialisés.", color: "magenta" },
  { num: "02", title: "Bilan psycho-éducatif", desc: "Évaluation complète pour comprendre les besoins de votre enfant.", color: "purple" },
  { num: "03", title: "Atelier DYS", desc: "Ateliers ciblés pour dyslexie, dyscalculie, dysorthographie.", color: "teal" },
  { num: "04", title: "Coaching parental", desc: "Accompagnement et formation pour les parents.", color: "gold" },
  { num: "05", title: "Stages vacances", desc: "Stages thématiques durant les vacances scolaires.", color: "magenta" },
  { num: "06", title: "Module D.I.E.C", desc: "Notre approche exclusive : Développement Intégré de l'Enfant.", color: "purple" },
];

function ActivitiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="01 — Nos activités"
        title={<>Apprendre <em className="not-italic text-teal">en s'épanouissant</em>.</>}
        subtitle="Une palette d'ateliers et de programmes pensés pour stimuler chaque facette de votre enfant."
        accent="teal"
      />

      {/* Activités principales */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10">
            {ACTIVITIES.map((a, i) => (
              <motion.article key={a.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="group rounded-3xl overflow-hidden bg-canvas shadow-soft hover:shadow-glow transition-shadow"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" width={1024} height={640} />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`font-label text-[10px] px-3 py-1 rounded-full bg-${a.color}-bg text-${a.color}`}>{a.cat}</span>
                    <span className="text-xs text-ink-light flex items-center gap-1"><Users className="h-3 w-3" /> {a.age}</span>
                    <span className="text-xs text-ink-light flex items-center gap-1"><Clock className="h-3 w-3" /> {a.duration}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold mb-3">{a.title}</h3>
                  <p className="text-ink-light leading-relaxed">{a.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-24 bg-canvas">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div {...fadeUp} className="max-w-2xl mb-16">
            <p className="section-num mb-4" style={{ color: "var(--purple)" }}>02 — Programmes complémentaires</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Au-delà des cours, un accompagnement complet.</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden shadow-soft">
            {PROGRAMS.map((p, i) => (
              <motion.div key={p.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="bg-white p-8 hover:bg-canvas transition-colors group"
              >
                <p className={`font-label text-xs text-${p.color} mb-4`}>{p.num}</p>
                <h3 className="text-xl font-extrabold mb-3 group-hover:text-magenta transition-colors">{p.title}</h3>
                <p className="text-sm text-ink-light leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-soft">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Une activité qui vous intéresse ?
          </h2>
          <p className="font-editorial italic text-xl text-ink-light mb-10">
            Contactez-nous pour planifier une visite ou un essai gratuit.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-8 py-4 font-bold text-white shadow-glow hover:scale-105 transition-transform">
            Prendre rendez-vous <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </section>
    </PageShell>
  );
}
