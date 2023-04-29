import { styled } from "@/stitches.config";
import Link from "next/link";
import { Button } from "./Button";
import { Container, Logo, Sidebar } from ".";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { NAVLINKS } from "@/lib/navlinks";

export const Navbar = () => {
  const NAVFLEXITEMS = [
    {
      icon: "/images/shopping-cart.png",
    },
    {
      icon: "/images/headphones.png",
    },
    {
      icon: "/images/sun.png",
    },
  ];

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Logo />

        <NavMenu>
          {NAVLINKS.map(({ title, href }) => (
            <NavLink
              initial={{ borderBottomColor: "transparent" }}
              whileHover={{
                borderBottomColor: "white",
                transition: { ease: "easeIn" },
              }}
              key={title}
              active={title === "Home" ? true : false}
            >
              <Link href={href}>{title}</Link>
            </NavLink>
          ))}
        </NavMenu>

        <Flex>
          <Flex hideable>
            {NAVFLEXITEMS.map((item) => (
              <CircleBtn roundness="full">
                <Button>
                  <Image src={item.icon} width={16} height={16} alt="icon" />
                </Button>
              </CircleBtn>
            ))}

            <Button color="tomato">Join now</Button>
          </Flex>

          <SidebarToggle onClick={() => setShowSidebar(true)}>
            <Image
              src="/images/shopping-cart.png"
              width={16}
              height={16}
              alt="icon"
            />
          </SidebarToggle>
        </Flex>

        <Sidebar show={showSidebar} handleClose={() => setShowSidebar(false)}>
          <SidebarInner>
            {NAVLINKS.map(({ title, href }) => (
              <NavLink
                initial={{ borderBottomColor: "transparent" }}
                whileHover={{
                  borderBottomColor: "white",
                  transition: { ease: "easeIn" },
                }}
                key={title}
                active={title === "Home" ? true : false}
              >
                <Link href={href}>{title}</Link>
              </NavLink>
            ))}
          </SidebarInner>
        </Sidebar>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  "& .container": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "$2",
    paddingBottom: "$2",
  },
});

const NavLink = styled(motion.div, {
  color: "red",
  textDecoration: "none",
  fontFamily: "$PanchangR",
  fontSize: "16px",
  padding: 10,

  "& a": {
    transition: "all 0.25s ease",
    color: "$inactiveGrey",
    borderBottom: "1px solid transparent",
  },

  "&:hover a": {
    color: "white",
    borderBottom: "1px solid white",
  },

  variants: {
    active: {
      true: {
        "& a": {
          color: "white",
          borderBottom: "1px solid white",
        },
      },
    },
  },
});

const NavMenu = styled("div", {
  display: "none",
  gap: "$3",

  "@lg": {
    display: "flex",
  },
});

Button.toString = () => ".button";
const CircleBtn = styled("span", {
  [`& ${Button}`]: {
    width: "38px",
    padding: 0,
    height: "34px",
  },
});

const Flex = styled("div", {
  display: "flex",
  gap: "$1",
  alignItems: "center",

  variants: {
    hideable: {
      true: {
        display: "none",

        "@md": {
          display: "flex",
          justifyContent: "end",
          justifySelf: "flex-end",
        },
      },
    },
  },
});

const SidebarToggle = styled("div", {
  display: "block",
  filter: "invert()",

  "@md": {
    display: "none",
  },
});

const SidebarInner = styled(motion.div, {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  gap: 30,
});
