import Image from "next/image";
import Countdown from "./Countdown";
import { Calendar, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-conference.jpg"
          alt="Dokuz Eylül University Conference Hall"
          fill
          sizes="100vw"
          className="object-cover object-[center_60%]"
          priority
          quality={90}
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-[#0a1628]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-[#0a1628]/20 to-[#0a1628]" />
      </div>

      {/* UN emblem watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5">
        <Image src="/UN.jpeg" alt="" width={600} height={600} className="object-contain w-auto h-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-12 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-6 relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#c9a84c] shadow-2xl shadow-[#c9a84c]/30 float-animation">
          <Image
            src="/DEUMUN_logo.jpeg"
            alt="DEUMUN Logo"
            fill
            sizes="(max-width: 640px) 96px, 128px"
            className="object-cover"
          />
        </div>

        {/* Title */}
        <div className="mb-2">
          <span className="text-xs sm:text-sm tracking-[0.4em] text-[#c9a84c] font-medium uppercase">
            Dokuz Eylül University
          </span>
        </div>
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-2">
          <span className="text-white">DEU</span>
          <span className="text-[#c9a84c]">MUN</span>
        </h1>
        <div className="text-2xl sm:text-3xl font-bold text-white/80 mb-6 tracking-widest">
          2026
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
          Experience diplomacy at the Model United Nations conference,
          challenge perspectives, and shape the future.
        </p>

        {/* Date & Location */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-12">
          <div className="flex items-center gap-2 text-white/80">
            <Calendar size={18} className="text-[#c9a84c]" />
            <span className="font-medium">May 22 – 24, 2026</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/30" />
          <div className="flex items-center gap-2 text-white/80">
            <MapPin size={18} className="text-[#c9a84c]" />
            <span className="font-medium">Dokuz Eylül University, Izmir</span>
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-12">
          <p className="text-xs tracking-widest text-white/40 uppercase mb-4">
            Time until the conference
          </p>
          <Countdown />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#apply"
            className="px-8 py-4 bg-[#c9a84c] text-[#0a1628] font-bold rounded-full hover:bg-[#e8c97a] transition-all duration-300 tracking-wide text-sm uppercase shadow-lg shadow-[#c9a84c]/30 hover:shadow-[#c9a84c]/50 hover:scale-105"
          >
            Apply Now
          </a>
          <a
            href="#committees"
            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 tracking-wide text-sm uppercase"
          >
            Explore Committees
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 z-10 hidden sm:flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-white/50 tracking-widest uppercase [writing-mode:vertical-lr] rotate-180">Explore</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
