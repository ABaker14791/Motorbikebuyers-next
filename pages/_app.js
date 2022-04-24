import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/provider";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
