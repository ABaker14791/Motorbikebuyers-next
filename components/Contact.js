import { useState } from "react";
import Styles from "../styles/Contact.module.css";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
	const [submitted, setSubmitted] = useState(false);
	const [name, setName] = useState("");

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},

		// Validate form
		validationSchema: Yup.object({
			name: Yup.string()
				.max(20, "Name must be 20 characters or less")
				.required("Name is required"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			message: Yup.string().required("Message is required"),
		}),

		// Submit form
		onSubmit: (values) => {
			sendContactEmail(values);
			setName(values.name);
			setSubmitted(true);
			console.log(values);
		},
	});

	async function sendContactEmail(data) {
		const response = await fetch("/api/mail/contactForm", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const detailsEmailConfirmation = await response.json();
	}

	return (
		<div className={Styles.container}>
			<div className={Styles.contactInfo}>
				<h1>Get in touch</h1>
				<p className={Styles.contactText}>
					For any queries not answered in our FAQ page please let us know your
					requirements and we will respond as soon as possible.
				</p>
				<div className={Styles.contactLink}>
					<FaPhone />
					<a href={"tel: +44 7770 444569"}>+44 7770 444569</a>
				</div>
				<div className={Styles.contactLink}>
					<FaEnvelope />
					<a href={"mailto: sales@themotorbikebuyers.co.uk"}>
						sales@themotorbikebuyers.co.uk
					</a>
				</div>
				<div className={Styles.contactLink}>
					<FaExternalLinkAlt />
					<Link href="#">
						<a>Follow and contact us directly on facebook</a>
					</Link>
				</div>
			</div>
			{submitted ? (
				<h2 className={Styles.successMessage}>
					Thank you for your message {name ? name : ""}.
				</h2>
			) : (
				<form className={Styles.contactForm} onSubmit={formik.handleSubmit}>
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
						placeholder="Name"
						name="name"
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<label
						htmlFor="email"
						className={
							formik.touched.email && formik.errors.email
								? Styles.labelError
								: ""
						}
					>
						{formik.touched.email && formik.errors.email
							? formik.errors.email
							: "Email"}
					</label>
					<input
						placeholder="Email"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<label
						htmlFor="message"
						className={
							formik.touched.message && formik.errors.message
								? Styles.labelError
								: ""
						}
					>
						{formik.touched.message && formik.errors.message
							? formik.errors.message
							: "Message"}
					</label>
					<textarea
						rows="4"
						placeholder="Message"
						name="message"
						value={formik.values.message}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<button className={Styles.contactButton} type="submit">
						Send
					</button>
				</form>
			)}
		</div>
	);
};

export default Contact;
