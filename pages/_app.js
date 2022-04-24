import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import MastHead from "../components/MastHead";
import RegForm from "../components/RegForm";
import HowWeWork from "../components/HowWeWork";
import Intro from "../components/Intro";
import Brands from "../components/Brands";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar />
      <MastHead />
      <Layout>
        <Component {...pageProps} />
        <RegForm />
        <HowWeWork />
        <Intro />
        <Brands />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
