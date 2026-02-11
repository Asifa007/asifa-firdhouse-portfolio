import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "down";
  delay?: number;
}

const directionOffsets = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: -50, y: 0 },
  right: { x: 50, y: 0 },
};

const AnimatedSection = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const offset = directionOffsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
