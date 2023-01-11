import { useState } from "react";
import Styles from "../../styles/Login.module.css";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../utils/firebase";

const login = () => {
	const auth = getAuth(app);
	const [hasAccount, setHasAccount] = useState(true);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signUp = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};

	const signIn = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log(user);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorCode);
			});
	};

	return (
		<div className={Styles.container}>
			<div className={Styles.loginTabs}>
				<button className={Styles.tab}>Sign In</button>
				<button className={Styles.tab}>Create Account</button>
			</div>
			<div action="" className={Styles.login__form}>
				{hasAccount ? (
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
							type="text"
							name="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>

						<button onClick={signIn}>Sign in</button>
						<button onClick={() => setHasAccount(false)}>Create Account</button>
					</>
				) : (
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
							type="text"
							name="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button onClick={signUp}>Create Account</button>
					</>
				)}
			</div>
		</div>
	);
};

export default login;
