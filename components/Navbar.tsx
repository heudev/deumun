"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "Hakkında" },
  { href: "#committees", label: "Komiteler" },
  { href: "#fees", label: "Ücretler" },
  { href: "#apply", label: "Başvur" },
  { href: "#contact", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#c9a84c]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#c9a84c]/60 group-hover:border-[#c9a84c] transition-colors">
              <Image
                src="/DEUMUN_logo.jpeg"
                alt="DEUMUN Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-wider text-white group-hover:text-[#c9a84c] transition-colors">
              DEUMUN <span className="text-[#c9a84c]">2026</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-[#c9a84c] transition-colors tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              className="ml-2 px-5 py-2 bg-[#c9a84c] text-[#0a1628] font-bold text-sm rounded-full hover:bg-[#e8c97a] transition-colors tracking-wide uppercase"
            >
              Başvur
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0a1628]/98 backdrop-blur-md border-t border-[#c9a84c]/20">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/80 hover:text-[#c9a84c] transition-colors py-2 border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 bg-[#c9a84c] text-[#0a1628] font-bold text-sm rounded-full text-center hover:bg-[#e8c97a] transition-colors"
            >
              Hemen Başvur
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
