import AnimatedSection from "./AnimatedSection";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack MERN Developer Intern",
    company: "IBM",
    period: "Dec 2025 – Feb 2026",
    description:
      "Built a Payroll Management System using React, Node.js, Express, and MongoDB.",
  },
  {
    role: "Client Acquisition Lead",
    company: "NexJireh Solutions",
    period: "Aug – Sep 2025",
    description:
      "Managed client onboarding and requirement coordination for the organization.",
  },
  {
    role: "Talent Acquisition Lead",
    company: "NexJireh Solutions",
    period: "Apr – Jul 2025",
    description:
      "Handled hiring operations and candidate onboarding processes.",
  },
  {
    role: "Python Developer Intern",
    company: "PS8 Networks",
    period: "Sep – Nov 2024",
    description:
      "Worked on AI-powered chatbot development and backend logic using Python.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <AnimatedSection>
          <p className="text-sm text-primary font-display tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-16">
            Professional Journey
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/40" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 mt-6 flex-shrink-0">
                    <div className="w-[15px] h-[15px] rounded-full bg-primary glow-sm" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 p-5 rounded-xl bg-card border border-border/50 hover-glow transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-xs font-display tracking-wider uppercase text-primary">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-primary/80 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
