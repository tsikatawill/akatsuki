import { EXPLOREITEMS } from "@/lib/exploreItems";
import { styled } from "@/stitches.config";

import { Carousel, ExploreCard, SectionHeader } from ".";

export const Explore = () => {
  return (
    <Wrapper>
      <SectionHeader
        title="Explore our life changing missions"
        description=" Join elite akatsuki members and take on enemies while you get stronger along the way"
      />

      <Carousel scrollBy={1000} scrollItems={EXPLOREITEMS}>
        {EXPLOREITEMS.map((item) => (
          <ExploreCard key={item.title} {...item} />
        ))}
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled("section", {
  marginTop: 100,
});
