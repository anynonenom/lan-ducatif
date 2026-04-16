import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/activites", label: "Activités" },
  { to: "/blog", label: "Blog" },
  { to: "/boutique", label: "Boutique" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="EducazenKids" className="h-12 w-auto transition-transform group-hover:scale-105" width={48} height={48} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative px-4 py-2 text-sm font-semibold text-ink transition-colors hover:text-magenta data-[status=active]:text-magenta"
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-magenta to-purple rounded-full"
                    />
                  )}
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/boutique"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-hero px-5 py-2.5 text-sm font-bold text-white shadow-soft transition-transform hover:scale-105"
          >
            <ShoppingBag className="h-4 w-4" />
            Boutique
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-full bg-magenta-bg p-2.5 text-magenta"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-border"
          >
            <div className="flex flex-col px-6 py-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base font-semibold text-ink hover:text-magenta border-b border-border/40 last:border-0"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
