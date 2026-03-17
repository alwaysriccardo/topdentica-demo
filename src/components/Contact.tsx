"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const contactItems = [
  { icon: MapPin, label: "Adresă", value: "Chișinău, Republica Moldova" },
  { icon: Phone, label: "Telefon", value: "+373 XX XXX XXX" },
  {
    icon: Clock,
    label: "Program",
    value: "Luni – Vineri: 9:00 – 19:00\nSâmbătă: 9:00 – 14:00",
  },
  { icon: Instagram, label: "Instagram", value: "@topdenticamd" },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-4">
      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left — info */}
        <motion.div {...fade(0)} className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
            Programează o Consultație
          </h2>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            Consultația este gratuită. Contactează-ne sau completează formularul.
          </p>

          <div className="flex flex-col gap-6">
            {contactItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl tactile-glass flex items-center justify-center">
                  <Icon size={18} className="text-teal-400" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-500 block mb-0.5">
                    {label}
                  </span>
                  <span className="text-sm text-zinc-300 whitespace-pre-line">
                    {value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div {...fade(0.2)}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="tactile-base rounded-2xl p-8 flex flex-col gap-5"
          >
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-wider text-zinc-500 block mb-2">
                Nume
              </label>
              <input
                id="name"
                type="text"
                placeholder="Numele tău"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-zinc-100 placeholder:text-zinc-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-xs uppercase tracking-wider text-zinc-500 block mb-2">
                Telefon
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+373 ..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-zinc-100 placeholder:text-zinc-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-xs uppercase tracking-wider text-zinc-500 block mb-2">
                Mesaj
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Descrieți pe scurt motivul vizitei..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-zinc-100 placeholder:text-zinc-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-teal rounded-full w-full py-3 text-sm font-medium mt-2"
            >
              Trimite Mesajul
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
