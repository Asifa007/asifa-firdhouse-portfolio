import AnimatedSection from "./AnimatedSection";
import { Code, Brain, Layers } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Python Developer",
    description:
      "Experienced in building backend systems, automation scripts, and AI-powered applications with Python.",
  },
  {
    icon: Layers,
    title: "MERN Stack",
    description:
      "Building full-stack web applications with MongoDB, Express.js, React, and Node.js.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Foundational knowledge in AI/ML with hands-on experience in chatbots, predictive systems, and computer vision.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-sm text-primary font-display tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Passionate About Building Intelligent Systems
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mb-16">
            I'm Asifa Firdhouse, an AI & ML Developer with a strong foundation
            in Python development, MERN stack applications, and machine
            learning. I love turning complex problems into elegant, efficient
            solutions that make a real impact.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <div className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover-glow transition-all duration-300 h-full">
                <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
