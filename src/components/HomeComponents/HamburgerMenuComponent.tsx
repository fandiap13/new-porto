import React, { useEffect, useState } from 'react'

interface HamburgerMenuComponentProps {
    open: boolean;
    setOpen: (status: boolean) => void;
    className?: string;
}
const HamburgerMenuComponent: React.FC<HamburgerMenuComponentProps> = ({ setOpen, open, className }) => {
    return (
        <div className={className}>
            <button
                className="w-12 h-12 relative focus:outline-none"
                onClick={() => setOpen(!open)}
            >
                <div className="w-6 absolute left-[51%] top-[48%] transform -translate-x-1/2 -translate-y-1/2">
                    <span
                        aria-hidden="true"
                        className={`block rounded-lg absolute h-1 w-full bg-current transform transition duration-500 ease-in-out ${open ? "rotate-45" : "-translate-y-2"
                            }`}
                    ></span>
                    <span
                        aria-hidden="true"
                        className={`block rounded-lg absolute h-1 w-full bg-current transform transition duration-500 ease-in-out ${open ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        aria-hidden="true"
                        className={`block rounded-lg absolute h-1 w-full bg-current transform transition duration-500 ease-in-out ${open ? "-rotate-45" : "translate-y-2"
                            }`}
                    ></span>
                </div>
            </button>
        </div>
    )
}

export default HamburgerMenuComponent

