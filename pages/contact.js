import Head from "next/head";
import NavBar from "../components/NavBar";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Motorbike Buyers About Us</title>
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
      <h1>Contact</h1>
    </div>
  );
};

export default contact;
