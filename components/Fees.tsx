import { Check, User, GraduationCap, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FeeEntry = {
  title: string;
  earlyPrice: string;
  normalPrice: string;
  features: string[];
  highlighted: boolean;
  Icon: LucideIcon;
};

const fees: FeeEntry[] = [
  {
    title: "Individual Delegate",
    earlyPrice: "₺1.600",
    normalPrice: "₺1.800",
    features: [
      "Participation in all committee sessions",
      "Conference materials",
      "Badge and certificate",
      "Social events",
    ],
    highlighted: false,
    Icon: User,
  },
  {
    title: "Delegation",
    earlyPrice: "₺1.550",
    normalPrice: "₺1.750",
    features: [
      "All individual delegate benefits",
      "Dedicated delegation support",
      "Group coordination",
      "Discounted group rate",
    ],
    highlighted: true,
    Icon: User,
  },
  {
    title: "Press & Admin",
    earlyPrice: "₺1.400",
    normalPrice: "₺1.600",
    features: [
      "Part of the organizing team",
      "Press accreditation",
      "Access to all events",
      "Participation certificate",
    ],
    highlighted: false,
    Icon: GraduationCap,
  },
  {
    title: "Chairboard",
    earlyPrice: "₺1.300",
    normalPrice: "₺1.500",
    features: [
      "Committee management authority",
      "Training sessions",
      "Leadership certificate",
      "Invitation to special events",
    ],
    highlighted: false,
    Icon: GraduationCap,
  },
];

export default function Fees() {
  return (
    <section id="fees" className="py-24 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a84c]/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm tracking-widest uppercase font-medium mb-4">
            Participation Fees
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Fee <span className="text-[#c9a84c]">Plans</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Choose the plan that fits your role. Early registration is open until the end of April.
          </p>
        </div>

        {/* Early vs Normal banner */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mb-10">
          <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/30">
            <Clock size={18} className="text-[#c9a84c] flex-shrink-0" />
            <div>
              <p className="text-[#c9a84c] font-bold text-sm">Early Registration</p>
              <p className="text-white/50 text-xs">Until end of April</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 border border-white/10">
            <Clock size={18} className="text-white/40 flex-shrink-0" />
            <div>
              <p className="text-white/70 font-bold text-sm">Normal Registration</p>
              <p className="text-white/40 text-xs">May 1 – May 10</p>
            </div>
          </div>
        </div>

        {/* Fee cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {fees.map((fee) => (
            <div
              key={fee.title}
              className={`relative rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:scale-[1.02] flex flex-col ${
                fee.highlighted
                  ? "border-[#c9a84c] bg-[#112240] shadow-xl shadow-[#c9a84c]/10"
                  : "border-white/10 bg-[#112240]/60 hover:border-[#c9a84c]/40"
              }`}
            >
              {fee.highlighted && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-[#c9a84c] text-[#0a1628] text-xs font-bold rounded-full tracking-wider">
                  POPULAR
                </div>
              )}

              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 flex items-center justify-center rounded-md bg-[#c9a84c]/10 border border-[#c9a84c]/20">
                  <fee.Icon size={15} className="text-[#c9a84c]" />
                </div>
                <h4 className="text-base font-bold text-white leading-tight">{fee.title}</h4>
              </div>

              {/* Pricing rows */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20">
                  <span className="text-[#c9a84c]/80 text-xs font-medium">Early</span>
                  <span className="text-[#c9a84c] text-lg font-black">{fee.earlyPrice}</span>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-white/40 text-xs font-medium">Normal</span>
                  <span className="text-white/60 text-lg font-black">{fee.normalPrice}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {fee.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-white/60">
                    <Check size={14} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#apply"
                className={`block text-center py-2.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
                  fee.highlighted
                    ? "bg-[#c9a84c] text-[#0a1628] hover:bg-[#e8c97a]"
                    : "bg-white/10 text-white hover:bg-[#c9a84c]/20 hover:text-[#c9a84c]"
                }`}
              >
                Apply
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 p-6 rounded-2xl bg-[#112240]/60 border border-white/10 max-w-3xl">
          <p className="text-white/50 text-sm leading-relaxed">
            <span className="text-[#c9a84c] font-semibold">Note:</span> Payment instructions
            will be sent via email after your application is approved. Participants under 18
            must submit a parental consent form.
          </p>
        </div>
      </div>
    </section>
  );
}
