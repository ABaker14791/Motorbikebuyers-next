import React from "react";
import Head from "next/head";
import BikeCard from "../components/BikeCard";
import Styles from "../styles/Tradeportal.module.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { Button } from "@aws-amplify/ui-react";
// Woocommerce data
import { fetchWooCommerceProducts } from "../utils/wooCommerceApi";

const tradeportal = (props) => {
	const { products } = props;
	console.log(products);
	return (
		<div className={Styles.pageBG}>
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
			<div className={Styles.authContainer}>
				<Authenticator>
					{({ user, signOut }) => (
						<main className={Styles.container}>
							<div className={Styles.bikesContainer}>
								{products.map((tradeBike) => (
									<BikeCard key={tradeBike.id} tradeBike={tradeBike} />
								))}
							</div>
							<p className={Styles.signOutText}>
								You are signed in as {user.username}
							</p>
							<Button onClick={signOut}>Sign out</Button>
						</main>
					)}
				</Authenticator>
			</div>
		</div>
	);
};

export default tradeportal;

// Get trade bikes from woocommerce API
export async function getStaticProps() {
	const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
		console.error(error)
	);

	if (!wooCommerceProducts) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			products: wooCommerceProducts.data,
		},
		// revalidate: 60 // regenerate page with new data fetch after 60 seconds
	};
}
