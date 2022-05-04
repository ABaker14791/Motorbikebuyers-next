import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/provider";
import { ColorModeProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css"; // default theme
import awsExports from "../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeProvider
        options={{
          useSystemColorMode: false,
        }}
      >
        <AmplifyProvider>
          <Authenticator.Provider>
            <Component {...pageProps} />
          </Authenticator.Provider>
        </AmplifyProvider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
