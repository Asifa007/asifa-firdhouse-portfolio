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
      {/* Existing animated background */}
      <Scene3D />

      {/* Soft atmospheric glow behind the profile */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.65, 0.45],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[5%]
          md:left-[8%]
          lg:left-[10%]
          top-1/2
          -translate-y-1/2
          w-[360px]
          h-[360px]
          md:w-[460px]
          md:h-[460px]
          rounded-full
          bg-cyan-400/10
          blur-[90px]
          pointer-events-none
        "
      />

      {/* Secondary subtle glow */}
      <motion.div
        animate={{
          x: [0, 15, 0],
          y: [0, -10, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[12%]
          md:left-[15%]
          top-[30%]
          w-48
          h-48
          rounded-full
          bg-primary/20
          blur-[70px]
          pointer-events-none
        "
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-16">

          {/* =========================
              PROFILE IMAGE - LEFT
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              relative
              shrink-0
              w-[280px]
              sm:w-[330px]
              md:w-[360px]
              lg:w-[420px]
              self-center
            "
          >
            {/* Glow directly behind the person */}
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-[10%]
                rounded-full
                bg-primary/20
                blur-[55px]
              "
            />

            {/* Futuristic halo */}
            <motion.div
              animate={{
                scale: [0.95, 1.03, 0.95],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-[8%]
                rounded-full
                border
                border-primary/20
                blur-[1px]
              "
            />

            {/* Transparent profile image */}
            <motion.img
              src="/profile.png"
              alt="Asifa Firdhouse"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-full
                h-auto
                object-contain
                drop-shadow-[0_0_25px_rgba(0,212,255,0.18)]
              "
            />
          </motion.div>

          {/* =========================
              HERO CONTENT - RIGHT
          ========================== */}
          <div className="text-center md:text-left max-w-3xl">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.15,
              }}
              className="
                text-sm
                md:text-base
                text-primary
                font-display
                tracking-widest
                uppercase
                mb-4
              "
            >
              AI & ML Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.25,
              }}
              className="
                text-4xl
                sm:text-5xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
                font-display
                font-bold
                tracking-tight
                mb-6
              "
            >
              <span className="text-foreground">
                Hi, I'm{" "}
              </span>

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
                delay: 0.4,
              }}
              className="
                text-lg
                md:text-xl
                text-muted-foreground
                max-w-2xl
                mb-10
              "
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
                delay: 0.55,
              }}
              className="
                flex
                flex-col
                sm:flex-row
                gap-4
                justify-center
                md:justify-start
              "
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
        transition={{
          delay: 1,
          duration: 0.5,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
        "
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
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
