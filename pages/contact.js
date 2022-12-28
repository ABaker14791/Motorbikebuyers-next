import Head from "next/head";
import Contact from "../components/Contact";
import RegForm from "../components/RegForm";

const contact = () => {
	return (
		<div>
			<Head>
				<title>Motorbike Buyers Contact Us</title>
				<meta name="description" content="Contact Motorbike Buyers" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet preload prefetch"
					href="/fonts/UKNumberPlate.ttf"
					as="style"
					crossOrigin
				/>
			</Head>
			<Contact />
			<RegForm />
		</div>
	);
};

export default contact;
