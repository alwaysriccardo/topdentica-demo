"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Wrench,
  Star,
  Scissors,
  AlignCenter,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Sparkles,
    title: "Igienizare Profesională",
    description:
      "Curățare profesională cu ultrasunete. Îndepărtarea tartrului și a petelor pentru un zâmbet strălucitor.",
  },
  {
    icon: ShieldCheck,
    title: "Tratament Carii",
    description:
      "Obturații estetice moderne cu materiale de ultimă generație. Fără durere, rezultate durabile.",
  },
  {
    icon: Wrench,
    title: "Implantologie",
    description:
      "Implanturi dentare premium pentru restaurarea completă a zâmbetului tău natural.",
  },
  {
    icon: Star,
    title: "Estetică Dentară",
    description:
      "Fațete, coroane ceramice și albire profesională. Transformă-ți zâmbetul.",
  },
  {
    icon: Scissors,
    title: "Chirurgie Orală",
    description:
      "Extracții, chirurgie parodontală și intervenții complexe cu anestezie modernă.",
  },
  {
    icon: AlignCenter,
    title: "Ortodonție",
    description:
      "Aparate dentare și aliniere perfectă. Soluții moderne pentru dinți drepți.",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicii" className="relative py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-zinc-700" />
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              Serviciile Noastre
            </span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
            Tratamente de top pentru zâmbetul tău
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className="group"
              >
                <div className="tactile-base flex h-64 flex-col justify-between rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2">
                  <div>
                    <div className="tactile-inset mb-5 flex h-12 w-12 items-center justify-center rounded-xl">
                      <Icon className="h-5 w-5 text-teal-400" />
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-zinc-100">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {service.description}
                    </p>
                  </div>
                  <div className="h-1 w-12 rounded-full bg-zinc-800 transition-colors duration-300 group-hover:bg-teal-500" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
