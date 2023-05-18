import { styled } from "@/stitches.config";
import { motion } from "framer-motion";

export const Button = ({ children, ...rest }) => (
  <Wrapper
    {...rest}
    className="button"
    whileTap={{ scale: 0.95, transition: { duration: 0.01 } }}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled(motion.button, {
  height: "38px",
  padding: "0 $2",
  cursor: "pointer",
  display: "grid",
  placeContent: "center",
  border: "1px solid transparent",
  borderRadius: "100px",
  outline: "none",
  background: "white",
  color: "black",
  fontFamily: "$PanchangB",
  transition: "background 0.5s",

  variants: {
    color: {
      zebra: {
        color: "white",
        border: "1px solid white",
        backgroundColor: "$dark",

        "&:hover": {
          background: "White",
          color: "$dark",
        },
      },
      tomato: {
        color: "white",
        backgroundColor: "$red",

        "&:hover": {
          border: "1px solid $redHover",
          color: "$red",
          background: "transparent",
        },
      },
    },
    roundness: {
      full: {
        borderRadius: "50%",
      },
    },
  },
});
