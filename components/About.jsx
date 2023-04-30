import { styled } from "@/stitches.config";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button, Heading, Text } from ".";

export const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], ["120%", "100%"]);

  return (
    <Wrapper ref={ref}>
      <ImageWrapper>
        <ImageAnimationWrapper style={{ scale }}>
          <Image
            src="/images/about.jpg"
            fill
            sizes="(max-width: 768px) 652px,
          652px"
          />
        </ImageAnimationWrapper>
      </ImageWrapper>

      <TextDescription>
        <Heading>Who are we?</Heading>

        <Text>
          We&lsquo;re Akatsuki, a hidden organisation with the simple goal of
          helping lost people find themselves and take life on!!
        </Text>

        <Flex>
          <Button color="tomato">Join now</Button>
          <Button color="zebra">
            <Flex css={{ gap: 10 }}>
              Learn more
              <Image src="/images/arrow-dr.png" width={20} height={20} />
            </Flex>
          </Button>
        </Flex>
      </TextDescription>
    </Wrapper>
  );
};

const Wrapper = styled("section", {
  display: "flex",
  gap: 40,
  alignItems: "center",
  marginTop: 100,
  flexDirection: "column",

  "@md": {
    flexDirection: "row",
  },
});

const ImageWrapper = styled("div", {
  flex: 1,
  background: "red",
  height: "700px",
  width: "100%",
  position: "relative",
  overflow: "hidden",

  "& img": {
    position: "unset !important",

    "@md": {
      position: "absolute !important",
    },
  },
});

const ImageAnimationWrapper = styled(motion.div, {
  height: "100%",
  width: "100%",
});

const TextDescription = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 24,
  textAlign: "center",

  "@md": {
    textAlign: "left",
  },
});

const Important = styled("span", {
  color: "$red",
});

const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 20,
  flexWrap: "wrap",
  justifyContent: "center",

  "@md": {
    justifyContent: "flex-start",
  },

  "& button": {
    whiteSpace: "nowrap",
  },
});
