import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const SwitchThemeComponent = () => {
    const [darkMode, setDarkMode] = useState<boolean>(true);

    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="relative w-10 h-10 flex items-center justify-center overflow-hidden mr-30px"
        >
            <AnimatePresence mode="wait">
                {darkMode ? (
                    <motion.div
                        key="dark"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                    >
                        <MdOutlineDarkMode className="w-8 h-8" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="light"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                    >
                        <MdOutlineLightMode className="w-8 h-8" />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
};

export default SwitchThemeComponent;
