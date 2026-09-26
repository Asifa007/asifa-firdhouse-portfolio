import { motion } from "framer-motion";
import Scene3D from "./Scene3D";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Scene3D />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative shrink-0"
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />

            <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full p-1 bg-primary/30">
              <img
                src="/profile.jpeg"
                alt="Asifa Firdhouse"
                className="w-full h-full rounded-full object-cover border-2 border-primary/40"
              />
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="text-center md:text-left max-w-3xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="text-sm md:text-base text-primary font-display tracking-widest uppercase mb-4"
            >
              AI & ML Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6"
            >
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-primary glow-text">
                Asifa Firdhouse
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
            >
              Building intelligent applications with Python, AI/ML,
              Generative AI, and backend technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.5,
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button variant="glow" size="lg" asChild>
                <a href="#contact">Let's Connect</a>
              </Button>

              <Button variant="heroOutline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
