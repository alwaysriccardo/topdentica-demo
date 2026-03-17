"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const contactItems = [
  { icon: MapPin, label: "Adresă", value: "Chișinău, Republica Moldova" },
  { icon: Phone, label: "Telefon", value: "+373 XX XXX XXX" },
  {
    icon: Clock,
    label: "Program",
    value: "Luni – Vineri: 9:00 – 19:00 | Sâmbătă: 9:00 – 14:00",
  },
  { icon: Instagram, label: "Instagram", value: "@topdenticamd" },
];

const services = [
  "Consultație Generală",
  "Igienizare Profesională",
  "Tratament Carii",
  "Implantologie",
  "Estetică Dentară",
  "Chirurgie Orală",
  "Altele",
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const inputCls =
  "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-zinc-100 placeholder:text-zinc-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-colors";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-4">
      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left — info */}
        <motion.div {...fade(0)} className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-4">
            Programează o Consultație Gratuită
          </h2>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            Prima consultație este gratuită. Sună-ne sau completează formularul
            și te contactăm noi.
          </p>

          <div className="flex flex-col gap-6 mb-10">
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

          <div className="tactile-inset rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43564.26!2d28.81!3d47.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2zQ2hpyJlpbsSD!5e0!3m2!1sro!2smd!4v1"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: 16 }}
              allowFullScreen
              loading="lazy"
              title="TopDentica – Chișinău"
            />
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div {...fade(0.2)}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="tactile-base rounded-2xl p-8 flex flex-col gap-5"
          >
            <div>
              <label
                htmlFor="name"
                className="text-xs uppercase tracking-wider text-zinc-500 block mb-2"
              >
                Nume
              </label>
              <input
                id="name"
                type="text"
                placeholder="Numele tău"
                className={inputCls}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-xs uppercase tracking-wider text-zinc-500 block mb-2"
              >
                Telefon
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+373 ..."
                className={inputCls}
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="text-xs uppercase tracking-wider text-zinc-500 block mb-2"
              >
                Serviciu
              </label>
              <select id="service" defaultValue="" className={inputCls}>
                <option value="" disabled>
                  Alege un serviciu
                </option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-wider text-zinc-500 block mb-2"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Descrieți pe scurt motivul vizitei..."
                className={`${inputCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="btn-teal rounded-full w-full py-3.5 text-sm font-medium mt-2"
            >
              Programează-te Acum
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
