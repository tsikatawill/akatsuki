import { scrollX } from "@/lib/animations";
import { HEADBANDS } from "@/lib/headbands";
import { styled } from "@/stitches.config";
import { motion } from "framer-motion";
import Image from "next/image";

export const HeadbandRow = ({
  headbands = HEADBANDS,
  scrollFrom = "right",
  delay = false,
}) => {
  return (
    <Wrapper>
      <ScrollAnimationWrapper
        variants={scrollX(scrollFrom, delay)}
        initial="initial"
        animate="animate"
      >
        {headbands.map((band) => (
          <Image
            title={band.name}
            key={band.name}
            src={band.src}
            width={218}
            height={218}
            alt={band.name}
          />
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
  gap: 100,
});
