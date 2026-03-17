"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Am venit cu o problemă urgentă și am fost primită imediat. Doctorul a fost foarte atent și profesionist. Recomand cu încredere!",
    name: "Maria T.",
  },
  {
    text: "Clinica arată impecabil, echipamentul este modern și personalul foarte prietenos. Cel mai bun cabinet stomatologic din Chișinău.",
    name: "Andrei P.",
  },
  {
    text: "M-am temut mereu de stomatolog, dar aici m-am simțit în siguranță. Tratamentul a fost fără durere și rezultatul perfect.",
    name: "Elena V.",
  },
];

const offsets = [
  "md:translate-x-[-2rem] md:translate-y-0",
  "md:translate-x-[2rem] md:-mt-8",
  "md:translate-x-0 md:-mt-12",
];

const card = (i: number) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  },
});

export default function Testimonials() {
  return (
    <section className="relative bg-[#0a0a0c] border-y border-zinc-900 py-28 px-4 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 tactile-glass rounded-full px-4 py-1.5 text-xs font-medium text-zinc-300 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
            </span>
            Recenzii Verificate
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Ce spun pacienții noștri
          </h2>
        </motion.div>

        {/* Cascading cards */}
        <div className="flex flex-col md:items-center gap-6 md:gap-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={card(i)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className={`
                tactile-glass rounded-[2.5rem] p-8 border border-zinc-700/50
                transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30
                w-full md:max-w-xl relative z-[${30 - i * 10}]
                ${offsets[i]}
              `}
            >
              <Quote size={24} className="text-teal-500/40 mb-4" />
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <span className="text-sm font-medium text-zinc-200">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
