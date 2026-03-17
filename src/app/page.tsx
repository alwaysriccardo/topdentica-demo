import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b]">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Gallery />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
