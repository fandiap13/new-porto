import { portofolioItems, portofolioItemsProps } from '@/utils/utils';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react'

interface SingleProps {
    item: portofolioItemsProps;
}

const Single: React.FC<SingleProps> = ({ item }) => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section
            className='h-[100vh] w-full overflow-hidden'
            style={{ scrollSnapAlign: "center" }}
        >
            {/* container */}
            <div className='flex h-full justify-center w-full items-center overflow-hidden'>
                {/* wrapper */}
                <div className='flex flex-col h-full justify-center m-auto gap-[50px] items-center md:flex-row' >
                    {/* image container */}
                    <div className='flex-1 h-1/2 w-full max-h-[300px] md:max-h-none md:w-auto' ref={ref}>
                        <img src={item.img} className='h-full w-full md:object-cover object-fit-contain' alt={item.title} />
                    </div>
                    {/* textcontainer */}
                    <motion.div
                        className='flex flex-1 flex-col justify-center gap-[30px] items-center md:items-baseline md:justify-normal'
                        style={{ y }}
                    >
                        <h2 className='text-7xl'>{item.title}</h2>
                        <p className='text-slate-400 text-xl w-full'>{item.desc}</p>
                        <button className='bg-primary border-none rounded-lg text-xl w-[200px] cursor-pointer px-[10px] py-[15px]'>
                            Preview
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const PortfolioComponent = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div
            ref={ref}
            id="portofolio"
            className="text-white overflow-visible px-[20px] py-[100px] relative"
            style={{ background: "linear-gradient(180deg, #0F172A, #0c0c1d)" }}
        >
            {/* pt-[calc(100vh-100px)] s */}
            <div
                className="2xl:max-w-screen-xl left-0 max-w-screen-lg mx-auto pt-[50px] sticky top-0 z-[9999]"
            >
                <div className="text-center mb-12">
                    <h1 className="text-3xl text-white font-medium mb-2">PORTOFOLIO</h1>
                    <h3 className="text-defaultblue text-xl">Most Recent Project</h3>
                    {/* Progress bar */}
                    <motion.div style={{ scaleX }} className='bg-defaultblue/80 h-[8px] rounded-full mt-[10px]'></motion.div>
                </div>
            </div>

            {portofolioItems.map((porto) => (
                <Single item={porto} key={porto.id} />
            ))}
        </div>
    )
}

export default PortfolioComponent