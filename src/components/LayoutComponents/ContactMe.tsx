import { motion } from 'framer-motion'
import React from 'react'
import { FaArrowRight, FaUser, FaWhatsapp } from 'react-icons/fa6'
import { IoMailOutline, IoSend } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'

const ContactMe = () => {
    return (
        <section
            id="contact-me"
            className="text-white px-[20px] py-[100px]"
            style={{ background: "linear-gradient(180deg, #0F172A, #0c0c1d)" }}
        >
            <div className="2xl:max-w-screen-xl max-w-screen-lg mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-medium mb-2">CONTACT ME</h1>
                    <h3 className="text-defaultblue text-xl">Get In touch</h3>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
                    <div className="text-center">
                        <h2 className="text-2xl font-medium mb-6">Talk To Me</h2>
                        <div className="flex flex-col gap-5 items-center">
                            <div className="flex flex-col bg-primary border-2 border-primary justify-center rounded-2xl w-full group hover:bg-transparent items-center md:max-w-[350px] px-8 py-6 transition-all">
                                <MdOutlineMailOutline className="text-4xl" />
                                <div className="mb-5">
                                    <div className="text-lg font-medium">Email</div>
                                    <div className="!text-orangeCustom font-medium group-hover:!text-defaultblue/80">andiazizp123@gmail.com</div>
                                </div>
                                <div className="flex justify-center cursor-pointer items-center">
                                    <span>Write Me</span>
                                    <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 1, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}>
                                        <FaArrowRight className="text-inherit ml-4" />
                                    </motion.div>
                                </div>
                            </div>

                            <div className="flex flex-col bg-primary border-2 border-primary justify-center rounded-2xl w-full group hover:bg-transparent items-center md:max-w-[350px] px-8 py-6 transition-all">
                                <FaWhatsapp className="text-4xl" />
                                <div className="mb-5">
                                    <div className="text-lg font-medium">Whatsapp</div>
                                    <div className="!text-orangeCustom font-medium group-hover:!text-defaultblue/80">0895392518509</div>
                                </div>
                                <a href="" className="flex justify-center cursor-pointer items-center">
                                    <span>Write Me</span>
                                    <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 1, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}>
                                        <FaArrowRight className="text-inherit ml-4" />
                                    </motion.div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <h2 className="text-2xl font-medium mb-6">Write Me Your Project</h2>

                        <form>
                            <div className="mb-5">
                                <label className="input input-lg w-full validator">
                                    <FaUser className="h-5 w-5 opacity-50" />
                                    <input type="text" placeholder="Insert your name" required />
                                </label>
                                <div className="hidden validator-hint">Enter your name</div>
                            </div>

                            <div className="mb-5">
                                <label className="input input-lg w-full validator">
                                    <IoMailOutline className="h-5 w-5 opacity-50" />
                                    <input type="email" placeholder="mail@site.com" required />
                                </label>
                                <div className="hidden validator-hint">Enter valid email address</div>
                            </div>

                            <div className="mb-8">
                                <textarea placeholder="Description" className="w-full textarea textarea-lg"></textarea>
                            </div>

                            <div className="flex justify-start">
                                <button type="button" className="btn btn-lg btn-primary">
                                    Send Message
                                    <IoSend className="h-5 w-5 ml-2" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactMe