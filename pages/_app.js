import "../styles/globals.css";
import Layout from "../components/Layout";
import Script from "next/script";
import "../styles/globals.css";
import { store } from "../store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TRACKING_TAG}`}
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TRACKING_TAG}');
				`}
			</Script>

			<Layout>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Layout>
		</>
	);
}
