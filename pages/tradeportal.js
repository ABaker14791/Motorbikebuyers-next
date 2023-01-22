import { useState } from "react";
import Head from "next/head";
import BikeCard from "../components/BikeCard";
import Styles from "../styles/Tradeportal.module.css";
import Signin from "../components/auth/Signin";
// Woocommerce data
import { fetchWooCommerceProducts } from "../utils/wooCommerceApi";
// Firebase
import { auth, db } from "../utils/firebase";
import { signOut } from "firebase/auth";

const tradeportal = (props) => {
	const [user, setUser] = useState({});
	const { products } = props;

	// TODO: Get firestore doc somehow?

	const userIsTradeMember = () => {
		// TODO: if user is a member we set state to allow access to trade portal.
	};

	const logOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log("Sign out successfull.");
				setUser(null);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className={Styles.pageBG}>
			<Head>
				<title>Motorbike Buyers Trade Portal</title>
				<meta name="description" content="Sell your motorbike online" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{user ? (
				<div className={Styles.authContainer}>
					<main className={Styles.container}>
						<div className={Styles.bikesContainer}>
							{products.map((tradeBike) => (
								<BikeCard key={tradeBike.id} tradeBike={tradeBike} />
							))}
						</div>
						<p className={Styles.signOutText}>
							You are signed in as {user.name}
						</p>
						<button onClick={logOut}>Sign out</button>
					</main>
				</div>
			) : (
				<Signin setUser={setUser} />
			)}
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
