import AnimatedSection from "./AnimatedSection";
import { Code, Brain, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Python & Backend",
    description:
      "Building backend applications and REST APIs with Python and FastAPI, with a focus on clean, practical, and scalable solutions.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Hands-on experience with machine learning, NLP, computer vision, data preprocessing, and AI-powered applications.",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description:
      "Exploring Generative AI, RAG, LLMs, and intelligent document-based applications to create useful AI-driven experiences.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <AnimatedSection>
          <p className="text-sm text-primary font-display tracking-widest uppercase mb-3">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Turning Ideas Into Intelligent Solutions
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mb-16 leading-relaxed">
            I'm Asifa Firdhouse, a B.E. Artificial Intelligence and Machine
            Learning student passionate about building practical AI-powered
            applications. My interests span Python development, machine
            learning, Generative AI, and backend engineering. I enjoy
            learning new technologies, solving real-world problems, and
            transforming ideas into working solutions.
          </p>
        </AnimatedSection>

        {/* Highlights */}
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
