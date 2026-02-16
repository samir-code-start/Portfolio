import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <LogoMarquee />
        <Services />
        <Work />
      </main>
      <Footer />
    </div>
  );
}
