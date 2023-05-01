export const NavbarBg = {
  show: {
    opacity: 1,
    pointerEvents: "all",
  },
  hide: {
    opacity: 0,
    pointerEvents: "none",
    transition: {
      when: "afterChildren",
    },
  },
};

export const slideIn = {
  show: {
    x: 0,
    transition: {
      delay: 0.25,
      ease: "easeOut",
    },
  },
  hide: {
    x: "100%",
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

export const slideWithDir = (from = "right") => {
  return {
    initial: {
      x: from === "left" ? "-100%" : "100%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        // ease: [0.17, 0.67, 0.83, 0.67],
        duration: 0.8,
      },
    },
  };
};

export const dropIn = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.6,
      delay: 0.3,
    },
  },
};

export const scrollX = (from = "right", delay = false) => {
  return {
    // initial: { x: from === "left" ? "-100%" : "100%" },
    animate: {
      x: from === "left" ? ["0%", "150%"] : [0, -1500],
      transition: {
        delay: delay && 3,
        ease: "linear",
        repeatType: "loop",
        repeat: Infinity,
        duration: 3,
      },
    },
  };
};
