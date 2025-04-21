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
    href: "/",
  },
  {
    name: "About",
    href: "#about-me",
  },
  {
    name: "Project",
    href: "#portofolio",
  },
  {
    name: "Qualification",
    href: "#qualification",
  },
  {
    name: "Contact",
    href: "#contact-me",
  },
];

export interface portofolioItemsProps {
  id: number;
  title: string;
  img: string;
  desc: string;
}

export const portofolioItems: portofolioItemsProps[] = [
  {
    id: 1,
    title: "Test 1",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusantium, expedita fugiat exercitationem voluptas consectetur ducimus earum nostrum magnam dignissimos voluptatum neque, labore incidunt dolorum voluptatibus ut debitis sed nesciunt aperiam maxime quisquam? Ipsum numquam neque illum, perferendis aliquid quas. kkdsjfafjdlksafkdslafj fdsjflka dsjfla jlkdsfjlafd jlfdsafkdsa sdlkfjlkdsa konto l fds",
  },
  {
    id: 2,
    title: "Test 1",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusantium, expedita fugiat exercitationem voluptas consectetur ducimus earum nostrum magnam dignissimos voluptatum neque, labore incidunt dolorum voluptatibus ut debitis sed nesciunt aperiam maxime quisquam? Ipsum numquam neque illum, perferendis aliquid quas. kkdsjfafjdlksafkdslafj fdsjflka dsjfla jlkdsfjlafd jlfdsafkdsa sdlkfjlkdsa konto l fds",
  },
  {
    id: 3,
    title: "Test 1",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusantium, expedita fugiat exercitationem voluptas consectetur ducimus earum nostrum magnam dignissimos voluptatum neque, labore incidunt dolorum voluptatibus ut debitis sed nesciunt aperiam maxime quisquam? Ipsum numquam neque illum, perferendis aliquid quas. kkdsjfafjdlksafkdslafj fdsjflka dsjfla jlkdsfjlafd jlfdsafkdsa sdlkfjlkdsa konto l fds",
  },
];
