import { useRouter } from "next/router";
import Styles from "../../styles/Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const loginForm = () => {
	const router = useRouter();
	const dispatch = useDispatch();

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
	);
};

export default loginForm;
