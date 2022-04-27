import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Faq from "../components/Faq";

const faq = () => {
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
      <NavBar />
      <Faq />
    </div>
  );
};

export default faq;
