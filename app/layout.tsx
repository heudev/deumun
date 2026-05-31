import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEUMUN 2026 | Dokuz Eylül University Model United Nations",
  description: "DEUMUN 2026 — Dokuz Eylül University Model United Nations Conference. June 19–21, 2026, Izmir.",
  keywords: ["DEUMUN", "MUN", "Model United Nations", "Dokuz Eylül", "Izmir", "2026"],
  openGraph: {
    title: "DEUMUN 2026",
    description: "June 19–21, 2026 | Izmir",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a1628] text-white">{children}</body>
    </html>
  );
}
