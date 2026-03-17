"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CalendarCheck, ClipboardList, Sparkles, Wrench } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Consultație Gratuită",
    description:
      "Evaluăm starea dinților tăi și discutăm opțiunile de tratament. Fără costuri, fără obligații.",
    icon: CalendarCheck,
  },
  {
    number: 2,
    title: "Plan de Tratament",
    description:
      "Elaborăm un plan personalizat cu radiografie digitală și explicații detaliate.",
    icon: ClipboardList,
  },
  {
    number: 3,
    title: "Tratament Profesional",
    description:
      "Echipa noastră aplică tratamentul cu cele mai moderne tehnologii și materiale.",
    icon: Wrench,
  },
  {
    number: 4,
    title: "Zâmbetul Perfect",
    description:
      "Rezultatul final: un zâmbet sănătos și încrezător. Controale regulate pentru menținere.",
    icon: Sparkles,
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 md:gap-0 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{
          duration: 0.7,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className={`relative flex-1 md:w-[calc(50%-40px)] ${
          isEven ? "md:pr-16 md:text-right" : "md:pl-16"
        }`}
      >
        <div className="tactile-glass rounded-2xl p-6 border border-zinc-800/50 transition-all duration-500 hover:border-teal-500/30 hover:shadow-[0_0_40px_rgba(13,148,136,0.06)] group">
          <div
            className={`flex items-center gap-3 mb-3 ${
              isEven ? "md:justify-end" : ""
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
              <Icon size={16} className="text-teal-400" />
            </div>
            <span className="text-xs font-mono text-teal-400/60 uppercase tracking-widest">
              Pas {step.number}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">
            {step.title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            {step.description}
          </p>
        </div>
      </motion.div>

      {/* Center node — visible on desktop only */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-800 bg-[#0a0a0c] text-sm font-bold text-teal-400 hover:border-teal-500 transition-colors"
      >
        {step.number}
      </motion.div>

      {/* Mobile node — left side */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="md:hidden flex-shrink-0 relative z-10 h-10 w-10 flex items-center justify-center rounded-full border-2 border-zinc-800 bg-[#0a0a0c] text-sm font-bold text-teal-400 mt-6"
      >
        {step.number}
      </motion.div>

      {/* Spacer for the other side on desktop */}
      <div className="hidden md:block flex-1 md:w-[calc(50%-40px)]" />
    </div>
  );
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="relative border-y border-zinc-900 bg-[#0a0a0c] py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-20 text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">
            Cum Funcționează
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight">
            De la consultație la zâmbetul perfect
          </h2>
          <p className="mt-4 text-zinc-400 max-w-lg mx-auto">
            Patru pași simpli spre sănătatea dentară ideală.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Desktop center spine with scroll-driven progress */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
            <div className="h-full w-full bg-zinc-800/50" />
            <motion.div
              style={{ height: lineHeight, opacity: lineOpacity }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-teal-500 via-teal-400/60 to-transparent origin-top"
            />
            <motion.div
              style={{ height: lineHeight, opacity: lineOpacity }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3 bg-gradient-to-b from-teal-500/20 via-teal-400/5 to-transparent blur-sm origin-top"
            />
          </div>

          {/* Mobile left spine with scroll-driven progress */}
          <div className="md:hidden absolute left-[19px] top-0 bottom-0 w-px">
            <div className="h-full w-full bg-zinc-800/50" />
            <motion.div
              style={{ height: lineHeight, opacity: lineOpacity }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-teal-500 via-teal-400/60 to-transparent origin-top"
            />
          </div>

          <div className="relative flex flex-col gap-10 md:gap-16">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
