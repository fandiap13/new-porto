"use client"

import BodyHomeComponent from '@/components/HomeComponents/BodyHomeComponent'
import LoadingPageComponent from '@/components/LoadingPageComponent';
import React, { useEffect, useState } from 'react'

const PortfolioPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
    }, []);

    if (isLoading) {
        return <LoadingPageComponent />
    }

    return (
        <BodyHomeComponent />
    )
}

export default PortfolioPage