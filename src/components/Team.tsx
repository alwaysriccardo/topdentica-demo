"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

const doctors = [
  {
    name: "Dr. [Numele]",
    title: "Medic Stomatolog",
    bio: "Specialist în stomatologie generală și estetică dentară. Experiență vastă în tratamente complexe și igienizare profesională.",
  },
  {
    name: "Dr. [Numele]",
    title: "Medic Stomatolog / Chirurg",
    bio: "Expert în chirurgie orală, parodontologie și implantologie. Abordare modernă a tratamentelor stomatologice.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Team() {
  return (
    <section id="echipa" className="relative py-28 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-teal-400 mb-4">
            Echipa Noastră
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-100">
            Medici dedicați, rezultate excepționale
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {doctors.map((doc) => (
            <motion.div
              key={doc.title}
              variants={card}
              className="tactile-glass rounded-[2rem] p-8 border border-zinc-700/50 transition-all duration-300 hover:-translate-y-2 hover:border-teal-500/40"
            >
              {/* Photo placeholder */}
              <div className="relative w-full h-64 rounded-2xl tactile-inset overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <User size={56} className="text-zinc-600" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-zinc-100">{doc.name}</h3>
              <p className="text-sm font-medium text-teal-400 mt-1">{doc.title}</p>
              <p className="text-sm text-zinc-400 mt-3 leading-relaxed">{doc.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
