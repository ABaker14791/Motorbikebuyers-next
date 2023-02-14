import React from "react";
import Styles from "../styles/EnquiryForm.module.css";

const EnquiryForm = ({ formOpen, setFormOpen, company, name }) => {
	const closeModal = () => {
		setFormOpen(false);
	};

	function submitEnquiry(event) {
		event.preventDefault();
		console.log("i want this bike");
	}

	return (
		<div className={Styles.container}>
			<div className={Styles.overlay} onClick={closeModal}></div>
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
					Alternatively give us a call on <span>+44 7770 444569</span>
				</h4>
				<textarea name="message" id="messageBox" cols="30" rows="10"></textarea>
				<div className={Styles.formFooter}>
					<button className={Styles.submitButton} type="submit">
						Submit Enquiry
					</button>
					<p className={Styles.footerName}>{name}</p>
					{/* <p className={Styles.footerCompany}>{company}</p> */}
				</div>
			</form>
		</div>
	);
};

export default EnquiryForm;
