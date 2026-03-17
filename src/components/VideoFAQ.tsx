"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from "lucide-react";

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
      "Nu mânca pe acel dinte și nu încerca să lipești plomba. Curăță zona și programează-te imediat.",
  },
  {
    video: "/videos/vid-0393087.mp4",
    question: "Cauza #1 a pierderii dinților",
    answer:
      "Caria — de la o gaură mică la infecții grave. Peste 90% din adulți au avut cel puțin o carie.",
  },
  {
    video: "/videos/vid-0771485.mp4",
    question: "Cum o carie mică distruge toată dantura",
    answer:
      "Apare durerea, infecția, și poate afecta osul. Un control la timp face diferența.",
  },
  {
    video: "/videos/vid-0921768.mp4",
    question: "Cum începe parodontoza?",
    answer:
      "Igiena incorectă, genetica și stilul de viață. Periajul corect și controlul la 6 luni previn totul.",
  },
  {
    video: "/videos/vid-0960212.mp4",
    question: "Semnele parodontozei",
    answer:
      "Sângerarea la periaj, respirația urât mirositoare, retragerea gingiilor. Nu doare la început.",
  },
  {
    video: "/videos/vid-0486632.mp4",
    question: "Ce NU trebuie să faci niciodată",
    answer:
      "Fără bicarbonat pentru albire, fără antibiotice pe cont propriu, și nu ignora sângerarea gingiilor.",
  },
];

function PhoneCard({ item, index }: { item: FAQItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: 0.08 * index,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className="flex-shrink-0 w-[260px] sm:w-[280px] snap-center"
    >
      <div className="relative rounded-[2rem] overflow-hidden border-2 border-zinc-800 bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-teal-500/40 hover:shadow-[0_20px_60px_-15px_rgba(13,148,136,0.15)] group">
        {/* Phone notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-30" />

        {/* Video container */}
        <div className="relative aspect-[9/16]">
          <video
            ref={videoRef}
            src={item.video}
            preload="metadata"
            playsInline
            muted={muted}
            loop
            onClick={togglePlay}
            onEnded={() => setPlaying(false)}
            className="w-full h-full object-cover cursor-pointer"
          />

          {/* Play overlay */}
          {!playing && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity"
              onClick={togglePlay}
            >
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                <Play size={24} className="text-white ml-1" fill="white" />
              </div>
            </div>
          )}

          {/* Bottom gradient with text */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 pt-12">
            <h3 className="text-sm font-semibold text-white leading-snug">
              {item.question}
            </h3>
            <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed line-clamp-2">
              {item.answer}
            </p>
          </div>

          {/* Mute toggle */}
          {playing && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="absolute top-10 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-20 border border-white/10"
            >
              {muted ? (
                <VolumeX size={14} className="text-white" />
              ) : (
                <Volume2 size={14} className="text-white" />
              )}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function VideoFAQ() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#0a0a0c] border-y border-zinc-900 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 shadow-[inset_0_2px_20px_rgba(0,0,0,0.6)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-6">
          <div>
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
              className="mt-3 text-zinc-400 max-w-md leading-relaxed"
            >
              Medicii noștri răspund la cele mai comune întrebări despre
              sănătatea dentară.
            </motion.p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full tactile-glass border border-zinc-800 flex items-center justify-center hover:border-zinc-600 transition-colors"
            >
              <ChevronLeft size={18} className="text-zinc-400" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full tactile-glass border border-zinc-800 flex items-center justify-center hover:border-zinc-600 transition-colors"
            >
              <ChevronRight size={18} className="text-zinc-400" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {faqs.map((item, i) => (
            <PhoneCard key={item.video} item={item} index={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
