import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Smart Predictive Maintenance System for Surgical Robots",
    description:
      "Built a FastAPI backend for sensor data processing and real-time ML predictions. Integrated NodeMCU sensors and an Explainable Boosting Machine (EBM) for predictive maintenance.",
    tags: ["FastAPI", "Python", "IoT", "EBM"],
    role: "Backend Developer",
  },
  {
    title: "NeuroDefence",
    description:
      "Built an AI + IoT wearable using EEG signals to monitor stress levels and trigger automatic emergency alerts. Implemented real-time signal processing and emergency response logic.",
    tags: ["AI", "IoT", "EEG", "Python"],
    ongoing: true,
    role: "Hardware-Software Integrator, Backend Developer",
  },
  {
    title: "DeepFake Detection",
    description:
      "Developed an AI-based system to detect manipulated media, trace IP sources, and alert users of cyber threats in real time. Implemented phishing detection and legal report generation modules.",
    tags: ["AI", "Deep Learning", "Cybersecurity", "Python"],
    ongoing: true,
    role: "Backend Developer",
  },
  {
    title: "DocuChat – RAG System",
    description:
      "Built an AI-powered document chatbot using LLM and RAG with document embedding and vector search. Developed backend APIs for efficient document querying using semantic search.",
    tags: ["RAG", "LLM", "FastAPI", "FAISS"],
    github: "https://github.com/Asifa007/docuchat-rag.git",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Developed a live face detection and recognition system using OpenCV and Python with student photo registration, an admin dashboard, and CSV attendance export.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    role: "UI/UX Designer",
  },
  {
    title: "Alumni Portal",
    description:
      "Designed and developed a web-based alumni portal to connect students and graduates, with user management and interaction modules through full-stack integration.",
    tags: ["Full Stack", "Python", "Database"],
    role: "Team Lead, Backend Developer",
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

      const x =
        (e.clientY - rect.top - rect.height / 2) / 20;

      const y =
        (rect.left + rect.width / 2 - e.clientX) / 20;

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
        className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover-glow h-full flex flex-col"
      >
        {/* Project Header */}
        <div className="flex items-start justify-between mb-3 gap-3">
          <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>

          {project.ongoing && (
            <span className="text-[10px] font-display tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 flex-shrink-0">
              Ongoing
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Role */}
        {project.role && (
          <p className="text-xs text-primary/80 font-medium mb-4">
            Role: {project.role}
          </p>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="mt-auto pt-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground/50">
              <Github className="w-4 h-4" />
              GitHub link coming soon
            </span>
          )}
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
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
