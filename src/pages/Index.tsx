import ParticlesCanvas from "@/components/ParticlesCanvas";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { Github, Linkedin, Mail } from "lucide-react";

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

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/30">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © 2026{" "}
              <span className="text-foreground font-medium">
                Asifa Firdhouse
              </span>
              . All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">

              <a
                href="mailto:asifafirdhouse@gmail.com"
                aria-label="Email Asifa Firdhouse"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/Asifa%20Firdhouse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/Asifa007"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>

            </div>

            {/* Back to Top */}
            <a
              href="#hero"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Back to top ↑
            </a>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
