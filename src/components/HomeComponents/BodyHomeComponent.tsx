"use client";

import { motion } from "framer-motion";
import { FaArrowDown, FaArrowRight, FaCircle, FaCss3Alt, FaDatabase, FaFlutter, FaGithub, FaInstagram, FaLaravel, FaReact, FaUser, FaUserTie, FaWhatsapp, FaYoutube } from "react-icons/fa6";
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
import { IoCodeSlash, IoMailOutline, IoSend } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import QualificationList from "./QualificationList";
import Footer from "../LayoutComponents/Footer";
import ContactMe from "../LayoutComponents/ContactMe";
import PortfolioComponent from "./PortfolioComponent";
import PortfolioComponentOld from "./PortfolioComponentOld";
import PortfolioCardImage from "./PortfolioCardImage";
import ShowDetailProjectComponent from "../ShowDetailProjectComponent";
import { useState } from "react";
import { DetailProjectProps } from "@/types/ProjectType";


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
    const [showModal, setShowModal] = useState(true);
    const [detaiProject, setDetailProject] = useState<DetailProjectProps | null>(null);

    const handleShowModal = (detail: DetailProjectProps) => {
        setShowModal(true);
        setDetailProject(detail);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setDetailProject(null);
    }

    return (
        <main className="h-full text-slate-300 w-full">
            {/* Navbar */}
            <section
                // style={{ background: "linear-gradient(180deg, #0F172A, #0c0c1d)" }}
                className="bg-gradient-to-bl h-[100dvh] w-full from-bgdark md:px-[58px] min-h-[100dvh] px-[30px] relative to-bgdark2"
            >
                <div className="flex justify-between absolute items-center left-[20px] md:static pt-[20px] right-[20px] top-0">
                    <Link href={"/"}>
                        <motion.h3
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-semibold"
                        >
                            <span>_Fandi</span>
                            <span className='text-defaultblue'>Az.</span>
                        </motion.h3>
                    </Link>

                    <div className="flex gap-5 items-center">
                        <div className="gap-5 hidden items-center md:!flex">
                            {menuItems.map((menu, i) => (
                                <NavItemsButton href={menu.href} key={i} title={menu.name} />
                            ))}
                        </div>

                        {/* <SwitchThemeComponent /> */}
                    </div>
                </div>

                <div className="flex h-full justify-center w-full items-center md:items-baseline">
                    <div className="text-center text-slate-300 max-w-screen-md mx-auto relative xl:max-w-screen-lg">
                        <motion.h3
                            variants={heroVariantSection}
                            initial="initial"
                            animate="animate"
                            className="text-3xl font-semibold leading-tight lg:text-5xl mb-5 md:leading-none md:mt-[80px] md:text-4xl mt-0 xl:text-6xl"
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
                            className="text-xl cursor-pointer font-medium group mt-6"
                        >
                            <a className="flex justify-center items-center">
                                <span className="duration-200 group-hover:border-b-2 group-hover:border-b-white transition">See About Me</span>
                                <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 1, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}><FaArrowRight className="h-5 w-5 ml-4" /></motion.div>
                            </a>
                        </motion.div> */}

                        <div className="flex flex-row justify-center gap-3 items-center mt-6">
                            <motion.a
                                href="#portofolio"
                                variants={heroVariantSection}
                                initial="initial"
                                animate="animate"
                                className="border rounded-xl text-sm cursor-pointer hover:bg-white hover:text-dark lg:px-6 lg:py-4 md:text-xl px-3 py-2 sm:text-lg transition-all"
                            >
                                <div className="flex justify-center items-center">
                                    <span>See Latest Project</span>
                                    <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 1, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}>
                                        <FaArrowRight className="text-inherit ml-4" />
                                    </motion.div>
                                </div>
                            </motion.a>
                            <motion.a
                                href="#contact-me"
                                variants={heroVariantSection}
                                initial="initial"
                                animate="animate"
                                className="bg-primary border rounded-xl text-sm text-white cursor-pointer hover:bg-transparent hover:text-white lg:px-6 lg:py-4 md:text-xl px-3 py-2 sm:text-lg transition-all"
                            >
                                <div className="flex justify-center items-center">
                                    <span>Contact Me</span>
                                </div>
                            </motion.a>
                        </div>

                        <div className="flex justify-center gap-8 items-center md:mt-10 mt-6">
                            <motion.a
                                target="_blank"
                                href="https://github.com/fandiap13"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <FaGithub className="text-2xl lg:text-4xl md:text-3xl" />
                            </motion.a>
                            <motion.a
                                target="_blank"
                                href="https://www.linkedin.com/in/fandi-aziz-pratama-9b1a0b255/"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <FaLinkedin className="text-2xl lg:text-4xl md:text-3xl" />
                            </motion.a>
                            <motion.a
                                target="_blank"
                                href="https://www.youtube.com/@fandiazizp1340"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                {/* <FaInstagram className="text-2xl lg:text-4xl md:text-3xl" /> */}
                                <FaYoutube className="text-2xl lg:text-4xl md:text-3xl" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* <motion.div
                    className="flex justify-center absolute bottom-6 items-center left-0 right-0"
                    initial={{ opacity: 0, y: -20 }} // Mulai dari sedikit di atas dan transparan
                    animate={{ opacity: 1, y: 0 }} // Muncul dengan fade-in dan turun ke posisi aslinya
                    exit={{ opacity: 0, y: 20 }} // Saat keluar, turun ke bawah dan fade-out
                    transition={{ duration: 0.5, ease: "easeOut" }} // Efek lebih smooth
                > */}

                <div className="flex justify-center absolute bottom-6 gap-x-2 items-center left-0 right-0">
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

                    <FaArrowDown className="h-4 w-4" />
                </div>

                <SidebarComponent />
                {/* <motion.div
                    variants={sliderVariation}
                    initial="initial"
                    animate="animate"
                    className="text-[#ffffff09] text-[50vh] w-[50%] absolute bottom-0 font-bold left-0 right-0 whitespace-nowrap z-0"
                >
                    FANDI AZIZ PRATAMA
                </motion.div> */}
            </section>

            <section
                id="about-me"
                className="px-[40px] py-[200px]"
                style={{ background: "linear-gradient(180deg, #0F172A, #0c0c1d)" }}
            >
                <div className="2xl:max-w-screen-xl max-w-screen-lg mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-medium mb-2">ABOUT ME</h1>
                        <h3 className="text-defaultblue text-xl">My Introduction</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                        <div className="flex justify-center">
                            {/* <Image
                                src="/images/foto.png"
                                width={350}
                                height={350}
                                alt="Scroll Icon"
                                className="rounded-xl object-cover"
                            /> */}
                            <Image
                                src="https://media.licdn.com/dms/image/v2/D5603AQEmjmlr_lqxEQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722920289294?e=1750896000&v=beta&t=GawtWYzgTYBrxqB0bQ0z-s33Tqyz-DoK5CyQNem1aCQ"
                                width={350}
                                height={350}
                                alt="Scroll Icon"
                                className="rounded-xl object-contain"
                            />
                        </div>

                        <div>
                            <div className="text-justify lg:text-left mb-6">
                                I am Fandi Aziz Pratama, a Web Developer specializing in building scalable, efficient, and high-performance web applications using Laravel and Next.js. I also have experience developing modern and responsive mobile applications with Flutter.
                                With a strong passion for continuous learning and a solid commitment to quality, I strive to bring innovative solutions to every project I work on. For me, every challenge is an opportunity to grow and create digital products that make a real impact.
                            </div>

                            <div className="flex flex-col md:flex-row gap-x-4 items-stretch md:items-center">
                                <motion.button
                                    variants={aboutVariantSection}
                                    initial="initial"
                                    animate="animate"
                                    className="bg-primary border border-primary rounded-xl text-white text-xl cursor-pointer hover:bg-transparent hover:text-white px-6 py-4 transition-all"
                                >
                                    <div className="flex flex-col justify-center gap-y-2 items-center">
                                        <FaUserTie className="h-6 w-6" />
                                        <div className="text-sm font-semibold">Experience</div>
                                        <div className="text-sm font-light">1 + Year</div>
                                    </div>
                                </motion.button>
                                {/* <motion.button
                                    variants={aboutVariantSection}
                                    initial="initial"
                                    animate="animate"
                                    className="bg-primary border border-primary rounded-xl text-white text-xl cursor-pointer hover:bg-transparent hover:text-white px-6 py-4 transition-all"
                                >
                                    <div className="flex flex-col justify-center gap-y-2 items-center">
                                        <FaUserTie className="h-6 w-6" />
                                        <div className="text-sm font-semibold">Complete</div>
                                        <div className="text-sm font-light">1000 + Projects</div>
                                    </div>
                                </motion.button> */}
                                <motion.button
                                    variants={aboutVariantSection}
                                    initial="initial"
                                    animate="animate"
                                    className="bg-primary border border-primary rounded-xl text-white text-xl cursor-pointer hover:bg-transparent hover:text-white px-6 py-4 transition-all"
                                >
                                    <div className="flex flex-col justify-center gap-y-2 items-center">
                                        <FaUserTie className="h-6 w-6" />
                                        <div className="text-sm font-semibold">Support</div>
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
                className="text-white px-[20px] py-[200px]"
                style={{ background: "linear-gradient(180deg, #0F172A, #0c0c1d)" }}
            >
                <div className="2xl:max-w-screen-xl max-w-screen-lg mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-medium mb-2">SKILLS</h1>
                        <h3 className="text-defaultblue text-xl">List Of My Skills Set</h3>
                    </div>

                    <div className="grid grid-cols-1 bg-primary rounded-xl md:grid-cols-3">
                        <div className="flex flex-col border-b-2 border-dark/50 items-center md:border-r-2 px-8 py-8">
                            <div className="bg-white p-3 rounded-full mb-1">
                                <TbDeviceIpadHorizontalCode className="h-10 text-primary w-10" />
                            </div>

                            <div className="text-base font-semibold mb-4 md:text-lg">FrontEnd</div>

                            <div className="flex flex-wrap justify-center text-lg gap-4 items-center">
                                {technologiesFrontEnd.map((tech, index) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div key={index} className="flex items-center">
                                            <Icon className="h-7 w-7 mr-1" /> {tech.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col border-b-2 border-dark/50 items-center md:border-r-2 px-8 py-8">
                            <div className="bg-white p-3 rounded-full mb-1">
                                <IoCodeSlash className="h-10 text-primary w-10" />
                            </div>

                            <div className="text-base font-semibold mb-4 md:text-lg">BackEnd</div>

                            <div className="flex flex-wrap justify-center text-lg gap-4 items-center">
                                {technologiesBackEnd.map((tech, index) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div key={index} className="flex items-center">
                                            <Icon className="h-7 w-7 mr-1" /> {tech.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex flex-col items-center px-8 py-8">
                            <div className="bg-white p-3 rounded-full mb-1">
                                <FaDatabase className="h-10 text-primary w-10" />
                            </div>

                            <div className="text-base font-semibold mb-4 md:text-lg">Database</div>

                            <div className="flex flex-wrap justify-center text-lg gap-4 items-center">
                                {technologiesDatabase.map((tech, index) => {
                                    const Icon = tech.icon;
                                    return (
                                        <div key={index} className="flex items-center">
                                            <Icon className="h-7 w-7 mr-1" /> {tech.name}
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
                className="text-white px-[20px] py-[200px]"
                style={{ background: "linear-gradient(180deg, #0F172A, #0c0c1d)" }}
            >
                <div className="2xl:max-w-screen-xl max-w-screen-lg mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-medium mb-2">QUALIFICATION</h1>
                        <h3 className="text-defaultblue text-xl">My Personal Journey</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">
                        <div className="bg-defaultblue/40 rounded-lg backdrop-blur-md hover:bg-defaultblue/60 px-8 py-8">
                            <QualificationList title="Universitas Duta Bangsa Surakarta" desc="Teknik Informatika" rentang="2020 s/d 2024" stat={"first"} />
                            <QualificationList title="SMK Negeri 2 Karanganyar" desc="Rekayasa Perangkat Lunak" rentang="2017 s/d 2020" stat={"end"} />
                        </div>
                        <div className="bg-defaultblue/40 rounded-lg backdrop-blur-md hover:bg-defaultblue/60 px-8 py-8">
                            <QualificationList title="PT Himalaya Indokarya" desc="Web Developer" rentang="Nov 2024 - Now" stat={"first"} />
                            <QualificationList title="BIIS Corp" desc="Fullstack Web Developer" rentang="June 2024 - Oct 2024" stat={"first"} />
                            <QualificationList title="PT Widya Imersif Teknologi" desc="Magang Staff IOT" rentang="Sep 2023 - Jan 2024" stat={"end"} />
                        </div>
                    </div>
                </div>
            </section>

            {/* portfolio component */}
            {/* <PortfolioComponent /> */}

            {/* <PortfolioComponentOld /> */}

            <section
                id="portofolio"
                className="text-white px-[20px] py-[200px]"
                style={{ background: "linear-gradient(180deg, #0F172A, #0c0c1d)" }}
            >
                <div className="2xl:max-w-screen-xl max-w-screen-lg mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-medium mb-2">PORTOFOLIO</h1>
                        <h3 className="text-defaultblue text-xl">Most Recet Project</h3>
                    </div>

                    <div className="container mx-auto flex items-center">
                        <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
                            {/* <div className="flex w-full sm:w-1/2 flex-wrap flex-col lg:flex-row flex-row-reverse"> */}
                            <div className="flex w-full sm:w-1/2 flex-wrap flex-col lg:flex-row">
                                <div className="w-full lg:w-1/2 p-1 md:p-2 overflow-hidden">
                                    <PortfolioCardImage
                                        className="w-full !h-[300px]"
                                        onClick={() => {
                                            handleShowModal({
                                                desc: "The JAE (JAS AEROEngineering) website is a pre-flight aircraft inspection platform I developed using Next.js, featuring a responsive interface and real-time data input system. It helps technicians efficiently and accurately document inspection results, integrated with the backend to support auditing processes and ensure flight safety.",
                                                title: "Website Jae Billing System",
                                                href: "https://jae.hastaerp.id/",
                                                image: "/images/jae/dashboard.png",
                                                tech: ["Next Js", "Laravel", "PostgreSQL", "MUI"],
                                                links: [
                                                    { link: "https://jae.hastaerp.id/", name: "Website" },
                                                ],
                                            });
                                        }}
                                        imgUrl="/images/jae/dashboard.png"
                                        title={
                                            "Website Jae Billing System"
                                        }
                                    />
                                </div>

                                <div className="w-full lg:w-1/2 p-1 md:p-2">
                                    <PortfolioCardImage
                                        className="w-full !h-[300px]"
                                        onClick={() => {
                                            handleShowModal({
                                                desc: "MAGNITUDE Website is a platform designed to manage the Work Order Management System for monitoring and reporting the condition of facilities, especially villas. Its key features include real-time condition reporting, photo documentation as evidence, and tracking the repair process. Built with Next.js for a responsive front-end and Laravel on the back-end, the website aims to enhance facility maintenance efficiency and ensure the repair process is easily monitored.",
                                                title: "Website Magnitude",
                                                href: "https://magnitude.hastaerp.id/",
                                                image: "/images/magnitude/dashboard.png",
                                                tech: ["Next Js", "Laravel", "PostgreSQL", "MUI"],
                                                links: [
                                                    { link: "https://magnitude.hastaerp.id/", name: "Website" },
                                                ],
                                            });
                                        }}
                                        imgUrl="/images/magnitude/dashboard.png"
                                        title={
                                            "Website Magnitude"
                                        }
                                    />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <PortfolioCardImage
                                        className="w-full !h-[300px]"
                                        onClick={() => {
                                            window.open("https://daftaronline.indonesiainjb.my/", "_blank");
                                        }}
                                        // onClick={() => {
                                        //     handleShowModal({
                                        //         desc: "MAGNITUDE Website is a platform designed to manage the Work Order Management System for monitoring and reporting the condition of facilities, especially villas. Its key features include real-time condition reporting, photo documentation as evidence, and tracking the repair process. Built with Next.js for a responsive front-end and Laravel on the back-end, the website aims to enhance facility maintenance efficiency and ensure the repair process is easily monitored.",
                                        //         title: "Website Magnitude",
                                        //         href: "https://magnitude.hastaerp.id/",
                                        //         image: "/images/magnitude/dashboard.png",
                                        //         tech: ["Next Js", "Tailwind", "Flowbite"],
                                        //         links: [
                                        //             { link: "https://daftaronline.indonesiainjb.my/", name: "Website" },
                                        //         ],
                                        //     });
                                        // }}
                                        imgUrl="/images/daftaronline/dashboard.png"
                                        title={
                                            "Daftaronline KJRI JB, (Front End Developer)"
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex w-full sm:w-1/2 flex-wrap flex-col lg:flex-row">
                                <div className="w-full p-1 md:p-2">
                                    <PortfolioCardImage
                                        className="w-full !h-[300px]"
                                        onClick={() => {
                                            handleShowModal({
                                                desc: "As a mobile app developer for the Kios Sehat Kit Support project, I was responsible for developing the application using Flutter. The app is designed to control WISH devices from Widya Imersif, specifically for managing the WiFi connection on these devices using Bluetooth Low Energy (BLE) communication protocol. By utilizing BLE, the app ensures minimal power consumption while maintaining optimal connectivity between the devices and the mobile app. Key features of the app include the ability to change or set the WiFi network on the WISH device, efficient management of the connection through BLE, and a simple, intuitive interface that allows users to easily control their health devices quickly and without difficulty.",
                                                title: "Aplikasi Kios Sehat Kit Portable",
                                                image: "/images/kios-sehat-kit-portable/devices.jpeg",
                                                tech: ["Flutter", "BLE"],
                                            });
                                        }}
                                        imgUrl="/images/kios-sehat-kit-portable/devices.jpeg"
                                        title={
                                            "Aplikasi Kios Sehat Kit Portable"
                                        }
                                    />
                                </div>
                                <div className="w-full lg:w-1/2 p-1 md:p-2">
                                    <PortfolioCardImage
                                        className="w-full !h-[300px]"
                                        onClick={() => {
                                            handleShowModal({
                                                desc: "This project involves developing a mobile health monitoring app using Dart and Flutter, integrating two health sensors: MAX30102 for measuring blood oxygen levels and heart rate, and MLX90614 for measuring body temperature. The sensors are connected via an ESP32 microcontroller using Bluetooth Low Energy (BLE) to transmit data to the app, with Firebase Firestore used for data storage. The app allows users to monitor their health in real-time, displaying data like blood oxygen levels, heart rate, and body temperature. It also stores the data on the server for future access, providing a user-friendly interface that enables independent health checks anytime and anywhere. Additionally, BLE ensures low power consumption, allowing extended use without frequent battery recharging.",
                                                title: "Aplikasi Mobile Monitoring Detak Jantung, Saturasi Oksigen, dan Suhu Tubuh",
                                                image: "/images/aplikasi-monitoring/home.jpeg",
                                                tech: ["Flutter", "BLE", "Firebase"],
                                                links: [
                                                    { link: "https://github.com/fandiap13/my_health_app", name: "SC Mobile" },
                                                    { link: "https://github.com/fandiap13/ESP32_BLE_HEALTH_CHECK", name: "SC Hardware" },
                                                    { link: "https://drive.google.com/drive/folders/11-lVlcKWbfRn01LxdqEn9x_P1i5rrLNz", name: "Demo" },
                                                ],
                                            });
                                        }}
                                        imgUrl="/images/aplikasi-monitoring/home.jpeg"
                                        title={
                                            "Aplikasi Mobile Monitoring Detak Jantung, Saturasi Oksigen, dan Suhu Tubuh"
                                        }
                                    />
                                </div>
                                <div className="w-full lg:w-1/2 p-1 md:p-2">
                                    <PortfolioCardImage
                                        className="w-full !h-[300px]"
                                        onClick={() => {
                                            handleShowModal({
                                                desc: `This app is the result of my internship experience at Widya Imersif Teknologi, where I worked in the Internet of Things (IoT) division responsible for application development. My task was to create a Proof of Concept (PoC) for the mobile app "Wish Health Kios Sehat Portable" using Flutter. The app integrates three main sensors: the Pulse Oximeter FS20D for checking blood oxygen levels and heart rate, the ADF-B38A Thermometer for measuring body temperature, and the Onemed IF2050A weight sensor for monitoring body weight. These sensors are integrated via Bluetooth Low Energy (BLE) to ensure efficient health monitoring. The main goal of the project is to introduce a more efficient way to manage personal health data while providing an easily accessible and practical solution for everyday health monitoring. Key features include user login and registration, managing health check data, monitoring health indicators such as oxygen saturation, heart rate, body temperature, weight, and BMI, as well as the ability to edit user profiles.`,
                                                title: "Proyek PoC Magang WHK Portable",
                                                image: "/images/whk-portable/pemindaian perangkat 2.png",
                                                tech: ["Flutter", "BLE"],
                                                links: [
                                                    { link: "https://github.com/fandiap13/magang_WHKPortable", name: "Source Code" },
                                                    { link: "https://drive.google.com/file/d/11OiVac-IH1dTjktOPiwYpR9DZDjXy1Je/view?usp=sharing", name: "Demo" },
                                                ],
                                            });
                                        }}
                                        imgUrl="/images/whk-portable/pemindaian perangkat 2.png"
                                        title={
                                            "Proyek PoC Magang WHK Portable"
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactMe />

            <Footer />

            {(showModal && detaiProject) && (
                <ShowDetailProjectComponent onClose={handleCloseModal} openModal={showModal} data={detaiProject} />
            )}
        </main >
    );
}

export default BodyHomeComponent;