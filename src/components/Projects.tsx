import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Smart Predictive Maintenance System",
    description:
      "AI-powered predictive maintenance system for surgical robots with real-time sensor data processing and intelligent failure prediction using machine learning.",
    tags: ["FastAPI", "Python", "IoT", "EBM"],
    role: "Backend Developer",
    github: "https://github.com/Asifa007/surginerve-mvp",
  },
  {
    title: "NeuroDefence",
    description:
      "AI + IoT wearable system using EEG signals to monitor stress and trigger emergency alerts through real-time signal processing and emergency response logic.",
    tags: ["AI", "IoT", "EEG", "Python"],
    ongoing: true,
    role: "Hardware-Software Integrator, Backend Developer",
  },
  {
    title: "DeepFake Detection",
    description:
      "AI-based system designed to detect manipulated media, trace IP sources, identify cyber threats, detect phishing attempts, and generate legal reports.",
    tags: ["AI", "Deep Learning", "Cybersecurity", "Python"],
    ongoing: true,
    role: "Backend Developer",
  },
  {
    title: "DocuChat – RAG System",
    description:
      "AI-powered document chatbot using LLM and Retrieval-Augmented Generation with document embeddings, semantic search, and vector retrieval.",
    tags: ["RAG", "LLM", "FastAPI", "FAISS"],
    github: "https://github.com/Asifa007/docuchat-rag",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Automated attendance system using real-time face detection and recognition with student registration, admin interface, and CSV attendance export.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    role: "UI/UX Designer",
  },
  {
    title: "Alumni Portal",
    description:
      "Web-based alumni portal with user management and interaction modules, developed with full-stack integration to connect students and alumni.",
    tags: ["Full Stack", "Python", "Database"],
    role: "Team Lead, Backend Developer",
  },
  {
    title: "Whisper-Wall",
    description:
      "A full-stack, real-time galaxy-themed web app where anonymous notes appear as glowing stars in an evolving emotional universe. Users can post through text or voice and interact with notes.",
    tags: ["JavaScript", "Full Stack", "Real-Time"],
    github: "https://github.com/Asifa007/Whisper-Wall",
  },
  {
    title: "AI Learning Intelligence Dashboard",
    description:
      "AI Learning Intelligence Dashboard designed to provide an interactive learning experience using React and Node.js.",
    tags: ["React", "Node.js", "JavaScript"],
    github:
      "https://github.com/Asifa007/ai-learning-intelligence-dashboard",
  },
  {
    title: "Library Book Management",
    description:
      "Web-based library book management application designed to manage and organize library resources through a simple digital interface.",
    tags: ["JavaScript", "Web Development"],
    github: "https://github.com/Asifa007/library-book-management",
  },
  {
    title: "Payroll Management System",
    description:
      "Full-stack payroll management system designed to streamline employee salary calculations, tax deductions, attendance integration, and real-time payslip generation.",
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    github:
      "https://github.com/Asifa007/Payroll-management-system",
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

  const cardContent = (
    <>
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

      {/* GitHub indicator */}
      {project.github && (
        <div className="mt-auto pt-2 flex items-center gap-2 text-sm text-primary">
          <Github className="w-4 h-4" />
          <span>View on GitHub</span>
        </div>
      )}
    </>
  );

  return (
    <AnimatedSection delay={index * 0.08}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="h-full"
      >
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="group block p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover-glow h-full flex flex-col cursor-pointer"
          >
            {cardContent}
          </a>
        ) : (
          <div className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover-glow h-full flex flex-col">
            {cardContent}
          </div>
        )}
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
