"use client";

import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80",
    alt: "Cabinet stomatologic modern",
    label: "Cabinet",
    span: true,
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
    alt: "Echipament stomatologic de ultimă generație",
    label: "Echipament",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
    alt: "Interiorul clinicii TopDentica",
    label: "Interior",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    alt: "Instrumente stomatologice profesionale",
    label: "Instrumente",
    span: false,
  },
];

const tileVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Gallery() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
            Clinica Noastră
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
            Spații moderne, tehnologie de vârf
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-[240px] sm:auto-rows-[280px]">
          {images.map(({ src, alt, label, span }, i) => (
            <motion.div
              key={alt}
              custom={i}
              variants={tileVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className={`group relative tactile-base rounded-2xl overflow-hidden ${
                span ? "sm:row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                <span className="text-sm font-medium text-white tracking-wide">
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-col items-center gap-5 text-center"
        >
          <p className="text-zinc-400 text-base">
            Vino să ne cunoști! Programează o vizită.
          </p>
          <a
            href="#contact"
            className="btn-teal rounded-full px-7 py-3 text-sm font-medium"
          >
            Programează-te
          </a>
        </motion.div>
      </div>
    </section>
  );
}
