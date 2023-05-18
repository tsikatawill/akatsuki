import { NavbarBg, slideIn } from "@/lib/animations";
import { styled } from "@/stitches.config";
import { motion } from "framer-motion";
import { Button } from "./Button";

export const Sidebar = ({ children, handleClose, show }) => {
  return (
    <Background
      onClick={handleClose}
      variants={NavbarBg}
      transition={{ ease: "easeOut", duration: 0.25 }}
      animate={show ? "show" : "hide"}
    >
      <Button color="tomato" onClick={handleClose}>
        x
      </Button>

      <Menu variants={slideIn}>
        <Content>{children}</Content>
      </Menu>
    </Background>
  );
};

Button.toString = () => ".button";
const Background = styled(motion.div, {
  display: "block",
  background: "rgba(0,0,0,0.5)",
  backdropFilter: "blur(4px)",
  position: "fixed",
  inset: 0,
  zIndex: 99,

  "@md": {
    display: "none",
  },

  [`& ${Button}`]: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 100,
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
