import { styled } from "@/stitches.config";
import { Logo, Text } from ".";
import { NAVLINKS } from "@/lib/navlinks";
import Link from "next/link";

export const Footer = () => {
  return (
    <Wrapper>
      <FlexGroup>
        <Logo />

        <NavLinks>
          {NAVLINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.title}
            </Link>
          ))}
          <br />
        </NavLinks>
      </FlexGroup>

      <FlexGroup>
        <Text css={{ fontSize: 14 }}>
          &copy; AkatsuskiDZN2023, All Rights Reserved
        </Text>

        <Sub>
          <div>
            Designed by
            <Link
              href="https://twitter.com/hamzaabdul"
              target="_blank"
              referrerPolicy="noreferrer"
            >
              {" "}
              Hamza Abdul
            </Link>
          </div>

          <div>
            Developed by
            <Link
              href="https://twitter.com/dev_willman"
              target="_blank"
              referrerPolicy="noreferrer"
            >
              {" "}
              William M. Tsikata
            </Link>
          </div>
        </Sub>
      </FlexGroup>
    </Wrapper>
  );
};

const Wrapper = styled("footer", {
  fontFamily: "$PanchangR",
  marginTop: 100,
  marginBottom: 100,
  fontSize: 14,
  gap: 30,

  "& a": {
    color: "White",
  },

  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

const NavLinks = styled("nav", {
  display: "flex",
  gap: 20,
  flexWrap: "wrap",

  "@md": {
    gap: 30,
    flexWrap: "nowrap",
  },
});

const FlexGroup = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  gap: 20,
  flexDirection: "column",

  "@md": {
    flexDirection: "row",
  },

  "&:not(last-child)": {
    marginBottom: 20,
  },
});

const Sub = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 10,
});
