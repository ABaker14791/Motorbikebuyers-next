import { useState } from "react";
import { useRouter } from "next/router";
import Styles from "../../styles/Login.module.css";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
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
	const [company, setCompany] = useState("");
	// redux
	const dispatch = useDispatch();

	const register = async (e) => {
		e.preventDefault();
		try {
			const account = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log(account.user.uid);
			const data = {
				Company: company,
				Name: name,
				Email: email,
				Trade_Member: false,
			};
			await setDoc(doc(db, "users", account.user.uid), data);
		} catch (error) {
			console.log("Something went wrong with added user to database: ", error);
		}
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
				console.log(errorCode + " " + errorMessage);
			});
	};

	return (
		<div className={Styles.container}>
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
			<form action="" className={Styles.login__form}>
				{loginState ? (
					<>
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name="email"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>

						<button onClick={signIn} className={Styles.loginButton}>
							Sign in
						</button>
					</>
				) : (
					<>
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
							// TODO: create a function to check if passwords match
						/>

						<button onClick={register} className={Styles.loginButton}>
							Create Account
						</button>
					</>
				)}
			</form>
		</div>
	);
};

export default Signin;