import Head from "next/head";
import MastHead from "../components/MastHead";
import RegForm from "../components/RegForm";
import HowWeWork from "../components/HowWeWork";
import Intro from "../components/Intro";
import Brands from "../components/Brands";
import Axios from "axios";

export default function index() {
  // var axios = require("Axios");
  var data = JSON.stringify({ registrationNumber: "RE15DWF" });
  var config = {
    method: "POST",
    url: "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
    headers: {
      "x-api-key": process.env.DVLA_ENQUIRY_KEY,
      "Content-Type": "application/json",
    },
    data: data,
  };

  Axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

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
      <RegForm />
      <HowWeWork />
      <Intro />
      <Brands />
    </div>
  );
}
