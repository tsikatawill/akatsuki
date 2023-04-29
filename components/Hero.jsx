import { styled } from "@/stitches.config";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from ".";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "150%"]);

  return (
    <Wrapper>
      <Heading>
        <Block>The world</Block>
        <Block>shall know</Block>
        <Block>pain</Block>
      </Heading>

      <Description>
        Safe haven for rogue ninjas from all corners of the world for tha sake
        of peace.
      </Description>

      <Flex forButtons>
        <Button color="tomato">Join now</Button>
        <Button color="zebra">
          <Flex css={{ gap: 10 }}>
            Learn more
            <Image src="/images/arrow-dr.png" width={20} height={20} />
          </Flex>
        </Button>
      </Flex>

      <ScrollWrapper>
        <ScrollText
          initial={{ x: "-50%", y: "-50%" }}
          whileInView={{
            rotate: 360,
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          <Image
            src="/images/scroll-down.png"
            width={200}
            height={200}
            alt="scroll down"
          />
        </ScrollText>

        <ScrollArrow
          initial={{ x: "-50%", y: "-55%" }}
          whileInView={{
            y: "-45%",
            x: "-50%",
            transition: {
              duration: 1,
              repeat: Infinity,
              ease: "linear",
              repeatType: "mirror",
            },
          }}
        >
          <Image
            src="/images/arrow-d.png"
            width={200}
            height={200}
            alt="scroll down"
          />
        </ScrollArrow>
      </ScrollWrapper>

      <ImageWrapper ref={ref}>
        <ImageAnimationWrapper style={{ scale }}>
          <Image
            src="/images/hero.jpg"
            fill
            sizes="(max-width: 768px) 500px,
          757px"
            alt="yahiko"
          />
        </ImageAnimationWrapper>
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("section", {
  marginTop: 50,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: 30,

  "@md": {
    gap: 40,
  },

  "@lg": {
    textAlign: "left",
    alignItems: "flex-start",
  },
});

const Heading = styled("h1", {
  fontFamily: "$PanchangB",
  fontSize: "clamp(2rem, 5rem, 12vw)",
  lineHeight: "clamp(3rem, 6rem, 10vw)",

  "@md": {
    fontSize: "80px",
    lineHeight: "80px",
  },

  "@lg": {
    fontSize: "128px",
    lineHeight: "156px",
  },
});

const Block = styled("span", {
  display: "block",
  whiteSpace: "nowrap",
});

const Description = styled("p", {
  letterSpacing: 0,
  maxWidth: 535,
  width: "100%",
  fontSize: "1.5rem",

  "@md": {
    fontSize: 40,
    lineHeight: "50px",
  },
});

const Flex = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 20,
  flexWrap: "wrap",
  justifyContent: "center",

  "& button": {
    whiteSpace: "nowrap",
  },
});

const ImageWrapper = styled("div", {
  position: "relative",
  bottom: 0,
  maxWidth: 757,
  width: "100%",
  overflow: "hidden",

  "@lg": {
    position: "absolute",
    right: 0,
    top: 340,
  },

  "& img": {
    position: "unset !important",
  },
});

const ImageAnimationWrapper = styled(motion.div, {
  width: "100%",
  height: "100%",
});

const ScrollWrapper = styled("div", {
  width: 150,
  height: 150,
  position: "relative",
  marginTop: 60,

  "@md": {
    width: 200,
    height: 200,
  },

  "& img": {
    width: "100%",
    height: "100%",
  },
});

const ScrollText = styled(motion.div, {
  width: "100%",
  transformOrigin: "center",
  position: "absolute",
  height: "100%",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});

const ScrollArrow = styled(motion.div, {
  position: "absolute",
  width: "100%",
  height: "100%",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
});
