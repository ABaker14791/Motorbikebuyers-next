import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/provider";
import { Amplify } from "aws-amplify";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css"; // default theme
import awsExports from "../src/aws-exports";
import theme from "./theme";

Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AmplifyProvider>
        <Authenticator.Provider>
          <Component {...pageProps} />
        </Authenticator.Provider>
      </AmplifyProvider>
    </ChakraProvider>
  );
}
