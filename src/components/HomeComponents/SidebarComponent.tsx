import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import HamburgerMenuComponent from './HamburgerMenuComponent';
import { menuItems } from '@/utils/utils';

interface SidebarComponentProps {
    // open: boolean;
    // setOpen: (status: boolean) => void;
}

const variants = {
    visible: (i: number) => ({
        opacity: 1,
        // x: 100,
        y: 0,

        transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0 }
}

const sidebarVariants = {
    open: {
        // clipPath: "circle(1200px at 50px 50px)",
        clipPath: "circle(1200px at 330px 45px)",
        transition: {
            type: "spring",
            stiffness: 20,
        }
    },
    closed: {
        clipPath: "circle(25px at 330px 45px)",
        transition: {
            // delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        }
    }
}

const SidebarComponent: React.FC<SidebarComponentProps> = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleSetOpen = (status: boolean) => {
        setOpen(status);
    }

    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const [viewMenu, setViewMenu] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowSidebar(true);
            } else {
                setShowSidebar(false);
                setOpen(false);
            }

            if (window.scrollY > window.innerHeight) {
                setViewMenu(true);
            } else {
                setViewMenu(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            animate={open ? "open" : "closed"}
            // className={`fixed top-0 right-0 bottom-0 w-[400px] z-[9999] ${showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"} transition-colors 
            // ${viewMenu ? "bg-bgdark text-white" : "bg-white text-dark"}`}
            className={`fixed top-0 right-0 bottom-0 w-[400px] z-[9999] ${showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"} transition-colors 
            bg-white text-dark`}
            variants={sidebarVariants}
        >
            <div className={`flex justify-end mb-5 mt-[20px] mr-[46px]`}>
                <HamburgerMenuComponent open={open} setOpen={handleSetOpen} />
            </div>

            <div className='flex items-center justify-center'>
                <motion.ul
                    initial={"hidden"}
                    animate={open ? "visible" : "hidden"}
                    variants={variants}
                    className='flex flex-col gap-7 text-center'
                >
                    {menuItems.map((menu, i) => (
                        <motion.li
                            className='text-4xl font-light cursor-pointer' variants={variants}
                            custom={i}
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.a href={menu.href}>
                                {menu.name}
                            </motion.a>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </motion.div>
    )
}

export default SidebarComponent