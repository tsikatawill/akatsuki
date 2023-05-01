import { styled } from "@/stitches.config";
import { motion } from "framer-motion";
import Image from "next/image";
import { Text } from ".";

export const AdviceCard = ({ author, image, advice, offset }) => {
  return (
    <Wrapper offset={offset}>
      <ImageWrapper
        animate={{
          y: [-50, 0],
          transition: {
            repeat: Infinity,
            duration: 2,
            repeatType: "mirror",
            ease: "linear",
            delay: Math.random().toFixed(1),
          },
        }}
      >
        <Image src={image} alt={author} width={560} height={870} />
      </ImageWrapper>

      <TextWrapper>
        <Text small>{advice}</Text>
        <Text xs css={{ color: "$red", marginTop: 30 }}>
          - {author}
        </Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div, {
  variants: {
    offset: {
      true: {
        marginTop: 0,

        "@md": {
          marginTop: 100,
        },
      },
    },
  },
});

const ImageWrapper = styled(motion.div, {
  maxWidth: 300,

  "@md": {
    width: 560,
    height: 870,
  },

  "& img": {
    objectFit: "contain",
    width: "100%",
  },
});

const TextWrapper = styled("div", {
  maxWidth: 600,
  border: " 4px solid white",
  marginTop: 80,
  padding: 24,
});
