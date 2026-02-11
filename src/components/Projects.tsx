import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "AI Chatbot",
    description:
      "AI-powered conversational chatbot built using Python and backend integration for intelligent dialogue.",
    tags: ["Python", "AI", "NLP"],
  },
  {
    title: "NeuroDefence",
    description:
      "AI-based system focused on intelligent threat and anomaly detection for cybersecurity applications.",
    tags: ["AI", "Security", "Python"],
    ongoing: true,
  },
  {
    title: "Smart Predictive Maintenance",
    description:
      "ML-based system using IoT data to predict maintenance needs for surgical robots.",
    tags: ["ML", "IoT", "Python"],
  },
  {
    title: "Deepfake Detection",
    description:
      "AI model focused on detecting manipulated or synthetic media content using deep learning.",
    tags: ["AI", "Deep Learning", "CV"],
    ongoing: true,
  },
  {
    title: "Face Recognition Attendance",
    description:
      "AI-powered attendance system using face recognition technology for automated tracking.",
    tags: ["AI", "OpenCV", "Python"],
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientY - rect.top - rect.height / 2) / 20;
      const y = (rect.left + rect.width / 2 - e.clientX) / 20;
      setTilt({ x, y });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <AnimatedSection delay={index * 0.08}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover-glow h-full"
      >
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          {project.ongoing && (
            <span className="text-[10px] font-display tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 flex-shrink-0 ml-2">
              Ongoing
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-sm text-primary font-display tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-16">
            Things I've Built
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
