import { ADVICE } from "@/lib/advice";
import { styled } from "@/stitches.config";
import { AdviceCard, SectionHeader } from ".";

export const Advice = () => {
  return (
    <Wrapper>
      <SectionHeader
        title="Advice from some of our elite members"
        description="Read some words of advice from top ranking members of the akatsuki"
      />

      <AdviceCards>
        {ADVICE.map((advice, index) => (
          <AdviceCard key={index} {...advice} offset={(index + 1) % 2 === 0} />
        ))}
      </AdviceCards>
    </Wrapper>
  );
};

const Wrapper = styled("section", {
  marginTop: 100,
});

const AdviceCards = styled("div", {
  display: "flex",
  // gridTemplateColumns: "1fr 1fr",
  gap: 80,
  marginTop: 100,
  justifyItems: "center",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "start",
});
