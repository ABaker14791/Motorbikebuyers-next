import React from "react";
import Head from "next/head";
import BikeCard from "../components/BikeCard";
import Styles from "../styles/Tradeportal.module.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { Button } from "@aws-amplify/ui-react";
import { createClient } from "contentful";

// Get trade bikes from contentful API
export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "tradeBikes" });

  return {
    props: {
      tradeBikes: res.items,
    },
  };
}

const tradeportal = ({ tradeBikes }) => {
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
      <div className={Styles.authContainer}>
        <Authenticator>
          {({ user, signOut }) => (
            <main className={Styles.container}>
              <div className={Styles.bikesContainer}>
                {tradeBikes.map((tradeBike) => (
                  <BikeCard key={tradeBike.sys.id} tradeBike={tradeBike} />
                ))}
              </div>
              <p className={Styles.signOutText}>
                You are signed in as {user.username}
              </p>
              <Button onClick={signOut}>Sign out</Button>
            </main>
          )}
        </Authenticator>
      </div>
    </div>
  );
};

export default tradeportal;
