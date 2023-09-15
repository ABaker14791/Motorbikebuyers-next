import Link from "next/link";
import Logo from "../assets/images/mbuyers_curves_final.svg";
import Image from "next/image";
import React from "react";
import Styles from "../styles/Footer.module.css";

const Footer = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.footer}>
				<div className={Styles.links}>
					<h4>Quick links</h4>
					<Link className={Styles.link} href="/">
						Home
					</Link>
					<Link className={Styles.link} href="/about">
						About
					</Link>
					<Link className={Styles.link} href="/contact">
						Contact
					</Link>
					<Link className={Styles.link} href="/faq">
						FAQs
					</Link>
					<Link className={Styles.link} href="/tradeportal">
						Trade Portal
					</Link>
				</div>
				<div className={Styles.centerWrap}>
					<Image src={Logo} display="block" alt="Motorbike buyers" />

					<div className={Styles.copyright}>
						<p>© Copyright 2022, The Motorbike Buyers.</p>
					</div>
				</div>
				<div className={Styles.blog}>
					<h4>Tips and guides</h4>
					<Link className={Styles.link} href="#">
						Valuation guide
					</Link>
					<Link className={Styles.link} href="/articles/maintenance">
						Maintainance guide
					</Link>
					<Link className={Styles.link} href="#">
						Ownership guide
					</Link>
					<Link className={Styles.link} href="#">
						Motorcycle buying tips
					</Link>
				</div>
			</div>
			<div className={Styles.info}>
				<p className={Styles.infoFCA}>
					VAT No. 386 5859 30 No. 958258 AKA Automotive Leeds LTD is authorised
					and regulated by the Financial Conduct Authority, FRN: 958258. All
					finance is subject to status and income. Written Quotation on request.
					We act as a credit broker not a lender. We work with a number of
					carefully selected credit providers who may be able to offer you
					finance for your purchase. We are only able to offer finance products
					from these providers. The Motorbike Buyers is a trading name of AKA
					Automotive Leeds LTD.
				</p>
			</div>
		</div>
	);
};

export default Footer;
