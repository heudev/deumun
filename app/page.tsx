import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Committees from "@/components/Committees";
import Fees from "@/components/Fees";
import ApplicationSection from "@/components/ApplicationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Committees />
      <Fees />
      <ApplicationSection />
      <Footer />
    </main>
  );
}
