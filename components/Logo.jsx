import { styled } from "@/stitches.config";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Image
          src="/images/logo.png"
          height="40"
          width="177"
          alt="akatsuki-logo"
        />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  width: 177,
  height: 40,
});
