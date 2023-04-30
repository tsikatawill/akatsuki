import { styled } from "@/stitches.config";

import { ExploreCarousel, SectionHeader } from ".";

export const Explore = () => {
  return (
    <Wrapper>
      <SectionHeader
        title="Explore our life changing missions"
        description=" Join elite akatsuki members and take on enemies while you get stronger along the way"
      />

      <ExploreCarousel />
    </Wrapper>
  );
};

const Wrapper = styled("section", {
  marginTop: 100,
});
