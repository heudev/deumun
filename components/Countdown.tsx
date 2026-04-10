"use client";

import { useEffect, useState } from "react";

const CONFERENCE_DATE = new Date("2026-05-22T09:00:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = CONFERENCE_DATE.getTime() - Date.now();
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "GÜN", value: pad(time.days) },
    { label: "SAAT", value: pad(time.hours) },
    { label: "DAKİKA", value: pad(time.minutes) },
    { label: "SANİYE", value: pad(time.seconds) },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-6">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 sm:gap-6">
          <div className="text-center">
            <div className="bg-[#112240] border border-[#c9a84c]/40 rounded-xl px-4 py-3 sm:px-6 sm:py-4 min-w-[60px] sm:min-w-[80px]">
              <span className="text-3xl sm:text-5xl font-bold text-[#c9a84c] tabular-nums leading-none">
                {unit.value}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-white/50 mt-2 block tracking-widest">
              {unit.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-2xl sm:text-4xl font-bold text-[#c9a84c]/60 mb-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
