import { useRouter } from "next/router";
import Styles from "../../styles/Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},

		// Validate form
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			password: Yup.string().required("Password is required"),
		}),

		// Submit form
		onSubmit: (values) => {
			signIn(values);
		},
	});

	const signIn = (formValues) => {
		signInWithEmailAndPassword(auth, formValues.email, formValues.password)
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
		<form onSubmit={formik.handleSubmit} className={Styles.login__form}>
			<label
				htmlFor="email"
				className={
					formik.touched.email && formik.errors.email ? Styles.labelError : ""
				}
			>
				{formik.touched.email && formik.errors.email
					? formik.errors.email
					: "Email"}
			</label>
			<input
				type="text"
				name="email"
				placeholder="Email"
				value={formik.values.email}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				required
			/>
			<label
				htmlFor="password"
				className={
					formik.touched.password && formik.errors.password
						? Styles.labelError
						: ""
				}
			>
				{formik.touched.password && formik.errors.password
					? formik.errors.password
					: "Password"}
			</label>
			<input
				type="password"
				name="password"
				placeholder="Password"
				value={formik.values.password}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				required
			/>

			<button className={Styles.loginButton}>Sign in</button>
		</form>
	);
};

export default LoginForm;
