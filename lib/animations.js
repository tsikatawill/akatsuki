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
