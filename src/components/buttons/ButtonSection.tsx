"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ButtonSectionProps = HTMLMotionProps<"button">;

const firstTextVariant: any = {
  initial: {
    y: 0,
    opacity: 1,
  },
  hover: {
    y: -30,
    opacity: 1,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

const secondTextVariant: any = {
  initial: {
    y: 30,
    opacity: 0,
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 1.125,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

export const ButtonSection = forwardRef<HTMLButtonElement, ButtonSectionProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <motion.button
        ref={ref}
        initial="initial"
        whileHover="hover"
        animate="animate"
        className={twMerge("cta-button", className)}
        {...rest}
      >
        <div className="relative overflow-hidden">
          <motion.div variants={firstTextVariant}>{children}</motion.div>
          <motion.div
            variants={secondTextVariant}
            aria-hidden
            className="absolute top-0 left-0"
          >
            {children}
          </motion.div>
        </div>
      </motion.button>
    );
  }
);
