"use client";

import { motion } from "framer-motion";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const stats = [
  { value: "2000+", label: "Pacienți" },
  { value: "10+", label: "Ani Experiență" },
  { value: "899 lei", label: "Igienizare Pro" },
  { value: "Gratuită", label: "Consultația" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16">
      {/* Background image */}
      <img
        src="/hero-smile.png"
        alt="Zâmbet perfect — TopDentica Chișinău"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#09090b]" />

      {/* Dot pattern */}
      <div className="dot-pattern absolute inset-0" />

      {/* Radial teal glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(13,148,136,0.18),transparent)]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Pill badge */}
        <motion.div {...fade(0.1)}>
          <span className="inline-flex items-center gap-2 tactile-glass rounded-full px-4 py-1.5 text-xs font-medium text-zinc-300 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
            </span>
            Consultație Gratuită
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fade(0.25)}
          className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
        >
          Zâmbetul tău perfect
          <br />
          <span className="shimmer-text">începe aici.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fade(0.4)}
          className="mt-6 text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed"
        >
          Clinică stomatologică modernă în Chișinău. Tehnologii avansate, medici
          dedicați, rezultate care vorbesc de la sine.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fade(0.55)}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <a
            href="#contact"
            className="btn-teal rounded-full px-8 py-3.5 text-sm font-medium"
          >
            Programează-te Acum
          </a>
          <a
            href="#servicii"
            className="tactile-glass border border-zinc-700 rounded-full px-8 py-3.5 text-sm font-medium text-white hover:border-zinc-500 transition-colors"
          >
            Descoperă Serviciile
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          {...fade(0.7)}
          className="mt-16 w-full max-w-2xl tactile-glass rounded-2xl px-2 sm:px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-y-4"
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-1 ${
                i < stats.length - 1
                  ? "sm:border-r sm:border-zinc-800"
                  : ""
              }`}
            >
              <span className="text-2xl font-bold text-white">{value}</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wide">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
