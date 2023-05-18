import { styled } from "@/stitches.config";
import React from "react";
import { Button, Heading, Text } from ".";
import Image from "next/image";
import { motion } from "framer-motion";

export const MerchCard = ({
  currentPrice,
  description,
  image,
  innerRef,
  oldPrice,
  title,
  topSeller,
  ...rest
}) => {
  return (
    <Wrapper {...rest} ref={innerRef}>
      {topSeller && (
        <TopSeller>
          <Text xs css={{ fontWeight: 700 }}>
            Top Seller
          </Text>
        </TopSeller>
      )}

      <ImageWrapper>
        <Image src={image} alt={title} fill sizes="(max-width: 768px) 600px" />
      </ImageWrapper>

      <TextWrapper initial={{ height: 250 }} whileHover={{ height: "auto" }}>
        <Text>{title}</Text>
        <Text xs>{description}</Text>

        <Flex css={{ marginBottom: 40 }}>
          <Heading
            css={{
              fontFamily: "$AeonikB",
            }}
          >
            ${currentPrice}
          </Heading>
          <Text
            xs
            css={{
              textDecoration: "line-through",
            }}
          >
            ${oldPrice}
          </Text>
        </Flex>

        <Flex>
          <Button color="tomato">Add to cart</Button>
          <Button color="zebra">Buy now</Button>
        </Flex>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  scrollSnapAlign: "center",
  background: "rgba(24, 24, 25, 0.25)",
  flexShrink: 0,
  maxWidth: 600,
  width: "100%",
  border: "1px solid white",
  position: "relative",

  "@md": {
    width: 600,
  },
});

const ImageWrapper = styled("div", {
  width: "100%",
  minHeight: 300,
  borderBottom: "1px solid white",
  overflow: "hidden",

  "& img": {
    position: "relative !important",
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },

  "@md": {
    height: 600,
  },
});

const TopSeller = styled("div", {
  position: "absolute",
  top: 10,
  left: 10,
  background: "$red",
  color: "White",
  padding: "5px 15px",
  display: "grid",
  placeContent: "center",
  zIndex: 10,

  "@md": {
    padding: "10px 20px",
  },
});

const TextWrapper = styled(motion.div, {
  padding: 15,
  display: "flex",
  flexDirection: "column",
  gap: 10,
  overflow: "hidden",

  "@md": {
    padding: 20,
  },
});

const Flex = styled("div", {
  display: "flex",
  gap: 10,
  alignItems: "center",
});
