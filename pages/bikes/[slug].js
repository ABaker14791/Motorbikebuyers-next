import Head from "next/head";
import { createClient } from "contentful";
import Styles from "../../styles/Slug.module.css";
import Image from "next/image";
import Link from "next/link";
import { Authenticator } from "@aws-amplify/ui-react";
import ReturnBar from "../../components/ReturnBar";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getServerSideProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "tradeBikes",
    "fields.slug": params.slug,
  });

  return {
    props: { tradeBikes: items[0] },
  };
};

const bikeDetails = ({ tradeBikes }) => {
  console.log(tradeBikes);
  const { title, price, image, description } = tradeBikes.fields;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Sell your motorbike online" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReturnBar />
      <div className={Styles.container}>
        <Authenticator>
          <div className={Styles.image}>
            <Image
              src={"https:" + image.fields.file.url}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
              alt="bike for sale"
            />
          </div>
          <div className={Styles.info}>
            <h2 className={Styles.title}>{title}</h2>
            <div className={Styles.price}>£{price}</div>
            <div className={Styles.description}>{description}</div>
            <div className={Styles.actions}>
              <div className={Styles.actions}>
                <Link href="#">
                  <a>Enquire Now</a>
                </Link>
              </div>
            </div>
          </div>
        </Authenticator>
      </div>
    </div>
  );
};

export default bikeDetails;
