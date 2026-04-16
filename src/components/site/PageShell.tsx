import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 pt-20"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow, title, subtitle, accent = "magenta",
}: { eyebrow: string; title: React.ReactNode; subtitle?: string; accent?: "magenta" | "purple" | "teal" | "gold" }) {
  const bg: Record<string, string> = {
    magenta: "from-magenta-bg via-rose to-lavender",
    purple: "from-lavender via-purple-bg to-magenta-bg",
    teal: "from-mint via-teal-bg to-cream",
    gold: "from-cream via-gold-bg to-warm",
  };
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${bg[accent]} py-24 md:py-32`}>
      <div className="blob bg-magenta/20 -top-20 -right-10 w-96 h-96 animate-float-slow" />
      <div className="blob bg-purple/15 -bottom-20 -left-10 w-[28rem] h-[28rem] animate-float-slow" style={{ animationDelay: "3s" }} />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-num justify-center mx-auto mb-6">
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.02] text-ink"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mt-8 font-editorial italic text-xl md:text-2xl text-ink-light max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
