"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

interface AnimatedInViewProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedInView({
  children,
  delay = 0,
  className = "",
}: AnimatedInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
