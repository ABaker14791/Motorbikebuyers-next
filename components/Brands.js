import React from "react";
import Styles from "../styles/Brands.module.css";
import Image from "next/image";
import Honda from "../assets/icons/honda.svg";
import Ducati from "../assets/icons/ducati.svg";
import Husqvarna from "../assets/icons/husqvarna.svg";
import Ktm from "../assets/icons/ktm.svg";
import Triumph from "../assets/icons/triumph.svg";

const Brands = () => {
	return (
		<div className={Styles.Container}>
			<h2 className={Styles.Heading}>Bike Brands We Have Collected Recently</h2>
			<h3 className={Styles.SubHeading}>
				Below you will find some of the most popular brands that we have
				collected through our online valuation system.
			</h3>
			<div className={Styles.iconContainer}>
				<div className={Styles.iconItem}>
					<Image src={Honda} alt="honda logo" />
				</div>
				<div className={Styles.iconItem}>
					<Image src={Ducati} alt="ducati logo" />
				</div>
				<div className={Styles.iconItem}>
					<Image src={Triumph} alt="triumph logo" />
				</div>
				<div className={Styles.iconItem}>
					<Image src={Husqvarna} alt="husqvarna logo" />
				</div>
				<div className={Styles.iconItem}>
					<Image src={Ktm} alt="ktm logo" />
				</div>
			</div>
		</div>
	);
};

export default Brands;
