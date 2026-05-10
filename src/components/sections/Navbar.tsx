"use client";

import { navLinks } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const menuAnimation: any = {
  initial: {
    y: -8,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  close: {
    y: 8,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const cardRef = useRef<HTMLElement | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;

    // posisi mouse relatif terhadap elemen
    const rect = el.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    el.style.setProperty("--start", `${mouseX - 100}px`);
  };

  return (
    <>
      <header
        className={twMerge("navbar", menuOpen && "active")}
        ref={cardRef}
        onMouseMove={handleMouseMove}
      >
        <div className="flex flex-row items-center justify-between gap-10">
          {/* Logo — selalu kiri */}
          <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
            Fandi Az
          </h1>

          {/* Nav — tengah, hidden di mobile */}
          <nav className={twMerge("nav", menuOpen && "active")}>
            <ul>
              {navLinks.map((nav, i) => (
                <li key={i} className="nav-li">
                  <a href={nav.link}>{nav.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kanan: Contact (desktop) + Burger (mobile) */}
          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/62895392518509"
              target="_blank"
              className="my-button hidden md:block"
            >
              Contact Me
            </a>
            <button
              type="button"
              className="cursor-pointer md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div
                    variants={menuAnimation}
                    initial="initial"
                    animate="animate"
                    exit="close"
                    key="close"
                    className="size-8 flex items-center justify-center"
                  >
                    <X className="w-full" />
                  </motion.div>
                ) : (
                  <motion.div
                    variants={menuAnimation}
                    initial="initial"
                    animate="animate"
                    exit="close"
                    key="open"
                    className="size-8 flex items-center justify-center"
                  >
                    <Menu className="w-full" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <div className="bg-glow-header" />
    </>
  );
};

export default Navbar;
