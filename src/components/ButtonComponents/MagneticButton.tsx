import { ReactNode, useRef, useState } from 'react'
import { motion } from 'framer-motion';

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: any) => {
        const { clientX, clientY } = e;
        if (ref.current) {
            const { height, width, left, top } = ref.current.getBoundingClientRect();
            const middleX = clientX - (left + width / 2)
            const middleY = clientY - (top + height / 2)
            setPosition({ x: middleX, y: middleY })
        }
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default MagneticButton