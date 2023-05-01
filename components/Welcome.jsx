import { styled } from "@/stitches.config";
import { HeadbandRow, SectionHeader } from ".";

export const Welcome = () => {
  return (
    <Wrapper>
      <SectionHeader
        title="All rogue ninjas are welcome"
        description="We don&rsquo;t discriminate, everyone is welcomed to join irrespective of your clan, village, race or federation."
      />

      <Headbands>
        <HeadbandRow />
        <HeadbandRow delay scrollFrom="left" />
      </Headbands>
    </Wrapper>
  );
};

const Wrapper = styled("section", {
  marginTop: 100,
});

const Headbands = styled("div", {
  marginTop: 12,
  display: "flex",
  flexDirection: "column",

  "@sm": {
    gap: 40,
  },
});
