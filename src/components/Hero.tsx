"use client";

import { motion } from "framer-motion";
import { Users, Clock, BadgeCheck } from "lucide-react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const stats = [
  { icon: Users, value: "2000+", label: "Pacienți Fericiți" },
  { icon: Clock, value: "10+", label: "Ani Experiență" },
  { icon: BadgeCheck, value: "100%", label: "Consultații Gratuite" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16">
      {/* Dot pattern background */}
      <div className="dot-pattern absolute inset-0" />

      {/* Radial teal glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(13,148,136,0.15),transparent)]" />

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
          className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Zâmbetul tău perfect
          <br />
          <span className="shimmer-text">începe aici.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fade(0.4)}
          className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed"
        >
          Clinică stomatologică modernă în Chișinău. Tehnologii avansate, medici
          dedicați, rezultate care vorbesc de la sine.
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fade(0.55)} className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="#contact"
            className="btn-teal rounded-full px-8 py-3 text-sm font-medium"
          >
            Programează-te
          </a>
          <a
            href="#servicii"
            className="tactile-glass border border-zinc-700 rounded-full px-8 py-3 text-sm font-medium text-white hover:border-zinc-500 transition-colors"
          >
            Descoperă Serviciile
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          {...fade(0.7)}
          className="mt-16 w-full max-w-lg tactile-glass rounded-2xl px-6 py-5 grid grid-cols-3 gap-4"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon size={18} className="text-teal-400 mb-1" />
              <span className="text-xl sm:text-2xl font-bold text-white">{value}</span>
              <span className="text-[11px] sm:text-xs text-zinc-500 leading-tight text-center">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
