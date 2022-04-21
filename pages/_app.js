import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
