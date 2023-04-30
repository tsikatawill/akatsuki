import { styled } from "@/stitches.config";

export const Text = styled("p", {
  fontSize: "$textRg",
  lineHeight: "$textRg",

  "@sm": {
    fontSize: "$textMd",
    lineHeight: "64px",
  },

  variants: {
    small: {
      true: {
        fontSize: "$textSm",
        lineHeight: "51px",
      },
    },
  },
});
