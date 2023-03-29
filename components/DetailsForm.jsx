import { useState, useRef, useEffect } from "react";
import Styles from "../styles/VehicleForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

// MongoDB insert motorcycle data
async function insertBikeData(bikeData) {
	const response = await fetch("/api/mongo/bikes", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(bikeData),
	});
	const data = await response.json();
	console.log(data);
}

async function sendConfirmationEmail(data) {
	const response = await fetch("/api/mail/confirmation", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	const emailConfirmation = await response.json();
}

// Send email to ourself with details of motorcycle and customer
async function sendDetailsEmail(data) {
	const response = await fetch("/api/mail/bikeDetails", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	const detailsEmailConfirmation = await response.json();
}

async function addEmailContact(data) {
	const response = await fetch("/api/mail/emailAddContact", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	const contactEmailConfirmation = await response.json();
	console.log(contactEmailConfirmation);
}

const DetailsForm = ({ bikeData }) => {
	// Hide form & show success message once submitted.
	const [submitted, setSubmitted] = useState(false);

	const formik = useFormik({
		initialValues: {
			regNumber: bikeData.registrationNumber || "",
			manufacturer: bikeData.make || "",
			model: "",
			year: bikeData.yearOfManufacture || "",
			mileage: "",
			serviceHistory: "Select sevice history",
			keeper: "Yes",
			finance: "No",
			stolen: "No",
			condition: "",
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			dateSubmitted: new Date(),
		},

		// Validate form
		validationSchema: Yup.object({
			regNumber: Yup.string()
				.max(8, "Registration must be 8 characters or less")
				.required("Registration is required"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			manufacturer: Yup.string().required("Manufacturer is required"),
			model: Yup.string().required("Model is required"),
			phone: Yup.string().required("Phone number is required"),
		}),

		// Submit form
		onSubmit: (values) => {
			// insertBikeData(values);
			// sendConfirmationEmail(values);
			// sendDetailsEmail(values);
			addEmailContact(values);
			setSubmitted(true);
			// console.log(values);
		},
	});

	// After form submit scroll up to center the success message
	const ref = useRef(null);
	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
	}, [submitted]);

	return (
		<>
			{submitted ? (
				<div className={Styles.confirmationNotice} ref={ref}>
					Thank you for submitting your details, we will be in touch shortly.
				</div>
			) : (
				<div className={Styles.container}>
					<h1>Enter Your Motorbike Details</h1>
					<p>
						Submit your motorcycle details and your contact information below to
						get your free online valuation.
					</p>
					<form className={Styles.form} onSubmit={formik.handleSubmit}>
						<label
							htmlFor="regNumber"
							className={
								formik.touched.regNumber && formik.errors.regNumber
									? Styles.labelError
									: ""
							}
						>
							{formik.touched.regNumber && formik.errors.regNumber
								? formik.errors.regNumber
								: "Registration *"}
						</label>
						<input
							className={Styles.textBox}
							value={formik.values.regNumber}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Reg"
							name="regNumber"
							type="text"
						/>

						<label
							htmlFor="manufacturer"
							className={
								formik.touched.manufacturer && formik.errors.manufacturer
									? Styles.labelError
									: ""
							}
						>
							{formik.touched.manufacturer && formik.errors.manufacturer
								? formik.errors.manufacturer
								: "Manufacturer *"}
						</label>
						<input
							className={Styles.textBox}
							value={formik.values.manufacturer}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Manufacturer"
							name="manufacturer"
							type="text"
						/>

						<label
							htmlFor="model"
							className={
								formik.touched.model && formik.errors.model
									? Styles.labelError
									: ""
							}
						>
							{formik.touched.model && formik.errors.model
								? formik.errors.model
								: "Model *"}
						</label>

						<input
							className={Styles.textBox}
							value={formik.values.model}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Model"
							name="model"
							type="text"
						/>

						<label
							htmlFor="year"
							className={
								formik.touched.year && formik.errors.year
									? Styles.labelError
									: ""
							}
						>
							{formik.touched.year && formik.errors.year
								? formik.errors.manufacturer
								: "Year"}
						</label>
						<input
							className={Styles.textBox}
							value={formik.values.year}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Year"
							name="year"
							type="text"
						/>

						<label
							htmlFor="mileage"
							className={
								formik.touched.mileage && formik.errors.mileage
									? Styles.labelError
									: ""
							}
						>
							{formik.touched.mileage && formik.errors.mileage
								? formik.errors.mileage
								: "Mileage *"}
						</label>

						<input
							className={Styles.textBox}
							value={formik.values.mileage}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Mileage"
							name="mileage"
							type="text"
						/>

						<label
							htmlFor="serviceHistory"
							className={
								formik.touched.serviceHistory && formik.errors.serviceHistory
									? Styles.labelError
									: ""
							}
						>
							{formik.touched.serviceHistory && formik.errors.serviceHistory
								? formik.errors.serviceHistory
								: "Service History *"}
						</label>

						<select
							name="serviceHistory"
							id="selector"
							className={Styles.formControl}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							defaultValue={0}
						>
							<option disabled={true} value="0">
								--Select service history--
							</option>
							<option value="Full Manufacturer">Full Manufacturer</option>
							<option value="Full Mixed">Full Mixed</option>
							<option value="Part">Part</option>
							<option value="None">None</option>
						</select>

						<div className={Styles.formGroup}>
							<label htmlFor="keeper">
								Are you the registered owner and keeper of the vehicle?
							</label>
							<br />
							<input
								type="radio"
								className={Styles.selector}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								id="selector"
								value="Yes"
								defaultChecked={true}
								name="keeper"
							/>
							<label>Yes</label>
							<br />
							<input
								type="radio"
								className={Styles.selector}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								id="selector"
								value="No"
								name="keeper"
							/>
							<label>No</label>
							<br />
						</div>
						<div className={Styles.formGroup}>
							<label htmlFor="finance">
								Does the vehicle have any outstanding finance?
							</label>
							<br />
							<input
								type="radio"
								className={Styles.selector}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								id="selector"
								value="Yes"
								name="finance"
							/>
							<label>Yes</label>
							<br />
							<input
								type="radio"
								className={Styles.selector}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								id="selector"
								value="No"
								defaultChecked={true}
								name="finance"
							/>
							<label>No</label>
							<br />
						</div>
						<div className={Styles.formGroup}>
							<label htmlFor="stolen">
								Has the vehicle ever been a registered write off or stolen?
							</label>
							<br />
							<input
								type="radio"
								className={Styles.selector}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								id="selector"
								value="Yes"
								name="stolen"
							/>
							<label>Yes</label>
							<br />
							<input
								type="radio"
								className={Styles.selector}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								id="selector"
								value="No"
								defaultChecked={true}
								name="stolen"
							/>
							<label>No</label>
							<br />
						</div>

						<label
							htmlFor="condition"
							className={
								formik.touched.condition && formik.errors.condition
									? Styles.labelError
									: ""
							}
						>
							{formik.touched.condition && formik.errors.condition
								? formik.errors.condition
								: "Condition *"}
						</label>
						<select
							name="condition"
							id="selector"
							className={Styles.formControl}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							defaultValue={0}
						>
							<option disabled={true} value="0">
								--Select condition--
							</option>
							<option value="1">1 - Very poor</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5 - Average</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10 - Very good</option>
						</select>

						<label
							htmlFor="firstName"
							className={
								formik.touched.firstName && formik.errors.firstName
									? Styles.labelError
									: ""
							}
						>
							{formik.touched.firstName && formik.errors.firstName
								? formik.errors.firstName
								: "First Name *"}
						</label>

						<input
							className={Styles.textBox}
							value={formik.values.firstName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="First Name"
							name="firstName"
							type="text"
							required
						/>

						<label
							htmlFor="lastName"
							className={
								formik.touched.lastName && formik.errors.lastName
									? Styles.labelError
									: ""
							}
						>
							{formik.touched.lastName && formik.errors.lastName
								? formik.errors.lastName
								: "Last Name *"}
						</label>
						<input
							className={Styles.textBox}
							value={formik.values.lastName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Last Name"
							name="lastName"
							type="text"
							required
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
								: "Email *"}
						</label>
						<input
							className={Styles.textBox}
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Email"
							name="email"
							type="text"
							required
						/>

						<label
							htmlFor="phone"
							className={
								formik.touched.phone && formik.errors.phone
									? Styles.labelError
									: ""
							}
						>
							{formik.touched.phone && formik.errors.phone
								? formik.errors.phone
								: "Phone *"}
						</label>
						<input
							className={Styles.textBox}
							value={formik.values.phone}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							placeholder="Phone number"
							name="phone"
							type="text"
						/>
						<div className={Styles.disclaimer}>
							<span>
								We will use your personal information to provide you with your
								valuation. View full terms and conditions and privacy policy
							</span>
							<br />
							<div className={Styles.disclaimer__checkControl}>
								<input type="checkbox" name="confirm" required />
								<label htmlFor="confirm">
									Please select the checkbox if you consent to
									themotorbikebuyers.co.uk using the information you have given
									us here to value your motorbike and communicate with you by
									email and phone about that valuation.
								</label>
							</div>
						</div>
						<button type="submit" className={Styles.submitButton}>
							Submit
						</button>
					</form>
				</div>
			)}
		</>
	);
};

export default DetailsForm;
