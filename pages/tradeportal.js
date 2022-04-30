import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Styles from "../styles/Tradeportal.module.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { Button } from "@aws-amplify/ui-react";

const tradeportal = () => {
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
      <Authenticator>
        {({ user, signOut }) => (
          <main className={Styles.container}>
            <div className={Styles.bikesContainer}>
              <div className={Styles.bikeItem}>
                <h1>Ducati 999</h1>
                <p>2000 miles, red</p>
                <p>£9762</p>
              </div>
            </div>
            <h1 className={Styles.signOutText}>
              You are signed in as {user.username}
            </h1>
            <Button onClick={signOut}>Sign out</Button>
          </main>
        )}
      </Authenticator>
    </div>
  );
};

export default tradeportal;
