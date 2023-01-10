import { useState } from "react";
import Styles from "../../styles/Login.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../utils/firebase";

const login = () => {
	const auth = getAuth(app);
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
	return (
		<div className={Styles.container}>
			<form action="" className={Styles.login__form}>
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
				<button onClick={signUp}>Log in</button>
			</form>
		</div>
	);
};

export default login;
