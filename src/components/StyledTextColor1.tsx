import React from 'react'

interface StyledTextColor1Props {
    children: string;
    className?: string;
}

const StyledTextColor1: React.FC<StyledTextColor1Props> = ({ children, className }) => {
    return (
        <span className={`bg-gradient-to-r from-indigo-500 to-defaultblue bg-clip-text text-transparent ${className}`}>
            {children}
        </span>
    )
}

export default StyledTextColor1