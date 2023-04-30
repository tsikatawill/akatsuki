import { styled } from "@stitches/react";
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
          <Image src={image} width="400" height="610" alt="kak" />
        </ImageAnimWrapper>
      </ImageWrapper>

      <TextDesc>
        <Heading small>{title}</Heading>
        <Text xs>{desc}</Text>
        <Button color="tomato">Join mission</Button>
      </TextDesc>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  scrollSnapAlign: "start",
  gap: 40,
});

const ImageWrapper = styled("div", {
  flexShrink: 0,
  width: 400,
  height: 610,
  overflow: "hidden",
});

const ImageAnimWrapper = styled(motion.div, {
  width: "100%",
  height: "100%",
});

const TextDesc = styled("div", {
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  gap: 24,
  alignItems: "flex-start",
  maxWidth: 524,
  width: "100%",
});
