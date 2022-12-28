import { useState } from "react";
import Styles from "../styles/Contact.module.css";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

const Contact = () => {
	const [submitted, setSubmitted] = useState(false);
	const [data, setData] = useState({
		name: "",
		email: "",
		message: "",
	});

	async function handleOnSubmit(e) {
		e.preventDefault();
		sendContactEmail(data);
		setSubmitted(true);
	}

	async function sendContactEmail(data) {
		const response = await fetch("/api/mail/contactForm", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const detailsEmailConfirmation = await response.json();
		console.log(detailsEmailConfirmation);
	}

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData((prevData) => ({ ...prevData, [name]: value }));
	};

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
					<Link href="#">
						<a>+44 7770 444569</a>
					</Link>
				</div>
				<div className={Styles.contactLink}>
					<FaEnvelope />
					<Link href="#">
						<a>sales@themotorbikebuyers.co.uk</a>
					</Link>
				</div>
				<div className={Styles.contactLink}>
					<FaExternalLinkAlt />
					<Link href="#">
						<a>Follow and contact us directly on facebook</a>
					</Link>
				</div>
			</div>
			{submitted ? (
				<div>Thank you.</div>
			) : (
				<form onSubmit={handleOnSubmit} className={Styles.contactForm}>
					<label>Name</label>
					<input placeholder="Name" name="name" onChange={handleChange} />
					<label>Email</label>
					<input placeholder="Email" name="email" onChange={handleChange} />
					<label>Message</label>
					<input placeholder="Message" name="message" onChange={handleChange} />
					<button className={Styles.contactButton}>Send</button>
				</form>
			)}
		</div>
	);
};

export default Contact;
