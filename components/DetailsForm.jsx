import { useState, useRef, useEffect } from "react";
import Styles from "../styles/VehicleForm.module.css";

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
	// Form State
	const [data, setData] = useState({
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
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// insertBikeData(data);
		// sendConfirmationEmail(data);
		// sendDetailsEmail(data);
		addEmailContact(data);
		setSubmitted(true);
	};

	// After form submit scroll up to center the success message
	const ref = useRef(null);
	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
	}, [submitted]);

	const handleChange = (e) => {
		const type = e.target.type;
		const name = e.target.name;
		const value = type === "radio" ? e.target.checked : e.target.value;
		setData((prevData) => ({ ...prevData, [name]: value }));
	};

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
					<form className={Styles.form} onSubmit={handleSubmit}>
						<input
							className={Styles.textBox}
							value={bikeData.registrationNumber}
							onChange={handleChange}
							placeholder="Reg"
							name="regNumber"
							type="text"
						/>
						<input
							className={Styles.textBox}
							value={bikeData.make}
							onChange={handleChange}
							placeholder="Manufacturer"
							name="manufacturer"
							type="text"
						/>
						<input
							className={Styles.textBox}
							onChange={handleChange}
							placeholder="Model"
							name="model"
							type="text"
						/>
						<input
							className={Styles.textBox}
							value={bikeData.yearOfManufacture}
							onChange={handleChange}
							placeholder="Year"
							name="year"
							type="text"
						/>
						<input
							className={Styles.textBox}
							onChange={handleChange}
							placeholder="Mileage"
							name="mileage"
							type="text"
						/>

						<select
							name="serviceHistory"
							id="selector"
							className={Styles.formControl}
							onChange={handleChange}
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
								onChange={handleChange}
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
								onChange={handleChange}
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
								onChange={handleChange}
								id="selector"
								value="Yes"
								name="finance"
							/>
							<label>Yes</label>
							<br />
							<input
								type="radio"
								className={Styles.selector}
								onChange={handleChange}
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
								onChange={handleChange}
								id="selector"
								value="Yes"
								name="stolen"
							/>
							<label>Yes</label>
							<br />
							<input
								type="radio"
								className={Styles.selector}
								onChange={handleChange}
								id="selector"
								value="No"
								defaultChecked={true}
								name="stolen"
							/>
							<label>No</label>
							<br />
						</div>

						<select
							name="condition"
							id="selector"
							className={Styles.formControl}
							onChange={handleChange}
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
						<input
							className={Styles.textBox}
							onChange={handleChange}
							placeholder="First Name"
							name="firstName"
							type="text"
							required
						/>
						<input
							className={Styles.textBox}
							onChange={handleChange}
							placeholder="Last Name"
							name="lastName"
							type="text"
							required
						/>
						<input
							className={Styles.textBox}
							onChange={handleChange}
							placeholder="Email"
							name="email"
							type="text"
							required
						/>
						<input
							className={Styles.textBox}
							onChange={handleChange}
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
