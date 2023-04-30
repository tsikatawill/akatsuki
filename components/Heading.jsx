import { styled } from "@/stitches.config";

export const Heading = styled("h2", {
  fontSize: "$headingRg",
  fontFamily: "$PanchangB",
  lineHeight: "$headingRg",

  "@sm": {
    fontSize: "$headingMd",
    lineHeight: "$headingMd",
  },

  variants: {
    regular: {
      true: {
        fontSize: "50px",
        lineHeight: "60px",

        "@sm": {
          fontSize: "60px",
          lineHeight: "70px",
        },
      },
    },
  },
});
