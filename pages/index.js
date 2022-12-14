import Head from "next/head";
import MastHead from "../components/MastHead";
import RegForm from "../components/RegForm";
import HowWeWork from "../components/HowWeWork";
import Intro from "../components/Intro";
import Brands from "../components/Brands";

export default function index() {
	return (
		<div>
			<Head>
				<title>Motorbike Buyers</title>
				<meta name="description" content="Sell your motorbike online" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />

				<link
					as="style"
					rel="stylesheet preload prefetch"
					href="/fonts/UKNumberPlate.ttf"
					crossOrigin
				/>
			</Head>
			<MastHead />
			<RegForm />
			<HowWeWork />
			<Intro />
			<Brands />
		</div>
	);
}
