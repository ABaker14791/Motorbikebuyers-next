import Head from "next/head";
import MastHead from "../components/MastHead";
import HeroV2 from "../components/HeroV2";
import RegForm from "../components/RegForm";
import HowWeWork from "../components/HowWeWork";
import Intro from "../components/Intro";
import Brands from "../components/Brands";

export default function index() {
  return (
    <div>
      <Head>
        <title>Motorbike Buyers</title>
        <meta name="description" content="Sell your motorbike online" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="preload"
          href="/fonts/UKNumberPlate.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <MastHead />
      {/* <HeroV2 /> */}
      <RegForm />
      <HowWeWork />
      <Intro />
      <Brands />
    </div>
  );
}
