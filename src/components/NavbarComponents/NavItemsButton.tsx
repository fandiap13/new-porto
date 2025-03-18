import React, { ReactNode } from 'react'
import MagneticButton from '../ButtonComponents/MagneticButton'
import { FaCircle } from 'react-icons/fa6'
import Link from 'next/link';

interface NavItemsButtonProps {
    title: string;
    href: string;
}

const NavItemsButton: React.FC<NavItemsButtonProps> = ({ href, title }) => {
    return (
        <Link href={href}>
            <MagneticButton
                className="relative flex flex-col items-center justify-center text-lg group"
            >
                <span>{title}</span>
                <div className="absolute top-[35px] flex items-center justify-center transform scale-0 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100">
                    <FaCircle className="w-2 h-2 text-white" />
                </div>
            </MagneticButton>
        </Link>
    )
}

export default NavItemsButton