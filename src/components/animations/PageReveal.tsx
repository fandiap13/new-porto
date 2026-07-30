"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Reveal halaman saat load pertama: overlay hitam yang fade out,
 * dibarengi konten yang naik pelan dari bawah.
 */
const PageReveal = ({ children }: { children: ReactNode }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          // pointer-events-none supaya overlay tidak pernah menghalangi klik
          className="fixed inset-0 z-[200] bg-black pointer-events-none"
          style={{ willChange: "opacity" }}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: shouldReduceMotion ? 0 : 0.15,
          ease: [0.19, 1, 0.22, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageReveal;
