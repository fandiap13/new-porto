import React from 'react'
import { motion } from "framer-motion";
import { heroVariantSection } from '@/utils/utils';
import Typewriter from 'typewriter-effect';

const TypingRoleComponent = () => {
    return (
        <motion.p
            variants={heroVariantSection}
            initial="initial"
            animate="animate"
            className="text-xl sm:text-2xl font-medium flex items-center justify-center text-center
            bg-gradient-to-r from-purple-800 to-orangeCustom bg-clip-text text-transparent
            "
        >
            <span className='mr-1'>{`I'm a`}</span>
            <Typewriter
                options={{
                    strings: ["Front End Web Developer", 'Full Stack Web Developer'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </motion.p>
    )
}

export default TypingRoleComponent