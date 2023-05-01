import { EXPLOREITEMS } from "@/lib/exploreItems";
import { styled } from "@/stitches.config";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ExploreCard } from ".";

const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

export const ExploreCarousel = () => {
  const scrollRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    scrollRef.current.scrollTo(activeCard * 1000, 0);
  }, [activeCard]);

  const controlScroll = useCallback((direction) => {
    setActiveCard((prev) => Math.abs(prev + direction) % EXPLOREITEMS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => controlScroll(DIRECTION_RIGHT), 5000);
    return () => clearInterval(interval);
  }, [activeCard, controlScroll]);

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
              disabled={activeCard === 0}
              end={activeCard === 0}
              onClick={() => controlScroll(DIRECTION_LEFT)}
            >
              <Image
                src="/images/right-arrow.png"
                width={70}
                height={70}
                alt="left"
              />
            </Button>
            <Button
              color="tomato"
              onClick={() => controlScroll(DIRECTION_RIGHT)}
            >
              <Image
                src="/images/right-arrow.png"
                width={70}
                height={70}
                alt="right"
              />
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
