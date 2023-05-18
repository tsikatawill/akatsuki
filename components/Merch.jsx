import { styled } from "@/stitches.config";
import { Button, Heading, MerchCard, SectionHeader, Text } from ".";
import { Carousel } from "./Carousel";
import useMeasure from "react-use-measure";
import Image from "next/image";
import { MERCH } from "@/lib/merch";

export const Merch = () => {
  const [ref, { width }] = useMeasure();

  return (
    <Wrapper>
      <SectionHeader
        title="Grab some merch from our store"
        description="Visit our store and get your copy of special items we have prepared just for you!!"
      />

      <Carousel scrollItems={MERCH} scrollBy={width}>
        {MERCH.map((item, index) => (
          <MerchCard innerRef={ref} {...item} key={index} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled("section", {
  marginTop: 100,
});
