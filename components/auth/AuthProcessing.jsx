import React from "react";
import Styles from "../../styles/AuthProcessing.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
// Firebase
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";

const AuthProcessing = () => {
	const dispatch = useDispatch();

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
		<main className={Styles.container}>
			<h1 className={Styles.heading}>
				We are currently processing your account.
			</h1>
			<h2 className={Styles.subHeading}>
				You will gain access to the trade portal once your account information
				has been verified, thank you for your patience.
			</h2>
			<button onClick={logOut} className={Styles.signOutButton}>
				Sign out
			</button>
		</main>
	);
};

export default AuthProcessing;
