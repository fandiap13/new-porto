import { ProjectListProps } from "@/types";

export const navLinks = [
  // {
  //   name: "Work",
  //   link: "#work",
  // },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Portofolio",
    link: "#work",
  },
];
export const projects: ProjectListProps[] = [
  {
    id: 1,
    title: "JAE Billing System",
    description:
      "A pre-flight aircraft inspection platform built with Next.js. Helps technicians log inspection data in real-time, integrated with the backend to support audit processes and flight safety.",
    image: "/images/jae/dashboard.png",
    tech: ["Next.js", "Laravel", "PostgreSQL", "MUI"],
    link: "https://jae.hastaerp.id/",
  },
  {
    id: 2,
    title: "Magnitude",
    description:
      "A Work Order Management System for monitoring and reporting facility conditions at villa properties. Features real-time reporting, photo documentation, and repair tracking.",
    image: "/images/magnitude/dashboard.png",
    tech: ["Next.js", "Laravel", "PostgreSQL", "MUI"],
    link: "https://magnitude.hastaerp.id/",
  },
  {
    id: 3,
    title: "Daftaronline KJRI JB",
    description:
      "An online registration website for KJRI Johor Bahru. Built as Front End Developer with a clean, responsive interface and a smooth registration flow.",
    image: "/images/daftaronline/dashboard.png",
    tech: ["Next.js", "Tailwind", "Flowbite"],
    link: "https://daftaronline.indonesiainjb.my/",
  },
  {
    id: 4,
    title: "Kios Sehat Kit Portable",
    description:
      "A Flutter app to configure WISH health devices over Bluetooth Low Energy (BLE). Users can easily set up the device's WiFi connection directly from their phone.",
    image: "/images/kios-sehat-kit-portable/devices.jpeg",
    tech: ["Flutter", "BLE"],
  },
  {
    id: 5,
    title: "Heart Rate, SpO2 & Body Temp Monitor",
    description:
      "A mobile health monitoring app using MAX30102 and MLX90614 sensors connected via ESP32 BLE. Displays live health data and stores records in Firebase Firestore.",
    image: "/images/aplikasi-monitoring/home.jpeg",
    tech: ["Flutter", "BLE", "Firebase"],
    link: "https://github.com/fandiap13/my_health_app",
  },
  {
    id: 6,
    title: "WHK Portable — Internship PoC",
    description:
      "A proof-of-concept app for Wish Health Kios Sehat Portable. Integrates SpO2, thermometer, and weight sensors via BLE for independent personal health monitoring.",
    image: "/images/whk-portable/pemindaian perangkat 2.png",
    tech: ["Flutter", "BLE"],
    link: "https://github.com/fandiap13/magang_WHKPortable",
  },
];

export const works = [
  {
    role: "Web Developer",
    company: "PT Himalaya Indokarya",
    period: "Nov 2024 – Present",
    description: [
      "Redesigned the HI-Queue queue management system from a Laravel monolith into a decoupled architecture using Next.js for the frontend and Express.js for the backend.",
      "Integrated and optimized the system's existing WebSocket-based real-time queue synchronization to improve live queue data updates.",
      "Developed the queue data flow to handle concurrent multi-user access more reliably.",
      "Optimized frontend–backend integration to improve overall system responsiveness.",
    ],
    comment:
      "Breaking a working monolith apart taught me more about architecture than any tutorial could — especially how much care real-time data needs when many users hit it at once.",
  },
  {
    role: "Fullstack Web Developer",
    company: "BIIS Corp",
    period: "Jun 2024 – Oct 2024",
    description: [
      "Developed Magnitude, a Work Order Management System built with Next.js for reporting facility conditions, documentation, and repair process tracking.",
      "Built JAE (JAS Aero Engineering), a web-based aircraft inspection system for pre-flight check processes, integrated with the backend.",
      "Implemented production-ready frontend interfaces with a focus on performance and maintainability.",
    ],
    comment:
      "Shipping two production systems back to back taught me to move fast without leaving a mess behind — maintainability is a feature, not an afterthought.",
  },
  {
    role: "IoT Staff — Internship",
    company: "PT Widya Imersif Teknologi",
    period: "Sep 2023 – Jan 2024",
    description: [
      "Developed a Flutter-based mobile app for the Wish Health Kios Sehat Kit Portable PoC project.",
      "Supported the development of the Flutter-based Kios Sehat Kit Support app.",
      "Supported the integration of IoT device data into the mobile app for monitoring purposes.",
    ],
    comment:
      "My first real dive into IoT. It changed how I think about software — not just screens, but the physical world too.",
  },
];
