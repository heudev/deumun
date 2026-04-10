import Image from "next/image";

const committees = [
  {
    id: "UNSC",
    name: "UNSC",
    fullName: "United Nations Security Council",
    desc: "The UN's most authoritative body responsible for maintaining international peace and security.",
    image: "/UNSC.jpg",
    color: "#1a3a6b",
  },
  {
    id: "DISEC",
    name: "DISEC",
    fullName: "Disarmament and International Security Committee",
    desc: "The UN First Committee addressing issues in disarmament and international security.",
    image: "/DISEC.png",
    color: "#1a4a3b",
  },
  {
    id: "UNWOMEN",
    name: "UN Women",
    fullName: "United Nations Entity for Gender Equality",
    desc: "The UN entity dedicated to gender equality and the empowerment of women.",
    image: "/unwomen.png",
    color: "#5a1a6b",
  },
  {
    id: "UNHRC",
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    desc: "The UN body responsible for the promotion and protection of human rights worldwide.",
    image: "/UNHRC_2.jpg",
    color: "#6b1a1a",
  },
  {
    id: "ECOSOC",
    name: "ECOSOC",
    fullName: "Economic and Social Council",
    desc: "The central UN forum conducting policy discussions on economic, social, and environmental issues.",
    image: "/UN.jpeg",
    color: "#1a4a6b",
  },
  {
    id: "JCC",
    name: "JCC (Timur)",
    fullName: "Joint Crisis Committee — Timur",
    desc: "A special crisis committee tackling historical crisis scenarios through dynamic and rapid decision-making.",
    image: "/Timur.jpg",
    color: "#4a3a1a",
  },
];

export default function Committees() {
  return (
    <section id="committees" className="py-24 bg-[#070f1e] relative">
      <div className="absolute inset-0 bg-[url('/UN.jpeg')] opacity-[0.02] bg-center bg-no-repeat bg-contain" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm tracking-widest uppercase font-medium mb-4">
            Committees
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            2026 Committee <span className="text-[#c9a84c]">Lineup</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Join DEUMUN 2026 as a delegate in one of 6 committees and engage
            with global issues from a diplomatic perspective.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committees.map((c) => (
            <div
              key={c.id}
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-[#c9a84c]/50 transition-all duration-500 cursor-pointer"
            >
              {/* Background Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 opacity-60 group-hover:opacity-50 transition-opacity"
                  style={{ backgroundColor: c.color }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#c9a84c]/20 border border-[#c9a84c]/40 rounded-full backdrop-blur-sm">
                  <span className="text-[#c9a84c] text-xs font-bold tracking-wider">{c.name}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-[#112240]">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#c9a84c] transition-colors">
                  {c.name}
                </h3>
                <p className="text-[#c9a84c]/70 text-xs font-medium mb-3 leading-tight">
                  {c.fullName}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">{c.desc}</p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_30px_rgba(201,168,76,0.1)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
