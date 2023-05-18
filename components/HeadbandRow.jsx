import { scrollX } from "@/lib/animations";
import { HEADBANDS } from "@/lib/headbands";
import { styled } from "@/stitches.config";
import { motion } from "framer-motion";
import Image from "next/image";
import useMeasure from "react-use-measure";

export const HeadbandRow = ({
  headbands = HEADBANDS,
  scrollFrom = "right",
  delay = false,
}) => {
  const [ref, bounds] = useMeasure();

  return (
    <Wrapper ref={ref}>
      <ScrollAnimationWrapper
        variants={scrollX}
        animate="animate"
        custom={{ delay, scrollFrom, bounds: bounds.width }}
      >
        {headbands.map((band) => (
          <ImageWrapper key={band.name}>
            <Image title={band.name} src={band.src} fill alt={band.name} />
          </ImageWrapper>
        ))}
      </ScrollAnimationWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  overflow: "hidden",
});

const ScrollAnimationWrapper = styled(motion.div, {
  display: "flex",
  gap: 50,

  "@sm": {
    gap: 100,
    width: 218,
    height: 218,
  },
});

const ImageWrapper = styled("div", {
  flexShrink: 0,
  width: 100,
  height: 100,
  position: "relative",

  "& img": {
    objectFit: "contain",
  },

  "@sm": {
    width: 218,
    height: 218,
  },
});
