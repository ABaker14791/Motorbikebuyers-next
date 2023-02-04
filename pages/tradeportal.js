import Head from "next/head";
import { useState, useEffect } from "react";
import BikeCard from "../components/BikeCard";
import Styles from "../styles/Tradeportal.module.css";
import Signin from "../components/auth/Signin";
import withAuth from "../utils/withAuth";
// Woocommerce data
import { fetchWooCommerceProducts } from "../utils/wooCommerceApi";
// Firebase
import { auth, db } from "../utils/firebase";
import { getDoc, doc } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
// Auth redux
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "../store/authSlice";

const Tradeportal = (props) => {
	// redux
	const user = useSelector(selectUser);
	const [company, setCompany] = useState("");
	const [tradeMember, setTradeMember] = useState(false);
	const dispatch = useDispatch();
	const { products } = props;

	useEffect(() => {
		const fetchUserData = async () => {
			onAuthStateChanged(auth, async (userAuth) => {
				// the state changes and this runs again but returns null, we need it to not try run on log out
				if (userAuth) {
					const docRef = doc(db, "users", userAuth.uid);
					const docSnap = await getDoc(docRef);

					if (docSnap.exists()) {
						setCompany(docSnap.data().Company);
						setTradeMember(docSnap.data().Trade_Member);
						console.log("Document data:", docSnap.data());
						console.log(tradeMember);
					} else {
						console.log("No such document!");
					}
				} else {
					console.log("No user found");
				}
			});
		};
		fetchUserData();
	}, [company]);

	const userIsTradeMember = () => {
		// TODO: if user is a member we set state to allow access to trade portal.
	};

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
			{user ? (
				<div className={Styles.authContainer}>
					<main className={Styles.container}>
						<div className={Styles.bikesContainer}>
							{products.map((tradeBike) => (
								<BikeCard key={tradeBike.id} tradeBike={tradeBike} />
							))}
						</div>
						<p className={Styles.signOutText}>
							You are signed in as {user.displayName} at {company}.
						</p>
						<button onClick={logOut} className={Styles.signOutButton}>
							Sign out
						</button>
					</main>
				</div>
			) : (
				<Signin />
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
			products: wooCommerceProducts.data,
		},
		// revalidate: 60 // regenerate page with new data fetch after 60 seconds
	};
}
