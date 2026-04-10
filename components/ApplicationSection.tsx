"use client";

import { useState } from "react";
import { Users, User, Camera, GraduationCap, Building2, ChevronRight } from "lucide-react";

const applicationTypes = [
  {
    id: "delegate",
    icon: User,
    title: "Delegate",
    subtitle: "Individual Application",
    desc: "Apply to serve as a delegate in a committee and represent a country.",
    color: "#1a6b5a",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLScv1Y9FXT1aOFY8MpBtH6N_G-n-WkILdpnZOPDedwwOxYWipw/viewform?usp=preview",
  },
  {
    id: "delegation",
    icon: Building2,
    title: "Delegation",
    subtitle: "Group Application (min. 5 people)",
    desc: "Participate as a delegation representing your university or institution.",
    color: "#6b1a5a",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLScjpt45z6VyloogshJ-SM1FZOsEY6gobZKdDVK6baEG8_PwcQ/viewform?usp=preview",
    featured: true,
  },
  {
    id: "chair",
    icon: GraduationCap,
    title: "Chair",
    subtitle: "Academic Staff",
    desc: "Chair committee sessions and guide delegates as a committee chair.",
    color: "#1a3a6b",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSf_otJh0sp3kbQE1L_WR_tQd8ubaub4Bf-ag1beceMOLZNGEA/viewform?usp=preview",
  },
  {
    id: "admin",
    icon: Users,
    title: "Admin",
    subtitle: "Organizing Team",
    desc: "Take an active role in conference organization and work behind the scenes.",
    color: "#6b4a1a",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdXg1U5-QAt8SibyRCN-x4VycERfr_DuWQdfeKKcXIBrNT5BA/viewform?usp=preview",
  },
  {
    id: "press",
    icon: Camera,
    title: "Press",
    subtitle: "Media & Journalism",
    desc: "Document the conference through photography, video, or written journalism.",
    color: "#3a1a6b",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLScYsLrjK78lSL80UmgczMuZd6x5fPMDEuvtgfemvh5caSbTaw/viewform?usp=preview",
  },
];

export default function ApplicationSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="apply" className="py-24 bg-[#070f1e] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a84c]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm tracking-widest uppercase font-medium mb-4">
            Application
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Join <span className="text-[#c9a84c]">DEUMUN</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Choose your role, fill out the form, and join the DEUMUN 2026 family.
            Access the application forms using the buttons below.
          </p>
        </div>

        {/* Application Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {applicationTypes.map((app) => {
            const Icon = app.icon;
            const isHovered = hovered === app.id;
            return (
              <div
                key={app.id}
                className={`relative rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden group ${
                  app.featured
                    ? "border-[#c9a84c] bg-[#112240]"
                    : "border-white/10 bg-[#112240]/60 hover:border-[#c9a84c]/50"
                }`}
                onMouseEnter={() => setHovered(app.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {app.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#c9a84c] text-[#0a1628] text-xs font-bold rounded-full tracking-wider">
                    FEATURED
                  </div>
                )}

                {/* Color accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                  style={{ backgroundColor: isHovered || app.featured ? "#c9a84c" : app.color }}
                />

                <div className="p-5 sm:p-8">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{ backgroundColor: `${app.color}40`, border: `1px solid ${app.color}60` }}
                  >
                    <Icon size={26} style={{ color: "#c9a84c" }} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#c9a84c] transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-[#c9a84c]/70 text-sm font-medium mb-4">{app.subtitle}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-8">{app.desc}</p>

                  <a
                    href={app.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
                      app.featured
                        ? "bg-[#c9a84c] text-[#0a1628] hover:bg-[#e8c97a]"
                        : "bg-white/10 text-white hover:bg-[#c9a84c] hover:text-[#0a1628]"
                    }`}
                  >
                    Fill Out Application Form
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
