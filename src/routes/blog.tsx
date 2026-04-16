import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import art from "@/assets/activity-art.jpg";
import nature from "@/assets/activity-nature.jpg";
import montessori from "@/assets/activity-montessori.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — EducazenKids | Conseils & inspirations" },
      { name: "description", content: "Articles, conseils et ressources pour parents : éducation bienveillante, troubles d'apprentissage, créativité, parentalité." },
      { property: "og:title", content: "Blog EducazenKids" },
      { property: "og:description", content: "Inspiration et conseils pour accompagner votre enfant." },
    ],
  }),
  component: BlogPage,
});

const POSTS = [
  { img: blog1, cat: "Éducation", date: "10 Avril 2026", read: "5 min", title: "5 façons d'aider votre enfant à reprendre confiance en lui", excerpt: "La confiance en soi se construit jour après jour. Voici cinq leviers concrets pour accompagner votre enfant sur ce chemin essentiel.", color: "magenta" },
  { img: blog2, cat: "Famille", date: "02 Avril 2026", read: "4 min", title: "Lire avec son enfant : un rituel qui change tout", excerpt: "Au-delà des mots, lire ensemble crée un lien unique et stimule l'imagination. Quelques idées simples pour en faire un moment magique.", color: "purple" },
  { img: blog3, cat: "Créativité", date: "25 Mars 2026", read: "6 min", title: "L'art-thérapie pour les enfants atypiques", excerpt: "Pour les enfants HPI, TDAH ou TSA, l'art devient un langage. Comment l'art-thérapie libère et apaise.", color: "teal" },
  { img: art, cat: "Pédagogie", date: "18 Mars 2026", read: "7 min", title: "Montessori à la maison : par où commencer ?", excerpt: "Quelques principes simples pour intégrer la pédagogie Montessori dans votre quotidien familial.", color: "gold" },
  { img: nature, cat: "Bien-être", date: "10 Mars 2026", read: "5 min", title: "L'apprentissage en plein air : pourquoi c'est essentiel", excerpt: "La nature est un terrain d'apprentissage extraordinaire. Découvrez ses bienfaits insoupçonnés.", color: "magenta" },
  { img: montessori, cat: "Conseils", date: "01 Mars 2026", read: "4 min", title: "Comment gérer les écrans avec un enfant TDAH", excerpt: "Les écrans peuvent être un défi pour les enfants TDAH. Voici nos recommandations équilibrées.", color: "purple" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

function BlogPage() {
  const [featured, ...rest] = POSTS;
  return (
    <PageShell>
      <PageHero
        eyebrow="Le blog"
        title={<>Conseils, idées<br/><em className="not-italic text-purple">& inspirations</em></>}
        subtitle="Pour accompagner les parents et les éducateurs, nous partageons régulièrement des articles."
        accent="purple"
      />

      {/* Featured */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.article {...fadeUp} className="group grid md:grid-cols-2 gap-10 items-center cursor-pointer">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-glow">
              <img src={featured.img} alt={featured.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" width={1024} height={768} />
            </div>
            <div>
              <p className="section-num mb-5">À la une</p>
              <div className="flex items-center gap-4 mb-5 text-sm text-ink-light">
                <span className={`font-label text-[10px] px-3 py-1 rounded-full bg-${featured.color}-bg text-${featured.color}`}>{featured.cat}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.read}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight group-hover:text-magenta transition-colors">{featured.title}</h2>
              <p className="mt-6 font-editorial italic text-lg text-ink-light leading-relaxed">{featured.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-bold text-magenta group-hover:gap-3 transition-all">
                Lire l'article <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-canvas">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-extrabold mb-12">Tous les articles</motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((p, i) => (
              <motion.article key={p.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }} className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-glow transition-shadow">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={1024} height={640} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-xs text-ink-light">
                    <span className={`font-label px-2.5 py-1 rounded-full bg-${p.color}-bg text-${p.color}`}>{p.cat}</span>
                    <span>{p.date}</span>
                    <span>·</span>
                    <span>{p.read}</span>
                  </div>
                  <h3 className="text-lg font-extrabold leading-snug group-hover:text-magenta transition-colors">{p.title}</h3>
                  <p className="mt-3 text-sm text-ink-light leading-relaxed line-clamp-3">{p.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-soft">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl px-6 text-center">
          <p className="section-num mx-auto justify-center mb-4">Newsletter</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Restez <em className="not-italic text-magenta">inspirés</em>.
          </h2>
          <p className="font-editorial italic text-lg text-ink-light mb-10">
            Recevez nos meilleurs conseils directement dans votre boîte mail, une fois par mois.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" required placeholder="votre@email.com" className="flex-1 rounded-full bg-white px-6 py-4 border-2 border-transparent focus:border-magenta outline-none" />
            <button type="submit" className="rounded-full bg-gradient-hero px-6 py-4 font-bold text-white shadow-soft hover:scale-105 transition-transform">
              S'abonner
            </button>
          </form>
        </motion.div>
      </section>
    </PageShell>
  );
}
