"use client";

import { HTMLMotionProps, motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type FadeUpProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children?: ReactNode;
  /** jeda sebelum animasi mulai, dalam detik */
  delay?: number;
  /** jarak geser awal dari bawah, dalam px */
  distance?: number;
  /** berapa bagian elemen harus terlihat sebelum animasi jalan (0–1) */
  amount?: number;
};

/**
 * Pembungkus fade + slide up yang dipicu saat elemen masuk viewport.
 * Animasi cuma jalan sekali (once), jadi tidak mengulang saat scroll balik.
 */
const FadeUp = ({
  children,
  delay = 0,
  distance = 40,
  amount = 0.2,
  ...rest
}: FadeUpProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.19, 1, 0.22, 1],
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
