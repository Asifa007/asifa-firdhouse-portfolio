import AnimatedSection from "./AnimatedSection";
import {
  Code2,
  Brain,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: [
      "Scikit-learn",
      "NLP",
      "Generative AI",
      "RAG",
      "LLMs",
      "Data Preprocessing",
      "OpenCV",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["FastAPI", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MySQL"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">

        <AnimatedSection>
          <p className="text-sm text-primary font-display tracking-widest uppercase mb-3">
            Skills
          </p>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-16">
            Technical Skills
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <AnimatedSection key={group.title} delay={index * 0.08}>
                <div className="group h-full p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover-glow transition-all duration-300">

                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/10">
                      <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-200" />
                    </div>

                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border/30 hover:border-primary/30 hover:text-primary transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
