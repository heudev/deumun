import Image from "next/image";
import { Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050d1a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#c9a84c]/60">
                <Image src="/DEUMUN_logo.jpeg" alt="DEUMUN" fill className="object-cover" />
              </div>
              <div>
                <div className="text-xl font-black text-white">
                  DEU<span className="text-[#c9a84c]">MUN</span>
                </div>
                <div className="text-xs text-white/40 tracking-wider">2026</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Dokuz Eylül University Model United Nations Conference.
              May 22–24, 2026, Izmir.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                ["About", "#about"],
                ["Committees", "#committees"],
                ["Fees", "#fees"],
                ["Application", "#apply"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/50 hover:text-[#c9a84c] text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:deumodelunitednation@gmail.com"
                  className="flex items-center gap-3 text-white/50 hover:text-[#c9a84c] text-sm transition-colors group"
                >
                  <Mail size={16} className="text-[#c9a84c]/60 group-hover:text-[#c9a84c]" />
                  deumodelunitednation@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/deumun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-[#c9a84c] text-sm transition-colors group"
                >
                  <ExternalLink size={16} className="text-[#c9a84c]/60 group-hover:text-[#c9a84c]" />
                  @deumun
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50 text-sm">
                  <MapPin size={16} className="text-[#c9a84c]/60 flex-shrink-0 mt-0.5" />
                  <span>Dokuz Eylül University, Buca / Izmir</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 DEUMUN — Dokuz Eylül University Model United Nations
          </p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
            <span className="text-white/30 text-xs">May 22–24, 2026, Izmir</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
