import React from "react";
import Image from "next/image";
import HeroImg from "../assets/images/hero-img.jpg";
import Styles from "../styles/MastHead.module.css";

const MastHead = () => {
	return (
		<div>
			<Image src={HeroImg} alt="" />
		</div>
	);
};

export default MastHead;
