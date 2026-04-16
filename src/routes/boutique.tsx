import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ShoppingBag, Search } from "lucide-react";
import blocks from "@/assets/product-blocks.jpg";
import books from "@/assets/product-books.jpg";
import artSet from "@/assets/product-art.jpg";
import alphabet from "@/assets/product-alphabet.jpg";
import sensory from "@/assets/product-sensory.jpg";
import puzzle from "@/assets/product-puzzle.jpg";
import school from "@/assets/product-school.jpg";

export const Route = createFileRoute("/boutique")({
  head: () => ({
    meta: [
      { title: "Boutique — EducazenKids | Matériel pédagogique" },
      { name: "description", content: "Découvrez notre sélection de jeux éducatifs, livres, matériel Montessori et fournitures scolaires pour enfants." },
      { property: "og:title", content: "Boutique EducazenKids" },
      { property: "og:description", content: "Matériel pédagogique soigneusement sélectionné par notre équipe." },
    ],
  }),
  component: ShopPage,
});

const CATEGORIES = ["Tous", "Montessori", "Livres", "Art & Créativité", "Sensoriel", "Fournitures"] as const;

const PRODUCTS = [
  { img: blocks, name: "Blocs de construction en bois", price: "180 MAD", cat: "Montessori", color: "magenta" },
  { img: alphabet, name: "Lettres & chiffres en bois", price: "220 MAD", cat: "Montessori", color: "teal" },
  { img: puzzle, name: "Puzzle carte du monde", price: "320 MAD", cat: "Montessori", color: "purple" },
  { img: books, name: "Collection de livres jeunesse", price: "150 MAD", cat: "Livres", color: "magenta" },
  { img: artSet, name: "Set crayons & aquarelle", price: "95 MAD", cat: "Art & Créativité", color: "purple" },
  { img: sensory, name: "Balles sensorielles texturées", price: "75 MAD", cat: "Sensoriel", color: "gold" },
  { img: school, name: "Pack rentrée scolaire", price: "350 MAD", cat: "Fournitures", color: "teal" },
  { img: blocks, name: "Cubes de tri couleurs", price: "140 MAD", cat: "Montessori", color: "purple" },
  { img: books, name: "Livre sensoriel — éveil", price: "85 MAD", cat: "Livres", color: "teal" },
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

function ShopPage() {
  const [active, setActive] = useState<string>("Tous");
  const [query, setQuery] = useState("");

  const filtered = PRODUCTS.filter((p) =>
    (active === "Tous" || p.cat === active) &&
    (query === "" || p.name.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <PageShell>
      <PageHero
        eyebrow="La boutique"
        title={<>Matériel <em className="not-italic text-gold">pédagogique</em></>}
        subtitle="Une sélection soigneuse de jeux, livres et fournitures, choisis et testés par notre équipe."
        accent="gold"
      />

      {/* Filters */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-xl border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  active === c
                    ? "bg-gradient-hero text-white shadow-soft"
                    : "bg-canvas text-ink hover:bg-magenta-bg hover:text-magenta"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-light" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher…"
              className="w-full rounded-full bg-canvas pl-11 pr-4 py-2.5 text-sm border-2 border-transparent focus:border-magenta outline-none"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-canvas">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {filtered.length === 0 ? (
            <p className="text-center font-editorial italic text-ink-light py-20">Aucun produit ne correspond.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.name + i}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: (i % 8) * 0.05 }}
                  className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-glow transition-shadow"
                >
                  <div className="aspect-square overflow-hidden bg-canvas">
                    <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={896} height={896} />
                  </div>
                  <div className="p-5">
                    <span className={`inline-block font-label text-[10px] px-2.5 py-1 rounded-full bg-${p.color}-bg text-${p.color} mb-3`}>{p.cat}</span>
                    <h3 className="font-extrabold leading-snug group-hover:text-magenta transition-colors">{p.name}</h3>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-display font-extrabold text-xl text-ink">{p.price}</span>
                      <button className="rounded-full bg-gradient-hero p-2.5 text-white shadow-soft hover:scale-110 transition-transform" aria-label="Ajouter au panier">
                        <ShoppingBag className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-soft">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl px-6 text-center">
          <p className="section-num mx-auto justify-center mb-4">Sur commande</p>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Vous cherchez un produit spécifique ?
          </h2>
          <p className="font-editorial italic text-lg text-ink-light mb-10">
            Contactez-nous, nous pouvons commander pour vous des matériels pédagogiques sur mesure.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-8 py-4 font-bold text-white shadow-glow hover:scale-105 transition-transform">
            Nous contacter
          </a>
        </motion.div>
      </section>
    </PageShell>
  );
}
