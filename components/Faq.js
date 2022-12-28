import { useState } from "react";
import { FaqData } from "./FaqData.js";
import Link from "next/link";
import Styles from "../styles/Faq.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Faq = (index) => {
	const [clicked, setClicked] = useState(false);

	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}
		setClicked(index);
	};
	return (
		<div className={Styles.container}>
			<h1>Frequestly Asked Questions</h1>
			<p className={Styles.faqText}>
				Here you will find our most frequently asked questions
			</p>
			<p className={Styles.faqText}>
				For any questions not answered here please feel free to{" "}
				<Link href="/contact">Contact Us.</Link>
			</p>

			<div className={Styles.accordion}>
				{FaqData.map((item, index) => {
					return (
						<div
							className={Styles.accordItem}
							onClick={() => toggle(index)}
							key={index}
						>
							<h2>{item.question}</h2>
							{clicked === index ? <FaAngleUp /> : <FaAngleDown />}
							<span
								className={
									clicked === index ? Styles.accordAnsOpen : Styles.accordAns
								}
							>
								<p>{item.answer}</p>
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Faq;
