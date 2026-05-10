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
      "Built the JAE Billing System, a pre-flight aircraft inspection platform using Next.js and Laravel.",
      "Developed Magnitude, a Work Order Management System for tracking and reporting villa facility conditions.",
      "Integrated Next.js frontend with Laravel backend and PostgreSQL database.",
      "Used Material UI (MUI) to build a consistent and responsive interface across both platforms.",
    ],
    comment:
      "This role pushed me to build real enterprise systems and taught me how to connect frontend and backend cleanly under production pressure.",
  },
  {
    role: "Fullstack Web Developer",
    company: "BIIS Corp",
    period: "Jun 2024 – Oct 2024",
    description: [
      "Worked on Daftaronline KJRI JB as a Front End Developer using Next.js, Tailwind, and Flowbite.",
      "Built a responsive and user-friendly online registration interface for KJRI Johor Bahru.",
      "Collaborated with the team on API integration and user data management.",
    ],
    comment:
      "Working here taught me how to move fast in a team, handle real user flows, and ship features that actually matter.",
  },
  {
    role: "IoT Intern",
    company: "PT Widya Imersif Teknologi",
    period: "Sep 2023 – Jan 2024",
    description: [
      "Built a proof-of-concept for the Wish Health Kios Sehat Portable app using Flutter.",
      "Integrated SpO2, thermometer, and body weight sensors via Bluetooth Low Energy (BLE).",
      "Developed the Kios Sehat Kit Portable app to configure device WiFi settings over BLE.",
      "Learned hands-on BLE communication between microcontrollers and mobile apps.",
    ],
    comment:
      "My first real dive into IoT. It changed how I think about software — not just screens, but the physical world too.",
  },
];
