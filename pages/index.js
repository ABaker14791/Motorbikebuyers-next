import Head from "next/head";
import MastHead from "../components/MastHead";
import RegForm from "../components/RegForm";
import HowWeWork from "../components/HowWeWork";
import Intro from "../components/Intro";
import Brands from "../components/Brands";

export default function index(details) {
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
      <RegForm data={details} />
      <HowWeWork />
      <Intro />
      <Brands />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   // const registration = passRegistration();  replace this with a post request to our endpoint
//   const bikeDetails = await fetchDetails(req).catch((error) =>
//     console.error(error)
//   );

//   if (!bikeDetails) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { details: bikeDetails }, // will be passed to the page component as props
//   };
// }
