import React from "react";
import Styles from "../styles/EnquiryForm.module.css";

const EnquiryForm = ({ formOpen, setFormOpen, company, name }) => {
	return (
		<div className={Styles.overlay}>
			<form className={Styles.form}>
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
					<button className={Styles.submitButton}>Submit Enquiry</button>
					<p className={Styles.footerName}>{name}</p>
					{/* <p className={Styles.footerCompany}>{company}</p> */}
				</div>
			</form>
		</div>
	);
};

export default EnquiryForm;
