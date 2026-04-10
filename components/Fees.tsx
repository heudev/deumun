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
    category: "Delege",
    Icon: User,
    tiers: [
      {
        title: "Bireysel Delege",
        price: "₺",
        note: "Yakında açıklanacak",
        features: [
          "Tüm komite oturumlarına katılım",
          "Konferans materyalleri",
          "Yaka kartı ve sertifika",
          "Sosyal etkinlikler",
        ],
        highlighted: false,
      },
      {
        title: "Delegasyon",
        price: "₺",
        note: "Min. 5 delege — yakında",
        features: [
          "Tüm bireysel delege hakları",
          "Özel delegasyon desteği",
          "Grup koordinasyonu",
          "İndirimli grup fiyatı",
        ],
        highlighted: true,
      },
    ],
  },
  {
    category: "Akademik Kadro",
    Icon: GraduationCap,
    tiers: [
      {
        title: "Chair",
        price: "₺",
        note: "Yakında açıklanacak",
        features: [
          "Komite yönetimi yetkisi",
          "Eğitim oturumları",
          "Liderlik sertifikası",
          "Özel etkinliklere davet",
        ],
        highlighted: false,
      },
      {
        title: "Admin & Basın",
        price: "₺",
        note: "Yakında açıklanacak",
        features: [
          "Organizasyon ekibine dahil",
          "Basın akreditasyonu",
          "Tüm etkinliklere erişim",
          "Katılım sertifikası",
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
            Katılım Ücretleri
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ücret <span className="text-[#c9a84c]">Planları</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Rol ve katılım şeklinize göre uygun planı seçin.
            Kesin ücretler yakında duyurulacaktır.
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
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
              {cat.tiers.map((tier) => (
                <div
                  key={tier.title}
                  className={`relative rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] ${
                    tier.highlighted
                      ? "border-[#c9a84c] bg-[#112240] shadow-xl shadow-[#c9a84c]/10"
                      : "border-white/10 bg-[#112240]/60 hover:border-[#c9a84c]/40"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-[#c9a84c] text-[#0a1628] text-xs font-bold rounded-full tracking-wider">
                      POPÜLER
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
                    Başvur
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Note */}
        <div className="mt-4 p-6 rounded-2xl bg-[#112240]/60 border border-white/10 max-w-3xl">
          <p className="text-white/50 text-sm leading-relaxed">
            <span className="text-[#c9a84c] font-semibold">Not:</span> Ücretler ve ödeme
            detayları yakında duyurulacaktır. Başvuru sonrasında ödeme talimatları
            e-posta ile iletilecektir. Reşit olmayan katılımcıların veli onay formu
            doldurması gerekmektedir.
          </p>
        </div>
      </div>
    </section>
  );
}
