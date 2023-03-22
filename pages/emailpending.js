import { useEffect } from "react";
import Styles from "../styles/emailpending.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { usePush } from "../utils/usePush";
// Firebase
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Emailpending = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const push = usePush();

	// Route back to trade portal if the email is verified
	useEffect(() => {
		onAuthStateChanged(auth, async (userAuth) => {
			if (userAuth) {
				if (userAuth.emailVerified) {
					push("/tradeportal");
				}
			}
		});
	}, []);

	const logOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log("Sign out successfull.");
				dispatch(logout());
				router.push("/login");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className={Styles.container}>
			<div>
				<h1>Please verify your Email address to visit the trade portal.</h1>
			</div>
			<button onClick={logOut} className={Styles.signOutButton}>
				Sign out
			</button>
		</div>
	);
};

export default Emailpending;
