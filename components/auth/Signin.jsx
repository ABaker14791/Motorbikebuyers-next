import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Styles from "../../styles/Login.module.css";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

const Signin = () => {
	const router = useRouter();
	// Toggle login tab between signin and register
	const [loginState, setLoginState] = useState(true);
	// Form
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	// const [confirmPassword, setConfirmPassword] = useState("");
	const [company, setCompany] = useState("");
	// redux
	const dispatch = useDispatch();

	const passwordValidation = (e) => {
		const confirmPass = e.target.value;
		if (password !== confirmPass) {
			e.target.setCustomValidity("Passwords do not match.");
			return false;
		} else {
			e.target.setCustomValidity("");
			return true;
		}
	};

	const register = async (e) => {
		e.preventDefault();
		if (passwordValidation) {
			try {
				const account = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				await updateProfile(account.user, {
					displayName: name,
				});
				// const emailVerification = await sendEmailVerification(auth.currentUser);
				const data = {
					uid: account.user.uid,
					Company: company,
					Name: name,
					Email: email,
					Trade_Member: false,
				};
				await setDoc(doc(db, "users", account.user.uid), data);
				dispatch(
					login({
						email: account.user.email,
						uid: account.user.uid,
						displayName: account.user.displayName,
					})
				);
				router.push("/emailpending"); // cant route to trade portal as user is not yet verified.
			} catch (error) {
				console.log(
					"Something went wrong with added user to database: ",
					error
				);
			}
		} else console.log("passwords do not match");
	};

	const signIn = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				const userInfo = JSON.stringify(user);
				dispatch(login(userInfo));
				console.log(user);
				router.push("/tradeportal");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorMessage);
				console.log(errorCode + " " + errorMessage);
			});
	};

	return (
		<div className={Styles.container}>
			<Head>
				<title>Motorbike Buyers Sign In</title>
				<meta name="description" content="Motorbike Buyers Sign In" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={Styles.loginTabs}>
				<button
					className={loginState ? Styles.tabActive : Styles.tab}
					onClick={() => setLoginState(true)}
				>
					Sign In
				</button>
				<button
					className={loginState ? Styles.tab : Styles.tabActive}
					onClick={() => setLoginState(false)}
				>
					Create Account
				</button>
			</div>
			{loginState ? (
				<form onSubmit={signIn} className={Styles.login__form}>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					<button className={Styles.loginButton}>Sign in</button>
				</form>
			) : (
				<form onSubmit={register} className={Styles.login__form}>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						placeholder="Name"
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<label htmlFor="company">Company Name</label>
					<input
						type="text"
						name="company"
						placeholder="Company Name"
						onChange={(e) => setCompany(e.target.value)}
						required
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						name="confirmPassword"
						placeholder="Confirm Password"
						onChange={(e) => passwordValidation(e)}
						required
					/>

					<button className={Styles.loginButton}>Create Account</button>
				</form>
			)}
		</div>
	);
};

export default Signin;
