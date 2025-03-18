export const heroVariantSection = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 1,
    y: 10,
    transation: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export const aboutVariantSection = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 1,
    y: 10,
    transation: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export const menuItems = [
  {
    name: "Home",
    href: "",
  },
  {
    name: "About",
    href: "",
  },
  {
    name: "Project",
    href: "",
  },
  {
    name: "Works",
    href: "",
  },
  {
    name: "Contact",
    href: "",
  },
];
