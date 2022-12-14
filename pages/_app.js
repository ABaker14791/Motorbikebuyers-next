import "../styles/globals.css";
import Layout from "../components/Layout";
import { Amplify } from "aws-amplify";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import "../styles/globals.css";
import "@aws-amplify/ui-react/styles.css"; // default theme
import awsExports from "../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }) {
	return (
		<AmplifyProvider>
			<Authenticator.Provider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Authenticator.Provider>
		</AmplifyProvider>
	);
}
