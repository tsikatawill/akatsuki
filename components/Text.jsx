import { styled } from "@/stitches.config";

export const Text = styled("p", {
  fontSize: "$textRg",
  lineHeight: "$textRg",

  "@sm": {
    fontSize: "$textMd",
    lineHeight: "64px",
  },

  variants: {
    xs: {
      true: {
        fontSize: "20px",
        lineHeight: "unset",

        "@sm": {
          fontSize: "$textXs",
          lineHeight: "$textXs",
        },
      },
    },
    small: {
      true: {
        fontSize: "20px",
        lineHeight: "unset",

        "@sm": {
          fontSize: "$textSm",
          lineHeight: "51px",
        },
      },
    },
  },
});
