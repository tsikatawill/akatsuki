import { EXPLOREITEMS } from "@/lib/exploreItems";
import { styled } from "@/stitches.config";

import { ExploreCard, SectionHeader, Carousel } from ".";
import useMeasure from "react-use-measure";

export const Explore = () => {
  const [ref, { width }] = useMeasure();

  return (
    <Wrapper>
      <SectionHeader
        title="Explore our life changing missions"
        description=" Join elite akatsuki members and take on enemies while you get stronger along the way"
      />

      <Carousel scrollItems={EXPLOREITEMS} scrollBy={width}>
        {EXPLOREITEMS.map((item, index) => (
          <ExploreCard innerRef={ref} key={index} {...item} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled("section", {
  marginTop: 100,
});
