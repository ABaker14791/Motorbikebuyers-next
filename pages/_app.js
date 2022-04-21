import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  <ChakraProvider>
    return <Component {...pageProps} />
    <NavBar />
  </ChakraProvider>;
}

export default MyApp;
