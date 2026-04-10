import Image from "next/image";
import { Globe, Users, Award } from "lucide-react";

const stats = [
  { icon: Globe, value: "6", label: "Komite" },
  { icon: Users, value: "200+", label: "Beklenen Delege" },
  { icon: Award, value: "3", label: "Gün" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-[#c9a84c] text-sm tracking-widest uppercase font-medium mb-4">
              Hakkımızda
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              DEUMUN&apos;a <br />
              <span className="text-[#c9a84c]">Hoş Geldiniz</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Dokuz Eylül Üniversitesi Model Birleşmiş Milletler (DEUMUN), genç
              diplomatlara uluslararası ilişkileri deneyimleme, diplomatik becerilerini
              geliştirme ve küresel sorunlar üzerine tartışma platformu sunmaktadır.
            </p>
            <p className="text-white/60 leading-relaxed mb-10">
              22–24 Mayıs 2026 tarihleri arasında İzmir&apos;de gerçekleşecek olan
              konferansımızda 6 farklı komitede delegates olarak yer alabilir, liderlik
              ve müzakere becerilerinizi küresel düzeyde sergileyebilirsiniz.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center mx-auto mb-3">
                    <Icon size={22} className="text-[#c9a84c]" />
                  </div>
                  <div className="text-3xl font-black text-white">{value}</div>
                  <div className="text-xs text-white/50 mt-1 tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#c9a84c]/20 shadow-2xl shadow-black/50">
              <Image
                src="/s-ad4c4843724face61428a3f3db60920eb13be4b6.jpg"
                alt="Konferans Salonu"
                width={800}
                height={500}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 to-transparent" />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#c9a84c]/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-full h-full border border-[#c9a84c]/10 rounded-2xl -z-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
