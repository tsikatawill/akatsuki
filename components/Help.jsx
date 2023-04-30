import { HELPSTEPS } from "@/lib/helpSteps";
import { styled } from "@/stitches.config";
import React from "react";
import { Heading, HelpCard, SectionHeader, Text } from ".";

export const Help = () => {
  return (
    <Wrapper>
      <SectionHeader
        title="How do we help?"
        description="We help you unlock all your hidden potentials by taking on several
          missions until you become the badass that you wanna be!!"
      />

      <HelpCards>
        {HELPSTEPS.map((step) => (
          <HelpCard key={step.title} {...step} />
        ))}
      </HelpCards>
    </Wrapper>
  );
};

const Wrapper = styled("section", {
  marginTop: 100,
});

const HelpCards = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 90,
});
