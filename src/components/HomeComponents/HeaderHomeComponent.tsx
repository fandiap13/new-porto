import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import SidebarComponent from './SidebarComponent';
import SwitchTemeComponent from '../SwitchTemeComponent';
import Link from 'next/link';

const HeaderHomeComponent = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setShowSidebar(true);
            } else {
                setShowSidebar(false);
            }
        };

        console.log(window.scrollY);
        console.log(window.innerHeight);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    console.log({ showSidebar });

    return (
        // <div className="fixed bg-transparent top-0 right-0 left-0 h-[90px] pl-[45px] pr-[115px] flex items-center justify-between z-[9999]">
        <div className="w-full h-[90px] pl-[45px] pr-[115px] flex items-center justify-between">
            <Link href={"/"}>
                <motion.h3
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-semibold text-3xl"
                >
                    <span>_Fandi</span>
                    <span className='text-blue-600'>Az.</span>
                </motion.h3>
            </Link>

            {/* menu right props */}
            {/* <div className="flex items-center gap-4">
                <SwitchTemeComponent />
            </div> */}

            <SidebarComponent />
        </div>

    )
}

export default HeaderHomeComponent