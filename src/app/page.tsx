import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
