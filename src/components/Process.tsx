"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Consultație Gratuită",
    description:
      "Evaluăm starea dinților tăi și discutăm opțiunile de tratament. Fără costuri, fără obligații.",
  },
  {
    number: 2,
    title: "Plan de Tratament",
    description:
      "Elaborăm un plan personalizat cu radiografie digitală și explicații detaliate.",
  },
  {
    number: 3,
    title: "Tratament Profesional",
    description:
      "Echipa noastră aplică tratamentul cu cele mai moderne tehnologii și materiale.",
  },
  {
    number: 4,
    title: "Zâmbetul Perfect",
    description:
      "Rezultatul final: un zâmbet sănătos și încrezător. Controale regulate pentru menținere.",
  },
];

function StepCard({
  step,
  index,
  inView,
}: {
  step: Step;
  index: number;
  inView: boolean;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-[1fr_48px_1fr] items-center gap-4 md:gap-8">
      {/* Left content or spacer */}
      <div className={isLeft ? "block" : "hidden md:block"}>
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: index * 0.15 + 0.2,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="tactile-glass group rounded-2xl p-6 transition-colors duration-300 hover:border-teal-500/20 md:text-right"
          >
            <h3 className="mb-2 text-lg font-semibold text-zinc-100">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {step.description}
            </p>
          </motion.div>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      {/* Center node */}
      <div className="relative z-10 flex justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{
            duration: 0.4,
            delay: index * 0.15,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-800 bg-[#09090b] text-sm font-bold text-teal-400 transition-colors duration-300 hover:border-teal-500"
        >
          {step.number}
        </motion.div>
      </div>

      {/* Right content or spacer */}
      <div className={!isLeft ? "block" : "hidden md:block"}>
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: index * 0.15 + 0.2,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="tactile-glass group rounded-2xl p-6 transition-colors duration-300 hover:border-teal-500/20"
          >
            <h3 className="mb-2 text-lg font-semibold text-zinc-100">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {step.description}
            </p>
          </motion.div>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      {/* Mobile fallback: show card on both sides for small screens */}
      {isLeft ? null : (
        <div className="col-span-3 -mt-2 md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: index * 0.15 + 0.2,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="tactile-glass rounded-2xl p-6"
          >
            <h3 className="mb-2 text-lg font-semibold text-zinc-100">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              {step.description}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative border-y border-zinc-900 bg-[#0a0a0c] py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-zinc-700" />
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Cum Funcționează
            </span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            De la consultație la zâmbetul perfect
          </h2>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Central spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="h-full w-full origin-top bg-gradient-to-b from-teal-500/60 via-zinc-800 to-zinc-900"
            />
          </div>

          <div className="relative flex flex-col gap-12">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
