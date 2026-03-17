"use client";

import { motion } from "framer-motion";

const doctors = [
  {
    name: "Dr. Stomatolog",
    specialty: "Stomatologie Generală & Estetică",
    bio: "Specialist în tratamente complexe, igienizare profesională și estetică dentară. Abordare centrată pe confortul pacientului.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
  },
  {
    name: "Dr. Chirurg",
    specialty: "Chirurgie Orală & Parodontologie",
    bio: "Expert în chirurgie orală, parodontologie și implantologie. Tehnici moderne și minim invazive.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=600&q=80",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const card = {
  hidden: { opacity: 0, y: 36 },
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {doctors.map((doc) => (
            <motion.div
              key={doc.name}
              variants={card}
              className="tactile-glass rounded-[2rem] p-6 border border-zinc-700/50 transition-all duration-300 hover:-translate-y-2 hover:border-teal-500/40"
            >
              <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-6">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                <span className="absolute bottom-4 left-4 text-lg font-bold text-white">
                  {doc.name}
                </span>
              </div>

              <p className="text-sm font-medium text-teal-400">{doc.specialty}</p>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                {doc.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-zinc-500 italic mt-10"
        >
          * Fotografiile sunt ilustrative. Echipa reală vă așteaptă la clinică.
        </motion.p>
      </div>
    </section>
  );
}
