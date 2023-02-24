import { useState } from "react";
import Styles from "../styles/EnquiryForm.module.css";

const EnquiryForm = ({
	formOpen,
	setFormOpen,
	company,
	name,
	email,
	bikeName,
}) => {
	const [data, setData] = useState({
		name: name,
		company: company,
		email: email,
		bikeName: bikeName,
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const closeModal = () => {
		setFormOpen(false);
	};

	// api to api route with company and message
	async function sendEnquiryForm(data) {
		const response = await fetch("/api/mail/enquiryForm", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const detailsEmailConfirmation = await response.json();
		console.log(detailsEmailConfirmation);
	}

	function submitEnquiry(event) {
		event.preventDefault();
		sendEnquiryForm(data);
		setSubmitted(true);
	}

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData((prevData) => ({ ...prevData, [name]: value }));
		console.log(data);
	};

	return (
		<div className={Styles.container}>
			<div className={Styles.overlay} onClick={closeModal}></div>
			{submitted ? (
				<div className={Styles.confirmationModal}>
					<button
						className={Styles.closeButton}
						onClick={() => {
							setFormOpen(!formOpen);
						}}
					>
						X
					</button>
					<h3>Thank you for your enquiry.</h3>
				</div>
			) : (
				<form className={Styles.form} onSubmit={submitEnquiry}>
					<button
						className={Styles.closeButton}
						onClick={() => {
							setFormOpen(!formOpen);
						}}
					>
						X
					</button>
					<h3 className={Styles.enquiryMessage}>
						Enter your enquiry message below or leave blank and we will be in
						touch.
					</h3>
					<h4 className={Styles.enquirySubheading}>
						Alternatively give us a call on{" "}
						<a href={"tel:+44 7770 444569"}>+44 7770 444569</a>
					</h4>
					<textarea
						name="message"
						id="messageBox"
						placeholder="Message"
						onChange={handleChange}
						cols="30"
						rows="10"
					></textarea>
					<div className={Styles.formFooter}>
						<button className={Styles.submitButton} type="submit">
							Submit Enquiry
						</button>
						<p className={Styles.footerName}>{name}</p>
					</div>
				</form>
			)}
		</div>
	);
};

export default EnquiryForm;
