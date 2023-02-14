import React from "react";
import Image from "next/image";
import HeroImg from "../assets/images/hero-img.jpg";
import Styles from "../styles/MastHead.module.css";

const MastHead = () => {
	return (
		<div className={Styles.container}>
			<Image src={HeroImg} alt="" />
			<h1 className={Styles.heading}>
				The best way to get your bike valued,{" "}
				<span className={Styles.fastText}>fast</span> and{" "}
				<span className={Styles.secureText}>secure</span>
			</h1>
		</div>
	);
};

export default MastHead;
