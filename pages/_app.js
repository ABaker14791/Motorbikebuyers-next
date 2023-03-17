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
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TRACKING_TAG}`}
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					gtag('js', new Date());
					gtag('config', '${process.env.GOOGLE_TRACKING_TAG}', {
					page_path: window.location.pathname,`,
				}}
			/>
			<Layout>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Layout>
		</>
	);
}
