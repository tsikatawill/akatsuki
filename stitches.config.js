import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      red: "#FF3939",
      inactiveGrey: "#7B7B7B",
      dark: "#1D1D1F",
    },
    space: {
      1: "1rem",
      2: "1.5rem",
      3: "2rem",
      4: "4rem",
      5: "5rem",
    },
    fontSizes: {
      headingMd: "64px",
      headingRg: "2.5rem",
      textMd: "40px",
      textRg: "1.5rem",
      textSm: "32px",
    },
    lineHeights: {
      headingMd: "80px",
      headingRg: "2.5rem",
      textMd: "50px",
      textRg: "2rem",
    },
    fonts: {
      AeonikR: "AeonikR, system-ui, -apple-system, sans-serif",
      AeonikB: "AeonikB, system-ui, -apple-system, sans-serif",
      PanchangR: "PanchangR, system-ui, -apple-system, sans-serif",
      PanchangB: "PanchangB, system-ui, -apple-system, sans-serif",
    },
  },
  media: {
    xs: "(min-width: 480px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
  },
});
