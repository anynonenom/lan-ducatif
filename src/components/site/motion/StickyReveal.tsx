import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface Panel {
  label: string;
  title: ReactNode;
  text: string;
  color: string;
}

interface Props {
  image: string;
  imageAlt: string;
  panels: Panel[];
}

export function StickyReveal({ image, imageAlt, panels }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative" style={{ height: `${panels.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-glow">
              <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-magenta/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-white/60 rounded-full overflow-hidden">
              <motion.div style={{ width: progress }} className="h-full bg-gradient-hero" />
            </div>
          </div>
          <div className="relative h-[60vh] lg:h-[70vh]">
            {panels.map((p, i) => {
              const n = Math.max(panels.length, 1);
              const start = i / n;
              const end = (i + 1) / n;
              const fade = Math.min(0.05, 1 / (n * 4));
              const k0 = Math.max(0, start - fade);
              const k1 = Math.min(start + fade, end - fade > start + fade ? start + fade : (start + end) / 2);
              const k2 = Math.max(k1, end - fade);
              const k3 = Math.min(1, end + fade);
              // Ensure strict monotonic non-decreasing
              const stops = [k0, k1, k2, k3].reduce<number[]>((acc, v) => {
                const last = acc.length ? acc[acc.length - 1] : 0;
                acc.push(v < last ? last : v);
                return acc;
              }, []);
              const opacity = useTransform(scrollYProgress, stops, [0, 1, 1, 0]);
              const y = useTransform(scrollYProgress, [Math.max(0, start), Math.min(1, end)], [40, -40]);
              return (
                <motion.div key={i} style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
                  <p className={`section-num mb-5`} style={{ color: `var(--${p.color})` }}>{p.label}</p>
                  <h3 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-6">{p.title}</h3>
                  <p className="font-editorial text-2xl md:text-3xl text-ink-light leading-relaxed">{p.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
