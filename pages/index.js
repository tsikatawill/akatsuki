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
        <title>Akatsuki</title>
        <meta
          name="description"
          content="Safe haven for rogue ninjas from all corners of the world for tha sake of peace."
        />
        <meta name="image" content="/images/hero.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/cloud.png" />
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
