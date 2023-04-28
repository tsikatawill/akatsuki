import { styled } from "@/stitches.config";

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled("div", {
  maxWidth: 1312,
  margin: "auto",
  padding: "0 1rem",

  "@xl": {
    padding: "0",
  },
});
