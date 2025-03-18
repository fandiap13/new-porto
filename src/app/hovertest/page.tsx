"use client"

import { useState } from 'react';
import styles from './page.module.scss'
import { motion } from 'framer-motion'
import useMousePosition from '@/utils/useMousePosition';

export default function Home() {
  const [isHover, setIsHover] = useState<boolean>(false);
  const { x, y } = useMousePosition();
  const cursorHoverSize = isHover ? 300 : 30;

  const handleHoverActive = () => {
    setIsHover(true);
  }

  const handleHoverNotActive = () => {
    setIsHover(false);
  }

  console.log({ isHover });

  return (
    <main className="h-screen bg-red-300 relative">
      <motion.div
        className={`${styles.mask} w-full h-full flex items-center justify-center`}
        animate={{
          WebkitMaskPosition: `${(x ?? 0) - (cursorHoverSize / 2)}px ${(y ?? 0) - (cursorHoverSize / 2)}px`,
          WebkitMaskSize: `${cursorHoverSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p className="text-4xl text-slate-700 font-medium subpixel-antialiased tracking-tight leading-normal max-w-screen-md" onMouseEnter={handleHoverActive} onMouseLeave={handleHoverNotActive}>
          Perusahaan itu sendiri adalah perusahaan yang sangat sukses. Saya telah menerima banyak hal, tetapi kami akan membawanya ke konsekuensinya, kadang-kadang harus disalahkan atas kesenangannya!
        </p>
      </motion.div>

      <div className='w-full h-full flex items-center justify-center'>
        <p className="text-4xl text-slate-700 font-medium subpixel-antialiased tracking-tight leading-normal max-w-screen-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <a className="text-sky-600 cursor-pointer">
            Adipisci magnam ipsa vero ducimus</a> eius consequatur, est quibusdam tempora reprehenderit voluptatibus!
        </p>
      </div>
    </main>
  );
}
