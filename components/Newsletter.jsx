import React from "react";
import { Button, SectionHeader } from ".";
import { styled } from "@/stitches.config";

export const Newsletter = () => {
  return (
    <Wrapper>
      <SectionHeader
        title="Subscribe to our newsletter"
        description="Stay in the loop for updates on missions and merch as well as surprises!!"
      />

      <Flex>
        <Input placeholder="Enter your email address" />
        <Button huge color="tomato">
          Subscribe
        </Button>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled("section", {
  marginTop: 100,
});

const Input = styled("input", {
  width: "100%",
  maxWidth: 800,
  padding: "10px 20px",
  fontSize: "$textSm",
  borderRadius: 50,
  background: "none",
  color: "White",
  border: "1px solid white",
  outline: "none",
  "&::placeholder": {
    color: "White",
  },

  "@md": {
    padding: "30px 40px",
  },
});

const Flex = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 20,
  marginTop: 30,
  alignItems: "center",

  "@md": {
    marginTop: 50,
    gap: 40,
  },
});
