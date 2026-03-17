"use client";

import { motion } from "framer-motion";

interface FAQItem {
  video: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    video: "/videos/vid-0008484.mp4",
    question: "Ce fac dacă mi-a căzut o plombă?",
    answer:
      "Nu mânca pe acel dinte și nu încerca să lipești plomba înapoi. Curăță zona și programează-te imediat la medic. Fără protecție, caria progresează rapid și poate ajunge la nerv.",
  },
  {
    video: "/videos/vid-0393087.mp4",
    question: "Care e principala cauză a pierderii dinților?",
    answer:
      "Caria este cauza #1 a pierderii dinților la orice vârstă. De la o simplă gaură, la infecții grave. Peste 90% din adulți au avut cel puțin o carie. Controalele regulate sunt cheia.",
  },
  {
    video: "/videos/vid-0771485.mp4",
    question: "Cum poate o carie mică să afecteze toată dantura?",
    answer:
      "Dintele începe să doară, apare infecția și poate afecta chiar și osul. Un control la timp face diferența între o problemă mică și un tratament complex.",
  },
  {
    video: "/videos/vid-0921768.mp4",
    question: "Cum începe parodontoza?",
    answer:
      "Cele mai frecvente cauze sunt igiena incorectă, factorii genetici și stilul de viață. Fumatul și diabetul cresc riscul. Periajul de două ori pe zi și controlul la 6 luni previn orice problemă.",
  },
  {
    video: "/videos/vid-0960212.mp4",
    question: "Care sunt semnele parodontozei?",
    answer:
      "Sângerarea la periaj, respirația urât mirositoare și retragerea gingiilor. Nu doare la început, dar dacă nu intervii la timp, dinții cad.",
  },
  {
    video: "/videos/vid-0486632.mp4",
    question: "Ce nu ar trebui să faci niciodată pentru dinți?",
    answer:
      "Nu folosi bicarbonat sau sare pentru albire, nu trata durerile cu antibiotice pe cont propriu și nu ignora sângerarea gingiilor — acestea sunt primele semnale că ai nevoie de medic.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.12 * i,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function VideoFAQ() {
  return (
    <section className="relative bg-[#0a0a0c] border-y border-zinc-900 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 shadow-[inset_0_2px_20px_rgba(0,0,0,0.6)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3"
          >
            Sfaturi de la Medicii Noștri
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-zinc-100 leading-tight"
          >
            Întrebări frecvente
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="mt-4 text-zinc-400 max-w-xl mx-auto leading-relaxed"
          >
            Medicii noștri răspund la cele mai comune întrebări despre sănătatea
            dentară.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map(({ video, question, answer }, i) => (
            <motion.div
              key={video}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="tactile-glass rounded-2xl border border-zinc-800/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_0_30px_rgba(13,148,136,0.08)]"
            >
              {/* Video */}
              <div className="aspect-[9/16] max-h-72 overflow-hidden rounded-t-xl bg-zinc-900">
                <video
                  src={video}
                  controls
                  preload="metadata"
                  playsInline
                  muted
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-zinc-100">
                  {question}
                </h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                  {answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
