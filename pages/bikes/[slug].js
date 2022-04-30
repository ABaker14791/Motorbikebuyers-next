import React from "react";
import Head from "next/head";
import NavBar from "../../components/NavBar";

const bikeDetails = () => {
  return (
    <div>
      <Head>
        <title>Slug title</title>
        <meta name="description" content="Sell your motorbike online" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      Bike details
    </div>
  );
};

export default bikeDetails;
