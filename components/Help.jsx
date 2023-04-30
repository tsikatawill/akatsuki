import { HELPSTEPS } from "@/lib/helpSteps";
import { styled } from "@/stitches.config";
import React from "react";
import { Heading, HelpCard, Text } from ".";

export const Help = () => {
  return (
    <Wrapper>
      <Header>
        <Heading>How do we help?</Heading>
        <Text>
          We help you unlock all your hidden potentials by taking on several
          missions until you become the badass that you wanna be!!
        </Text>
      </Header>

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

const Header = styled("div", {
  textAlign: "center",
  marginBottom: 64,
  display: "flex",
  flexDirection: "column",
  gap: 24,
});

const HelpCards = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 90,
});
