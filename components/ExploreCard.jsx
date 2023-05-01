import { styled } from "@/stitches.config";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button, Heading, Text } from ".";

export const ExploreCard = ({ title, image, desc, ...rest }) => {
  return (
    <Wrapper {...rest}>
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
  background: "$red",
  width: "100%",
  display: "flex",
  scrollSnapAlign: "start",
  gap: 40,
  flexDirection: "column",
  alignItems: "center",

  "@md": {
    flexDirection: "row",
  },
});

const ImageWrapper = styled("div", {
  flexShrink: 0,
  width: 300,
  height: 450,
  color: "White",
  overflow: "hidden",
  display: "flex",

  "& img": {
    width: "100%",
  },

  "@md": {
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
    maxWidth: 524,
    flexShrink: 0,
    alignItems: "flex-start",
  },
});
