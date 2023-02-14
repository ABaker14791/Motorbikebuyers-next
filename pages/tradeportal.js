import Head from "next/head";
import BikeCard from "../components/BikeCard";
import Styles from "../styles/Tradeportal.module.css";
import withAuth from "../utils/withAuth";
// Woocommerce data
import { fetchWooCommerceProducts } from "../utils/wooCommerceApi";
// Firebase
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
// Auth redux
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import Loading from "../components/Loading";

const Tradeportal = ({ tradeProducts, company, tradeMember, name }) => {
	const dispatch = useDispatch();
	const products = tradeProducts;

	const logOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log("Sign out successfull.");
				dispatch(logout());
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
			{tradeMember ? (
				<main className={Styles.container}>
					<div className={Styles.bikesContainer}>
						{products.map((tradeBike) => (
							<BikeCard key={tradeBike.id} tradeBike={tradeBike} />
						))}
					</div>
					<p className={Styles.signOutText}>
						You are signed in as {name}
						{company ? <span> at {company}</span> : null}.
					</p>
					<button onClick={logOut} className={Styles.signOutButton}>
						Sign out
					</button>
				</main>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default withAuth(Tradeportal);

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
			tradeProducts: wooCommerceProducts.data,
		},
		// revalidate: 60 // regenerate page with new data fetch after 60 seconds
	};
}
