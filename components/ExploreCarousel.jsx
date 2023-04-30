import { EXPLOREITEMS } from "@/lib/exploreItems";
import { styled } from "@/stitches.config";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ExploreCard } from ".";

export const ExploreCarousel = () => {
  const scrollRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    scrollRef.current.scrollTo(activeCard * 1000, 0);
  }, [activeCard]);

  useEffect(() => {
    const Interval = setInterval(() => controlScroll("right"), 5000);
    return () => clearInterval(Interval);
  }, [activeCard]);

  const controlScroll = (direction) => {
    if (activeCard > -1) {
      if (direction === "right" && activeCard < EXPLOREITEMS.length - 1) {
        setActiveCard(activeCard + 1);
      } else if (direction === "left" && activeCard !== 0) {
        setActiveCard(activeCard - 1);
      } else {
        setActiveCard(0);
      }
    } else {
      setActiveCard(0);
    }
  };

  return (
    <Wrapper>
      <CarouselWrapper className="hidden-scrollbar" ref={scrollRef}>
        <CarouselAnimWrapper initial={{ x: 0 }}>
          {EXPLOREITEMS.map((item) => (
            <ExploreCard key={item.title} {...item} />
          ))}

          <ControlButtons>
            <Button
              reverse
              end={activeCard === 0}
              onClick={() => controlScroll("left")}
            >
              <Image src="/images/right-arrow.png" width={70} height={70} />
            </Button>
            <Button color="tomato" onClick={() => controlScroll("right")}>
              <Image src="/images/right-arrow.png" width={70} height={70} />
            </Button>
          </ControlButtons>
        </CarouselAnimWrapper>
      </CarouselWrapper>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  position: "relative",
});

const CarouselWrapper = styled("div", {
  overflow: "scroll",
  marginTop: 100,
  scrollSnapType: "x",
  scrollBehavior: "smooth",
  marginLeft: 50,
});

const CarouselAnimWrapper = styled(motion.div, {
  display: "flex",
  width: "100%",
  gap: 100,
});

const ControlButtons = styled("div", {
  position: "absolute",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  display: "flex",
  pointerEvents: "none",
  justifyContent: "space-between",
  alignItems: "center",
});

const Button = styled("button", {
  all: "unset",
  display: "block",
  transformOrigin: "center",
  display: "grid",
  placeContent: "center",
  padding: 0,
  margin: 0,
  pointerEvents: "all",
  cursor: "pointer",
  opacity: 0.5,
  transition: "all 0.3s ease",

  "&:hover": {
    opacity: 1,
  },

  variants: {
    end: {
      true: {
        opacity: 0.3,

        "&:hover": {
          opacity: 0.5,
        },
      },
    },

    reverse: {
      true: {
        transform: "rotate(180deg)",
      },
    },
  },
});
