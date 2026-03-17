"use client";

import { motion } from "framer-motion";
import { Shield, Cpu, Heart, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Echipament de Ultimă Generație",
    desc: "Autoclave, radiografie digitală și instrumente moderne pentru diagnostic precis.",
  },
  {
    icon: Cpu,
    title: "Tehnologie Avansată",
    desc: "Tratamente asistate digital pentru rezultate predictibile și confort maxim.",
  },
  {
    icon: Heart,
    title: "Abordare Fără Durere",
    desc: "Anestezie modernă și tehnici minim invazive. Confortul tău e prioritatea noastră.",
  },
  {
    icon: Award,
    title: "Consultație Gratuită",
    desc: "Evaluare completă fără costuri. Vino, discutăm, decizi tu.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function WhyUs() {
  return (
    <section className="relative bg-[#0a0a0c] border-y border-zinc-900 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 shadow-[inset_0_2px_20px_rgba(0,0,0,0.6)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="tactile-base rounded-2xl p-1 group transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(13,148,136,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80"
                alt="Tratament stomatologic la clinica TopDentica"
                className="w-full rounded-xl object-cover aspect-[4/5]"
              />
            </div>
          </motion.div>

          {/* Right — content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3"
            >
              De Ce Noi
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight mb-10"
            >
              Stomatologie modernă,
              <br />
              centrat pe pacient
            </motion.h2>

            <div className="space-y-6">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="tactile-inset flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full">
                    <Icon size={20} className="text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium text-zinc-200 mb-0.5">
                      {title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
