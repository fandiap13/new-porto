import { DetailProjectProps } from '@/types/ProjectType'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { IoChevronBackCircleOutline } from 'react-icons/io5'

interface ShowDetailProjectComponentProps {
    openModal: boolean;
    onClose: () => void;
    data: DetailProjectProps;
}

const ShowDetailProjectComponent: React.FC<ShowDetailProjectComponentProps> = ({ onClose, openModal, data }) => {
    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = "hidden"; // disable scroll
        } else {
            document.body.style.overflow = ""; // enable scroll lagi
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [openModal]);

    return (
        <motion.div
            className={`fixed inset-0 z-[9999] bg-dark/70 flex justify-end`}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: openModal ? 0 : "100%", opacity: openModal ? 1 : 0 }}
            transition={{
                x: { type: "tween", duration: 0.5 },
                opacity: { duration: 0.8 }
            }}
        >
            <motion.div
                className={`w-full md:w-[40%] h-[100dvh] bg-dark shadow border-l-[1px] border-l-slate-800 ${data.href ? "pb-[80px]" : "pb-5"} relative`}
            // initial={{ x: "100%" }}
            // animate={{ x: openModal ? 0 : "100%" }}
            // transition={{ type: 'tween', duration: 0.5 }}
            >
                <div className='w-full h-full overflow-y-auto px-8 py-8'>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        type='button'
                        className='mb-5'
                        onClick={onClose}
                    >
                        <IoChevronBackCircleOutline className='w-12 h-12' />
                    </motion.button>

                    <div>
                        <div className='mb-6'>
                            <h2 className='font-semibold text-lg'>{data.title}</h2>
                            {/* <h2 className='font-semibold text-lg mb-3'>Ini Judul</h2> */}
                            {/* <h5 className='text-base'>Ini Sub Judul</h5> */}
                        </div>

                        <div className="mb-4 relative w-full h-[250px] bg-primary/80 rounded-lg 2xl:rounded-2xl overflow-hidden">
                            <Image
                                src={data.image}
                                alt={"Porto Image"}
                                title={"Porto Image"}
                                className="rounded-lg 2xl:rounded-2xl object-contain object-center"
                                fill
                            />
                        </div>

                        <div className='mb-6'>
                            <h2 className='font-semibold text-lg mb-3'>About</h2>
                            <p className='text-sm text-justify'>{data.desc}</p>
                        </div>

                        <div className='mb-6'>
                            <h2 className='font-semibold text-lg mb-3'>Technologies</h2>
                            <div className='w-full flex flex-wrap items-center gap-3'>
                                {data.tech.map(tec => (
                                    <div key={tec} className='px-4 py-2 bg-primary text-white font-medium'>{tec}</div>
                                ))}
                            </div>
                        </div>

                        {data.links && data.links.map(link => (
                            <div className='mb-3' key={link.name}>
                                <h2 className='font-semibold text-lg mb-3'>{link.name}</h2>
                                <a href={link.link} className='hover:underline text-defaultblue' target='_blank'>{link.link}/</a>
                            </div>
                        ))}
                    </div>
                </div>

                {data.href && (
                    <a href={data.href} target='_blank' className='group absolute bottom-0 right-0 left-0 px-6 py-5 font-semibold text-lg bg-primary text-white '>
                        <div className='flex justify-center items-center no-underline group-hover:!underline'>
                            <FaExternalLinkAlt className='text-inherit mr-2' /> <span>Open Project</span>
                        </div>
                    </a>
                )}
            </motion.div>
        </motion.div>
    )
}

export default ShowDetailProjectComponent