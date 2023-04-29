import { styled } from "@/stitches.config";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./Button";

export const Sidebar = ({ children, handleClose, show }) => {
  const variants = {
    open: { opacity: 1 },
    closed: {
      opacity: 0,
      pointerEvents: "none",
    },
  };

  return (
    <AnimatePresence>
      <Background
        onClick={handleClose}
        variants={variants}
        transition={{ ease: "easeOut", duration: 0.25 }}
        animate={show ? "open" : "closed"}
        exit="closed"
      >
        <Button color="tomato" onClick={handleClose}>
          x
        </Button>

        <Menu
          animate={show ? { x: 0 } : { x: "100%" }}
          transition={{ delay: 0.25, ease: "easeOut" }}
          exit={{ opacity: 0, y: "100%", background: "green" }}
        >
          <Content>{children}</Content>
        </Menu>
      </Background>
    </AnimatePresence>
  );
};

Button.toString = () => ".button";
const Background = styled(motion.div, {
  display: "block",
  background: "rgba(0,0,0,0.5)",
  backdropFilter: "blur(4px)",
  position: "fixed",
  inset: 0,

  "@md": {
    display: "none",
  },

  [`& ${Button}`]: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 10,
    padding: 0,
    fontSize: 20,
    width: 38,
    boxShadow: "5px 5px 20px #FF39392A",
  },
});

const Menu = styled(motion.aside, {
  background: "$dark",
  maxWidth: 300,
  width: "100%",
  minHeight: "100vh",
  position: "absolute",
  right: "0",
  boxShadow: "-5px -5px 20px #FF39392A",
});

const Content = styled("div", {
  padding: "4rem 2rem",
});
