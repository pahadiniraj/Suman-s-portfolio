export const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const imageVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};

export const buttonVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};
