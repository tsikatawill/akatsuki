import { dropIn, slideWithDir } from "@/lib/animations";
import { styled } from "@/stitches.config";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heading, Text } from ".";

export const HelpCard = ({ step, reverse, title, image }) => {
  return (
    <Wrapper reverse={reverse}>
      <TextWrapper
        variants={dropIn}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
      >
        <Text small>{step}</Text>
        <Heading>{title}</Heading>
      </TextWrapper>

      <ImageWrapper
        variants={slideWithDir(reverse ? "left" : "right")}
        whileInView="animate"
        initial="initial"
        viewport={{ once: true }}
      >
        <Image fill src={image} sizes="(max-width: 768px) 500px, 654px" />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div, {
  display: "flex",
  gap: 40,
  alignItems: "center",
  flexWrap: "wrap",
  overflow: "hidden",

  "@md": {
    gap: 90,
  },

  variants: {
    reverse: {
      true: {
        flexDirection: "row-reverse",
      },
    },
  },

  "@md": {
    flexWrap: "nowrap",
  },
});

const TextWrapper = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  flex: 1,
});

const ImageWrapper = styled(motion.div, {
  maxWidth: 654,
  height: 400,
  width: "100%",
  border: "2px solid white",
  objectFit: "contain",

  "@md": {
    height: 442,
  },

  "& img": {
    width: "100%",
    height: "100%",
    position: "unset !important",

    "@md": {
      objectFit: "contain",
    },
  },
});
