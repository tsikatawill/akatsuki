import { styled } from "@/stitches.config";

export const Heading = styled("h2", {
  fontSize: "$headingRg",
  fontFamily: "$PanchangB",
  lineHeight: "$headingRg",

  "@sm": {
    fontSize: "$headingMd",
    lineHeight: "$headingMd",
  },
});
