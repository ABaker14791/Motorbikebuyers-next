import React from "react";
import Head from "next/head";
import Faq from "../components/Faq";

const faq = () => {
	return (
		<div>
			<Head>
				<title>Motorbike Buyers</title>
				<meta name="description" content="Sell your motorbike online" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet preload prefetch"
					href="/fonts/UKNumberPlate.ttf"
					as="style"
					crossOrigin
				/>
			</Head>
			<Faq />
		</div>
	);
};

export default faq;
