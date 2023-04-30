import { styled } from "@/stitches.config";
import { Heading, Text } from ".";

export const SectionHeader = ({ title, description }) => {
  return (
    <Header>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </Header>
  );
};

const Header = styled("div", {
  textAlign: "center",
  marginBottom: 64,
  maxWidth: 1167,
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gap: 24,
});
