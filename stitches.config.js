import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      red: "#FF3939",
      inactiveGrey: "#7B7B7B",
    },
    fontSizes: {
      1: "14px",
      2: "16px",
      3: "20px",
      4: "24px",
      5: "32px",
      6: "36px",
      7: "40px",
      8: "48px",
      9: "64px",
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
