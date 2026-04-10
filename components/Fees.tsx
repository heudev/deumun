import { Check, User, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FeeTier = {
  title: string;
  price: string;
  note: string;
  features: string[];
  highlighted: boolean;
};

type FeeCategory = {
  category: string;
  Icon: LucideIcon;
  tiers: FeeTier[];
};

const feeCategories: FeeCategory[] = [
  {
    category: "Delegate",
    Icon: User,
    tiers: [
      {
        title: "Individual Delegate",
        price: "₺",
        note: "To be announced",
        features: [
          "Participation in all committee sessions",
          "Conference materials",
          "Badge and certificate",
          "Social events",
        ],
        highlighted: false,
      },
      {
        title: "Delegation",
        price: "₺",
        note: "Min. 5 delegates — coming soon",
        features: [
          "All individual delegate benefits",
          "Dedicated delegation support",
          "Group coordination",
          "Discounted group rate",
        ],
        highlighted: true,
      },
    ],
  },
  {
    category: "Academic Staff",
    Icon: GraduationCap,
    tiers: [
      {
        title: "Chair",
        price: "₺",
        note: "To be announced",
        features: [
          "Committee management authority",
          "Training sessions",
          "Leadership certificate",
          "Invitation to special events",
        ],
        highlighted: false,
      },
      {
        title: "Admin & Press",
        price: "₺",
        note: "To be announced",
        features: [
          "Part of the organizing team",
          "Press accreditation",
          "Access to all events",
          "Participation certificate",
        ],
        highlighted: false,
      },
    ],
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
            Choose the plan that fits your role and participation type.
            Final fees will be announced soon.
          </p>
        </div>

        {feeCategories.map((cat) => (
          <div key={cat.category} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-7 h-7 flex items-center justify-center rounded-md bg-[#c9a84c]/10 border border-[#c9a84c]/20">
                <cat.Icon size={16} className="text-[#c9a84c]" />
              </div>
              <h3 className="text-xl font-bold text-white/80 tracking-wide">{cat.category}</h3>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
              {cat.tiers.map((tier) => (
                <div
                  key={tier.title}
                  className={`relative rounded-2xl p-5 sm:p-8 border transition-all duration-300 hover:scale-[1.02] ${
                    tier.highlighted
                      ? "border-[#c9a84c] bg-[#112240] shadow-xl shadow-[#c9a84c]/10"
                      : "border-white/10 bg-[#112240]/60 hover:border-[#c9a84c]/40"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-[#c9a84c] text-[#0a1628] text-xs font-bold rounded-full tracking-wider">
                      POPULAR
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-white mb-1">{tier.title}</h4>
                    <div className="flex items-baseline gap-1 mt-3">
                      <span className="text-4xl font-black text-[#c9a84c]">{tier.price}</span>
                    </div>
                    <p className="text-white/40 text-sm mt-1">{tier.note}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                        <Check size={16} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#apply"
                    className={`block text-center py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
                      tier.highlighted
                        ? "bg-[#c9a84c] text-[#0a1628] hover:bg-[#e8c97a]"
                        : "bg-white/10 text-white hover:bg-[#c9a84c]/20 hover:text-[#c9a84c]"
                    }`}
                  >
                    Apply
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Note */}
        <div className="mt-4 p-6 rounded-2xl bg-[#112240]/60 border border-white/10 max-w-3xl">
          <p className="text-white/50 text-sm leading-relaxed">
            <span className="text-[#c9a84c] font-semibold">Note:</span> Fees and payment
            details will be announced soon. Payment instructions will be sent via email
            after your application. Participants under 18 must submit a parental consent form.
          </p>
        </div>
      </div>
    </section>
  );
}
