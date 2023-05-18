import Head from "next/head";
import {
  About,
  Advice,
  Container,
  Explore,
  Help,
  Hero,
  Merch,
  Navbar,
  Newsletter,
  Footer,
  Welcome,
} from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Akatsuki" />
        <meta name="image" content="https://i.postimg.cc/PJ2kNb1V/hero.jpg" />
        <meta
          name="property"
          content="Safe haven for rogue ninjas from all corners of the world for tha sake of peace."
        />
        <meta
          name="url"
          property="og:url"
          content="https://akatsuki-azure.vercel.app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/images/cloud.png" />

        <title>Akatsuki</title>
      </Head>

      <Navbar />

      <main>
        <Container>
          <Hero />
          <About />
          <Help />
          <Welcome />
          <Explore />
          <Advice />
          <Merch />
          <Newsletter />
          <Footer />
        </Container>
      </main>
    </>
  );
}
