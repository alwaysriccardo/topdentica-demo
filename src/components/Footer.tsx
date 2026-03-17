const navLinks = [
  { label: "Servicii", href: "#servicii" },
  { label: "Echipa", href: "#echipa" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-zinc-900 px-4 py-10">
      <div className="mx-auto max-w-5xl flex flex-col gap-8">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white font-medium tracking-[0.3em] text-sm select-none">
            TOPDENTICA
          </span>

          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-zinc-900" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
          <span>&copy; 2026 TopDentica. Toate drepturile rezervate.</span>
          <span>Bd. Mircea cel Bătrân 41b, sec. Ciocana, Chișinău</span>
        </div>
      </div>
    </footer>
  );
}
