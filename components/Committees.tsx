import Image from "next/image";

const committees = [
  {
    id: "UNSC",
    name: "UNSC",
    fullName: "United Nations Security Council",
    desc: "The UN Security Council is the most powerful organ of the UN, holding the unique authority to issue binding resolutions, impose sanctions, and authorize the use of force. In this high-stakes environment, delegates represent the world's major powers and rotating members to maintain international peace and security. Expect a fast-paced simulation where diplomacy meets real-world crisis management, and every word in a resolution can alter the course of history.",
    image: "/UNSC.jpg",
    color: "#1a3a6b",
  },
  {
    id: "DISEC",
    name: "DISEC",
    fullName: "Disarmament and International Security Committee",
    desc: "The First Committee of the General Assembly, DISEC, stands as the cornerstone of global peace and stability. Tasked with addressing the challenges of armament and the threats to international security, this committee invites delegates to navigate the complex landscape of nuclear non-proliferation, cyber-warfare, and regional instabilities. In DISEC, you will engage in rigorous debate to forge multilateral agreements that aim to reduce the risk of conflict and ensure a safer world for future generations.",
    image: "/DISEC.png",
    color: "#1a4a3b",
  },
  {
    id: "UNWOMEN",
    name: "UN Women",
    fullName: "United Nations Entity for Gender Equality and the Empowerment of Women",
    desc: "As the global champion for gender equality, UN Women focuses on the empowerment of women and girls as a prerequisite for social and economic progress. In this committee, delegates will tackle systemic barriers, advocate for legislative reforms, and address issues ranging from the gender pay gap to the protection of women in conflict zones. Your mission is to craft inclusive policies that dismantle discrimination and ensure that &ldquo;Equality for All&rdquo; is not just a slogan, but a global reality.",
    image: "/unwomen.png",
    color: "#5a1a6b",
  },
  {
    id: "UNHRC",
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    desc: "The UNHRC is the premier inter-governmental body responsible for the promotion and protection of all human rights around the globe. Delegates in this committee act as the moral conscience of the international community, investigating human rights violations and addressing critical thematic issues such as freedom of speech, refugee rights, and social justice. Here, the challenge is to balance national sovereignty with the universal responsibility to uphold human dignity.",
    image: "/UNHRC_2.jpg",
    color: "#6b1a1a",
  },
  {
    id: "ECOSOC",
    name: "ECOSOC",
    fullName: "Economic and Social Council",
    desc: "ECOSOC serves as the central platform for fostering international cooperation on economic, social, and environmental issues. As the body responsible for coordinating the 17 Sustainable Development Goals, ECOSOC requires delegates to think like visionaries and pragmatists. Whether addressing global poverty, sustainable urban growth, or healthcare equity, your goal is to build a sustainable framework that bridges the gap between developed and developing nations.",
    image: "/UN.jpeg",
    color: "#1a4a6b",
  },
  {
    id: "JCC",
    name: "JCC (Timur)",
    fullName: "Joint Crisis Committee — Timur's Western Campaign",
    desc: "Step into the pages of history with the Joint Crisis Committee, where the past is shaped by your decisions in real-time. This specialized committee features two or more rooms representing opposing sides of a historical conflict—in this case, the unstoppable forces of Timur (Tamerlane) and the defensive powers of the West. Unlike standard committees, the JCC is driven by &ldquo;crisis updates,&rdquo; forcing delegates to react to shifting frontlines, espionage, and political betrayals. Will you secure the Silk Road or defend the gates of the West?",
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
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-[#c9a84c]/50 transition-all duration-500 cursor-pointer"
            >
              {/* Background Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
              <div className="flex-1 p-6 bg-[#112240]">
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
