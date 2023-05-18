import { styled } from "@/stitches.config";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, Heading, Text } from ".";

export const ExploreCard = ({ title, image, desc, innerRef, ...rest }) => {
  return (
    <Wrapper {...rest} ref={innerRef}>
      <ImageWrapper>
        <ImageAnimWrapper
          whileHover={{ scale: 1.2, transition: { duration: 0.8 } }}
        >
          <Image src={image} width="400" height="600" alt={title} />
        </ImageAnimWrapper>
      </ImageWrapper>

      <TextDesc>
        <Heading small css={{ fontSize: 30, lineHeight: "40px" }}>
          {title}
        </Heading>
        <Text xs>{desc}</Text>
        <Button color="tomato">Join mission</Button>
      </TextDesc>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  flexShrink: 0,
  display: "flex",
  scrollSnapAlign: "center",
  gap: 40,
  flexDirection: "column",
  alignItems: "center",

  "@md": {
    flexDirection: "row",
  },
});

const ImageWrapper = styled("div", {
  flexShrink: 0,
  maxWidth: 350,
  height: 500,
  color: "White",
  overflow: "hidden",
  display: "flex",

  "& img": {
    width: "100%",
  },

  "@md": {
    maxWidth: "unset",
    width: 400,
    height: 600,
  },
});

const ImageAnimWrapper = styled(motion.div, {
  width: "100%",
  height: "100%",
});

const TextDesc = styled("div", {
  display: "none",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  alignItems: "center",
  textAlign: "center",
  maxWidth: 320,
  width: "100%",

  "@md": {
    gap: 24,
    textAlign: "left",
    width: 524,
    flexShrink: 0,
    alignItems: "flex-start",
  },
});
