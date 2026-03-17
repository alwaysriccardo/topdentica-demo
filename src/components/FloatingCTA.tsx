"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingCTA() {
  return (
    <motion.a
      href="tel:+37300000000"
      aria-label="Sună acum"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
      whileHover={{ scale: 1.12 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
    >
      <span className="absolute w-14 h-14 rounded-full bg-teal-500/30 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-teal-500 shadow-lg hover:shadow-[0_0_20px_rgba(13,148,136,0.6)] transition-shadow">
        <Phone size={22} className="text-white" />
      </span>
    </motion.a>
  );
}
