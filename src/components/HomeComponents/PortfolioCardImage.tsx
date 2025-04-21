import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react'

interface PortfolioCardImageProps {
    title: string;
    imgUrl: string;
    titleImage?: string;
    onClick?: () => void;
    className?: string;
}

const PortfolioCardImage: React.FC<PortfolioCardImageProps> = ({ title, imgUrl, titleImage, onClick, className }) => {
    const [isHover, setIsHover] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(150% at 50% 50%)",
            transition: {
                // type: "spring",
                // stiffness: 20,
                type: "spring",
                stiffness: 200,
                damping: 40,
            }
        },
        closed: {
            clipPath: "circle(0% at 50% 100%)",
            transition: {
                // delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    };

    return (
        <div
            onClick={onClick}
            className={`w-full h-full relative cursor-pointer group overflow-hidden rounded-lg 2xl:rounded-2xl ${className}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <img
                title={titleImage || "Porto Image"}
                alt="gallery"
                className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                src={imgUrl}
            />

            {/* <div className="relative w-full h-full">
                <Image
                    src={imgUrl}
                    alt={titleImage || "Porto Image"}
                    title={titleImage || "Porto Image"}
                    className="rounded-lg 2xl:rounded-2xl object-cover object-center"
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div> */}

            <motion.div
                variants={variants}
                initial={"closed"}
                animate={isHover ? "open" : "close"}
                className="absolute inset-0 bg-primary bg-opacity-50 rounded-lg 2xl:rounded-2xl flex items-end justify-center pb-5"
            >
                <div className="text-white px-2 font-medium text-center">
                    {title}
                </div>
            </motion.div>
        </div>
    )
}

export default PortfolioCardImage