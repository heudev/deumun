import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEUMUN 2026 | Dokuz Eylül University Model United Nations",
  description: "DEUMUN 2026 — Dokuz Eylül Üniversitesi Model Birleşmiş Milletler Konferansı. 22–24 Mayıs 2026, İzmir.",
  keywords: ["DEUMUN", "MUN", "Model United Nations", "Dokuz Eylül", "İzmir", "2026"],
  openGraph: {
    title: "DEUMUN 2026",
    description: "22–24 Mayıs 2026 | İzmir",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a1628] text-white">{children}</body>
    </html>
  );
}
