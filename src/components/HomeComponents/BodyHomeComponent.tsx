"use client";

import { motion } from "framer-motion";
import { FaArrowDown, FaArrowRight, FaCircle, FaCss3Alt, FaDatabase, FaFlutter, FaGithub, FaInstagram, FaLaravel, FaReact, FaUserTie } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import SidebarComponent from "./SidebarComponent";
import { aboutVariantSection, heroVariantSection, menuItems } from "@/utils/utils";
import TypingRoleComponent from "./TypingRoleComponent";
import StyledTextColor1 from "../StyledTextColor1";
import Link from "next/link";
import SwitchThemeComponent from "../SwitchTemeComponent";
import NavItemsButton from "../NavbarComponents/NavItemsButton";
import Image from "next/image";
import { TbDeviceIpadHorizontalCode } from "react-icons/tb";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoCodeSlash } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";


// const sliderVariation = {
//     initial: {
//         x: 0
//     },
//     animate: {
//         x: "-220%",
//         transition: {
//             repeat: Infinity,
//             repeatType: "mirror",
//             // repeatType: "mirror",
//             duration: 20,
//         }
//     }
// };

// const secondTextVariant = {
//     initial: {
//         opacity: 0,
//     },
//     hover: {
//         opacity: 1,
//         transition: {
//             opacity: {
//                 duration: 1.125,
//                 ease: [0.19, 1, 0.22, 1],
//             }
//         },
//     },
//     animate: {
//         opacity: 1,
//         transition: {
//             opacity: {
//                 duration: 1.125,
//                 ease: [0.19, 1, 0.22, 1],
//             }
//         },
//     },
// };

const technologiesFrontEnd = [
    { icon: RiNextjsFill, name: "Next.Js" },
    { icon: FaReact, name: "React" },
    { icon: BsFillBootstrapFill, name: "Bootstrap" },
    { icon: FaCss3Alt, name: "CSS" },
    { icon: RiTailwindCssFill, name: "Tailwind" },
    { icon: FaFlutter, name: "Flutter" }
];

const technologiesBackEnd = [
    { icon: FaLaravel, name: "Laravel" },
    { icon: SiExpress, name: "Express.Js" },
];

const technologiesDatabase = [
    { icon: SiMysql, name: "MySql" },
    { icon: BiLogoPostgresql, name: "PostgreSQL" },
];

const BodyHomeComponent = () => {
    return (
        <main className="w-full h-full text-slate-300">
            {/* Navbar */}
            <section
                // style={{ background: "linear-gradient(180deg, #0F172A, #0c0c1d)" }}
                className="w-full h-screen min-h-screen px-[30px] md:px-[58px] bg-gradient-to-bl from-bgdark to-bgdark2 relative"
            >
                <div className="absolute top-0 right-[20px] left-[20px] md:static flex items-center justify-between pt-[20px]">
                    <Link href={"/"}>
                        <motion.h3
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="font-semibold text-3xl"
                        >
                            <span>_Fandi</span>
                            <span className='text-defaultblue'>Az.</span>
                        </motion.h3>
                    </Link>

                    <div className="flex items-center gap-5">
                        <div className="hidden md:!flex items-center gap-5">
                            {menuItems.map((menu, i) => (
                                <NavItemsButton href={menu.href} key={i} title={menu.name} />
                            ))}
                        </div>

                        {/* <SwitchThemeComponent /> */}
                    </div>
                </div>

                <div className="w-full h-full flex justify-center items-center md:items-baseline">
                    <div className="max-w-screen-md xl:max-w-screen-lg mx-auto text-center text-slate-300 relative">
                        <motion.h3
                            variants={heroVariantSection}
                            initial="initial"
                            animate="animate"
                            className="mt-0 md:mt-[80px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-5 font-semibold leading-tight md:leading-none"
                        >
                            <div>
                                Hi, I'm <StyledTextColor1>Fandi Aziz Pratama</StyledTextColor1>
                            </div>
                            <div>
                                But You Can Call Me <StyledTextColor1>FandiAz</StyledTextColor1>
                            </div>
                        </motion.h3>

                        <TypingRoleComponent />

                        {/* <motion.div
                            variants={heroVariantSection}
                            initial="initial"
                            animate="animate"
                            className="mt-6 text-xl font-medium group cursor-pointer"
                        >
                            <a className="flex items-center justify-center">
                                <span className="group-hover:border-b-2 group-hover:border-b-white transition duration-200">See About Me</span>
                                <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 1, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}><FaArrowRight className="w-5 h-5 ml-4" /></motion.div>
                            </a>
                        </motion.div> */}

                        <div className="mt-6 flex flex-row items-center justify-center gap-3">
                            <motion.button
                                variants={heroVariantSection}
                                initial="initial"
                                animate="animate"
                                className="text-sm sm:text-lg md:text-xl cursor-pointer border rounded-xl px-3 py-2 lg:px-6 lg:py-4 hover:bg-white hover:text-dark transition-all"
                            >
                                <div className="flex items-center justify-center">
                                    <span>See Latest Project</span>
                                    <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 1, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}>
                                        <FaArrowRight className="text-inherit ml-4" />
                                    </motion.div>
                                </div>
                            </motion.button>
                            <motion.button
                                variants={heroVariantSection}
                                initial="initial"
                                animate="animate"
                                className="text-sm sm:text-lg md:text-xl cursor-pointer border rounded-xl px-3 py-2 lg:px-6 lg:py-4 bg-primary text-white hover:bg-transparent hover:text-white transition-all"
                            >
                                <div className="flex items-center justify-center">
                                    <span>Contact Me</span>
                                </div>
                            </motion.button>
                        </div>

                        <div className="mt-6 md:mt-10 flex items-center justify-center gap-8">
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <FaGithub className="text-2xl md:text-3xl lg:text-4xl" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <FaInstagram className="text-2xl md:text-3xl lg:text-4xl" />
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* <motion.div
                    className="absolute bottom-6 left-0 right-0 flex items-center justify-center"
                    initial={{ opacity: 0, y: -20 }} // Mulai dari sedikit di atas dan transparan
                    animate={{ opacity: 1, y: 0 }} // Muncul dengan fade-in dan turun ke posisi aslinya
                    exit={{ opacity: 0, y: 20 }} // Saat keluar, turun ke bawah dan fade-out
                    transition={{ duration: 0.5, ease: "easeOut" }} // Efek lebih smooth
                > */}

                <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-x-2">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }} // Mulai dari sedikit di atas dan transparan
                        animate={{ opacity: [0, 1], y: [-10, 0] }} // Fade-in dan turun ke posisi awal
                        transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }} // Animasi berulang
                    >
                        <Image
                            src="/images/scroll.png"
                            width={40}
                            height={40}
                            alt="Scroll Icon"
                            style={{ objectFit: "contain" }}
                        />
                    </motion.div>

                    <div className="font-medium">Scroll Down</div>

                    <FaArrowDown className="w-4 h-4" />
                </div>

                <SidebarComponent />
                {/* <motion.div
                    variants={sliderVariation}
                    initial="initial"
                    animate="animate"
                    className="absolute bottom-0 right-0 left-0 font-bold w-[50%] text-[50vh] whitespace-nowrap text-[#ffffff09] z-0"
                >
                    FANDI AZIZ PRATAMA
                </motion.div> */}
            </section>

            <section
                id="about-me"
                className="py-[100px] px-[40px]"
                style={{ background: "linear-gradient(180deg, #0F172A, #0c0c1d)" }}
            >
                <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="font-medium text-3xl mb-2">ABOUT ME</h1>
                        <h3 className="text-defaultblue text-xl">My Introduction</h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        <div className="flex justify-center">
                            <Image
                                src="/images/foto.png"
                                width={350}
                                height={350}
                                alt="Scroll Icon"
                                className="object-contain rounded-xl"
                            />
                        </div>

                        <div>
                            <div className="mb-6 text-justify lg:text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugiat aliquid fugit ad voluptatibus, accusamus quas qui, quis, voluptates alias enim id autem dolore incidunt minus possimus doloremque tempore maxime beatae! Optio praesentium asperiores officiis commodi. Eos ea, placeat possimus inventore molestiae non sequi voluptates animi consequuntur fugit vel eius!
                            </div>

                            <div className="flex items-stretch md:items-center gap-x-4">
                                <motion.button
                                    variants={aboutVariantSection}
                                    initial="initial"
                                    animate="animate"
                                    className="text-xl cursor-pointer border border-primary rounded-xl px-6 py-4 bg-primary text-white hover:bg-transparent hover:text-white transition-all"
                                >
                                    <div className="flex flex-col items-center justify-center gap-y-2">
                                        <FaUserTie className="w-6 h-6" />
                                        <div className="font-semibold text-sm">Experience</div>
                                        <div className="text-sm font-light">1 + Year</div>
                                    </div>
                                </motion.button>
                                <motion.button
                                    variants={aboutVariantSection}
                                    initial="initial"
                                    animate="animate"
                                    className="text-xl cursor-pointer border border-primary rounded-xl px-6 py-4 bg-primary text-white hover:bg-transparent hover:text-white transition-all"
                                >
                                    <div className="flex flex-col items-center justify-center gap-y-2">
                                        <FaUserTie className="w-6 h-6" />
                                        <div className="font-semibold text-sm">Complete</div>
                                        <div className="text-sm font-light">1000 + Projects</div>
                                    </div>
                                </motion.button>
                                <motion.button
                                    variants={aboutVariantSection}
                                    initial="initial"
                                    animate="animate"
                                    className="text-xl cursor-pointer border border-primary rounded-xl px-6 py-4 bg-primary text-white hover:bg-transparent hover:text-white transition-all"
                                >
                                    <div className="flex flex-col items-center justify-center gap-y-2">
                                        <FaUserTie className="w-6 h-6" />
                                        <div className="font-semibold text-sm">Support</div>
                                        <div className="text-sm font-light">Online 24/7</div>
                                    </div>
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="skills"
                className="py-[100px] px-[20px] text-white"
                style={{ background: "linear-gradient(180deg, #0F172A, #0c0c1d)" }}
            >
                <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="font-medium text-3xl mb-2">SKILLS</h1>
                        <h3 className="text-defaultblue text-xl">List Of My Skills Set</h3>
                    </div>

                    <div className="bg-primary rounded-xl grid grid-cols-1 md:grid-cols-3">
                        <div className="px-8 py-8 border-b-2 md:border-r-2 flex flex-col items-center border-dark/50">
                            <div className="bg-white p-3 rounded-full mb-1">
                                <TbDeviceIpadHorizontalCode className="w-10 h-10 text-primary" />
                            </div>

                            <div className="font-semibold text-base md:text-lg mb-4">FrontEnd</div>

                            <div className="text-lg flex items-center flex-wrap justify-center gap-4">
                                {technologiesFrontEnd.map((tech, index) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div key={index} className="flex items-center">
                                            <Icon className="w-7 h-7 mr-1" /> {tech.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="px-8 py-8 border-b-2 md:border-r-2 flex flex-col items-center border-dark/50">
                            <div className="bg-white p-3 rounded-full mb-1">
                                <IoCodeSlash className="w-10 h-10 text-primary" />
                            </div>

                            <div className="font-semibold text-base md:text-lg mb-4">BackEnd</div>

                            <div className="text-lg flex items-center flex-wrap justify-center gap-4">
                                {technologiesBackEnd.map((tech, index) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div key={index} className="flex items-center">
                                            <Icon className="w-7 h-7 mr-1" /> {tech.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="px-8 py-8 flex flex-col items-center">
                            <div className="bg-white p-3 rounded-full mb-1">
                                <FaDatabase className="w-10 h-10 text-primary" />
                            </div>

                            <div className="font-semibold text-base md:text-lg mb-4">Database</div>

                            <div className="text-lg flex items-center flex-wrap justify-center gap-4">
                                {technologiesDatabase.map((tech, index) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div key={index} className="flex items-center">
                                            <Icon className="w-7 h-7 mr-1" /> {tech.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="qualification"
                className="py-[100px] px-[20px] text-white"
                style={{ background: "linear-gradient(180deg, #0F172A, #0c0c1d)" }}
            >
                <div className="max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="font-medium text-3xl mb-2">QUALIFICATION</h1>
                        <h3 className="text-defaultblue text-xl">My Personal Journey</h3>
                    </div>

                    <div></div>
                </div>
            </section>
        </main>
    );
}

export default BodyHomeComponent;