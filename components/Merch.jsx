import { styled } from "@/stitches.config";
import { SectionHeader } from ".";
import { Carousel } from "./Carousel";

export const Merch = () => {
  const SCROLL = [1, 2, 3, 4, 5, 6];

  return (
    <Wrapper>
      <SectionHeader
        title="Grab some merch from our store"
        description="Visit our store and get your copy of special items we have prepared just for you!!"
      />

      <Carousel scrollItems={SCROLL} scrollBy={400}>
        {SCROLL.map((item, index) => (
          <MapItem key={index}>{item}</MapItem>
        ))}
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled("section", {
  marginTop: 100,
});

const MapItem = styled("div", {
  width: 300,
  height: 300,
  background: "blue",
  flexShrink: 0,
  scrollSnapAlign: "start",
});
