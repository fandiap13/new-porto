"use client";

import {
  HTMLMotionProps,
  motion,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { ReactNode } from "react";

type FadeUpStaggerStaggerProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: ReactNode;
  /** Delay sebelum parent mulai */
  delay?: number;
  /** Jarak geser awal */
  distance?: number;
  /** Trigger viewport */
  amount?: number;
  /** Jeda antar child */
  stagger?: number;
};

const FadeUpStagger = ({
  children,
  delay = 0,
  distance = 40,
  amount = 0.2,
  stagger = 0.15,
  ...rest
}: FadeUpStaggerStaggerProps) => {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      {...rest}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={item}>{children}</motion.div>
      )}
    </motion.div>
  );
};

export default FadeUpStagger;
