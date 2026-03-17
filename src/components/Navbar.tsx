"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicii", href: "#servicii" },
  { label: "Echipa", href: "#echipa" },
  { label: "Despre Noi", href: "#despre" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`
          tactile-glass rounded-full w-full max-w-5xl
          flex items-center justify-between px-6 py-3
          transition-all duration-300
          ${scrolled ? "bg-zinc-900/80 shadow-lg" : ""}
        `}
      >
        {/* Logo */}
        <a href="#" className="text-white font-medium tracking-[0.3em] text-sm select-none">
          TOPDENTICA
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex btn-teal rounded-full px-5 py-2 text-sm font-medium"
          >
            Programează-te
          </a>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute top-full mt-2 inset-x-4 tactile-glass rounded-2xl p-4 flex flex-col gap-3 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-zinc-300 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-teal rounded-full px-5 py-2.5 text-sm font-medium text-center mt-1"
          >
            Programează-te
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
