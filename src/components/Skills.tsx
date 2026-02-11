import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const skills = [
  { name: "Python", level: 65, label: "Intermediate" },
  { name: "HTML", level: 65, label: "Intermediate" },
  { name: "CSS", level: 60, label: "Intermediate" },
  { name: "MERN Stack", level: 55, label: "Intermediate" },
  { name: "AI & Machine Learning", level: 40, label: "Foundational" },
];

const SkillBar = ({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-8 last:mb-0">
      <div className="flex justify-between items-center mb-2.5">
        <span className="text-sm font-display font-semibold text-foreground">
          {skill.name}
        </span>
        <span className="text-xs text-muted-foreground">{skill.label}</span>
      </div>
      <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
        <AnimatedSection>
          <p className="text-sm text-primary font-display tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-16">
            Technical Proficiency
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;
