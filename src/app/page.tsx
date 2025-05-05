"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (phase === 1) {
          if (prev >= 100) {
            setPhase(2); // Pindah ke fase 2
            return 0;
          }
          return prev + 1;
        } else {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        }
      });
    }, 12);

    return () => {
      clearInterval(interval)
    };
  }, [phase]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = phase === 1
    ? circumference - ((progress / 100) * circumference) // Gerak ke kiri (normal)
    : ((progress / 100) * circumference) - circumference; // Gerak ke kanan (balik)


  const backgroundVariant = {
    initial: {
      backgroundColor: "#0F172A",
    },
    hover: {
      backgroundColor: "#fff",
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1],
      },
      animate: {
        backgroundColor: "#0F172A",
        transition: {
          delay: 0.1,
          duration: 0.5,
          ease: [0.19, 1, 0.22, 1],
        },
      },
    }
  }

  const firstTextVariant = {
    initial: {
      y: 0,
    },
    hover: {
      y: -20,
      transition: {
        duration: 1.125,
        ease: [0.19, 1, 0.22, 1],
      },
    },
    animate: {
      y: 0,
      transition: {
        duration: 1.125,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  const secondTextVariant = {
    initial: {
      y: 20,
    },
    hover: {
      y: 0,
      transition: {
        duration: 1.125,
        ease: [0.19, 1, 0.22, 1],
      },
    },
    animate: {
      y: 20,
      transition: {
        duration: 1.125,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  return (
    <div
      // style={{ background: "linear-gradient(180deg, #0F172A, #0c0c1d)" }}
      className="flex flex-col items-center justify-center h-screen text-white"
    >
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#0F172A_40%,#2563eb_100%)]"></div>

      {progress >= 100 && phase == 2 ? (
        <div className="text-center">
          <h4 className="text-2xl font-semibold mb-5 max-w-md">Begin your journey to explore my work and experiences.</h4>
          <motion.button
            variants={backgroundVariant}
            initial="initial"
            whileHover="hover"
            animate="animate"
            whileTap={{ scale: 0.8 }}
            type="button"
            className="w-[200px] border border-white rounded-full px-4 py-4 font-semibold"
            onClick={() => router.push("/portfolio")}
          >
            <div className="overflow-hidden relative text-lg">
              <motion.p variants={firstTextVariant} className="text-white">
                MULAI
              </motion.p>
              <motion.p
                variants={secondTextVariant}
                aria-hidden
                className="absolute top-0 left-0 right-0 text-dark"
              >
                <div className="flex items-center justify-center">
                  <span>MULAI</span><FaArrowRight className="ml-2 w-5 h-5" />
                </div>
              </motion.p>
            </div>
          </motion.button>
        </div>
      ) : (
        <>
          <svg width="140" height="140" viewBox="0 0 100 100">
            {/* Lingkaran background */}
            <circle cx="50" cy="50" r={radius} stroke="#e0e0e0" strokeWidth="0" fill="none" />

            {/* Lingkaran progress */}
            <motion.circle
              cx="50"
              cy="50"
              r={radius}
              stroke="white"
              // className={"text-white"}
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.05 }}
            />
          </svg>
          <p className="mt-4 text-xl font-semibold">{progress}%</p></>
      )}
    </div>
  );
};
