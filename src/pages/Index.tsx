import ParticlesCanvas from "@/components/ParticlesCanvas";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticlesCanvas />

      {/* Ambient gradient orbs */}
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />

      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center text-sm text-muted-foreground border-t border-border/30">
        <div className="container mx-auto px-4">
          <p>© 2026 Asifa Firdhouse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
