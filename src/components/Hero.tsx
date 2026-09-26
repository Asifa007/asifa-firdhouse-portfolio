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

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center gap-8 lg:gap-16 min-h-screen py-24">

          {/* Hero Content */}
          <div className="text-center md:text-left order-2 md:order-1">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-sm md:text-base text-primary font-display tracking-widest uppercase mb-4"
            >
              AI & ML Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1,
              }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6"
            >
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-primary glow-text">
                Asifa Firdhouse
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.25,
              }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 mb-10"
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
                delay: 0.4,
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

          {/* Profile Cutout */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="relative order-1 md:order-2 flex justify-center items-end"
          >
            {/* Soft cyan atmospheric glow */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 blur-3xl" />

            <motion.img
              src="/profile.jpeg"
              alt="Asifa Firdhouse"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative z-10 w-auto h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] max-w-full object-contain object-bottom drop-shadow-[0_0_30px_hsl(var(--primary)/0.18)]"
            />
          </motion.div>

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
