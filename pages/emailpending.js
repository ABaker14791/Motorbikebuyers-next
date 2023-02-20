import React from "react";
import Styles from "../styles/Emailpending.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
// Firebase
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Emailpending = () => {
	const dispatch = useDispatch();
	const router = useRouter();

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
