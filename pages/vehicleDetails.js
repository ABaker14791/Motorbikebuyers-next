import React from "react";
import VehicleForm from "../components/VehicleForm";
import Head from "next/head";

const vehicleDetails = () => {
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
      <VehicleForm />
    </div>
  );
};

export default vehicleDetails;
