"use client";

import { motion } from "framer-motion";

const DOCTOR_IMAGE =
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80";

const doctors = [
  {
    name: "Dr. Sineac Alexei",
    specialty: "Fondator & Medic Stomatolog",
    bio: "Fondatorul clinicii TopDentica. Specialist în tratamente complexe și igienizare profesională.",
  },
  {
    name: "Dr. Mihai Rusu",
    specialty: "Chirurgie Orală",
    bio: "Expert în extracții, chirurgie parodontală și implantologie.",
  },
  {
    name: "Dr. Alexandru Ceban",
    specialty: "Ortodonție",
    bio: "Specialist în aparate dentare și aliniere perfectă a dinților.",
  },
  {
    name: "Dr. Victor Lungu",
    specialty: "Estetică Dentară",
    bio: "Expert în fațete, coroane ceramice și albire profesională.",
  },
  {
    name: "Dr. Ion Munteanu",
    specialty: "Parodontologie",
    bio: "Specialist în tratamentul gingiilor și prevenirea parodontozei.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Team() {
  return (
    <section id="echipa" className="relative py-28 px-4">
      <div className="mx-auto max-w-6xl">
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          {doctors.map((doc) => (
            <motion.div
              key={doc.name}
              variants={card}
              className="tactile-glass rounded-2xl p-5 border border-zinc-800/50 transition-all duration-300 hover:-translate-y-2 hover:border-teal-500/40 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-zinc-700/50 group-hover:border-teal-500/40 transition-colors">
                <img
                  src={DOCTOR_IMAGE}
                  alt={doc.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-sm font-semibold text-zinc-100">{doc.name}</h3>
              <p className="text-xs font-medium text-teal-400 mt-1">{doc.specialty}</p>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{doc.bio}</p>
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
          * Numele sunt ilustrative. Echipa reală vă așteaptă la clinică.
        </motion.p>
      </div>
    </section>
  );
}
