import { useState } from "react";
import { useRouter } from "next/router";
import Styles from "../../styles/Login.module.css";
import {
	createUserWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterForm = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: "",
			name: "",
			company: "",
			password: "",
			confirmPassword: "",
		},

		// Validate form
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			name: Yup.string()
				.max(20, "Name must be 20 characters or less")
				.required("Name is required"),
			company: Yup.string()
				.max(40, "Company must be 40 characters or less")
				.required("Company is required"),
			password: Yup.string().required("Password is required"),
			confirmPassword: Yup.string().oneOf(
				[Yup.ref("password"), null],
				"Passwords must match"
			),
		}),

		// Submit form
		onSubmit: (values) => {
			register(values);
		},
	});

	const passwordValidation = (values) => {
		const pass = values.password;
		const confirmPass = values.confirmPassword;
		if (pass !== confirmPass) {
			return false;
		} else {
			return true;
		}
	};

	const register = async (loginValues) => {
		if (passwordValidation) {
			try {
				const account = await createUserWithEmailAndPassword(
					auth,
					loginValues.email,
					loginValues.password
				);
				await updateProfile(account.user, {
					displayName: loginValues.name,
				});
				const emailVerification = await sendEmailVerification(auth.currentUser);
				// Data for firebase user
				const data = {
					uid: account.user.uid,
					Company: loginValues.company,
					Name: loginValues.name,
					Email: loginValues.email,
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
				router.push("/emailpending");
			} catch (error) {
				console.log(
					"Something went wrong with added user to database: ",
					error
				);
			}
		} else console.log("passwords do not match");
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
				htmlFor="name"
				className={
					formik.touched.name && formik.errors.name ? Styles.labelError : ""
				}
			>
				{formik.touched.name && formik.errors.name
					? formik.errors.name
					: "Name"}
			</label>
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={formik.values.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				required
			/>
			<label
				htmlFor="company"
				className={
					formik.touched.company && formik.errors.company
						? Styles.labelError
						: ""
				}
			>
				{formik.touched.company && formik.errors.company
					? formik.errors.company
					: "Company"}
			</label>
			<input
				type="text"
				name="company"
				placeholder="Company Name"
				value={formik.values.company}
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
			<label
				htmlFor="confirmPassword"
				className={
					formik.touched.confirmPassword && formik.errors.confirmPassword
						? Styles.labelError
						: ""
				}
			>
				{formik.touched.confirmPassword && formik.errors.confirmPassword
					? formik.errors.confirmPassword
					: "Confirm Password"}
			</label>
			<input
				type="password"
				name="confirmPassword"
				placeholder="Confirm Password"
				value={formik.values.confirmPassword}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				required
			/>

			<button type="submit" className={Styles.loginButton}>
				Create Account
			</button>
		</form>
	);
};

export default RegisterForm;
