import React from "react";
import Head from "next/head";
import Styles from "../styles/About.module.css";
import Image from "next/image";
import NavBar from "../components/NavBar";
import HowWeWork from "../components/HowWeWork";
import RegForm from "../components/RegForm";
import RidingPhoto from "../assets/images/ridingphoto1.png";
import Footer from "../components/Footer";

const about = () => {
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
      <div className={Styles.Title}>About Us</div>
      <div className={Styles.Content}>
        <Image
          src={RidingPhoto}
          className={Styles.AboutImg}
          alt="motorcycle on track"
        />
        <div className={Styles.AboutText}>
          The Motorbike Buyers are here to help you sell your motorbike fast. We
          are focused on keeping things simple, if the bike is as described it
          is as we valued it, no haggling. We are committed to ensuring you deal
          with knowledgeable people straight away, not call centres or teams of
          people that don&apos;t live and breathe bikes! <br />
          <br />
          The Motorbike Buyers is managed by enthusiasts including Craig
          &apos;AKA&apos; Atkinson heading up the buying team. Craig brings a
          wealth of knowledge and a history of racing to the team including some
          fantastic accolades, take a look below!
          <br />
          <br />
          <ul>
            <li>
              Manx GP Double Race Winner 2006 (Genuine in the week double)
            </li>
            <li>
              Record of the Closest ever finish around the TT Course 0.01{" "}
            </li>
            <li>119.997 MPH Lap, Honda CBR600 RR in 2006 </li>
            <li>IOM 100 Years Centenary Competitor</li>
            <li>NW200 Competitor </li>
            <li>Ulster GP Competitor 2nd Fastest Newcomer </li>
            <li>Macau GP Competitor </li>
            <li>American 3hr Endurance Podium Finisher with Milky Quayle</li>
          </ul>
          <br />
          Use our What&apos;s App quick value or enter your details now to get
          your value and sell you motobike fast and free today. We want your
          motorbike and we will buy any bike get in touch now.
        </div>
      </div>
      <HowWeWork />
      <RegForm />
      <Footer />
    </div>
  );
};

export default about;
