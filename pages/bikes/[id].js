import { useState } from "react";
// next imports
import Head from "next/head";
import Image from "next/image";
// Woocommerce data
import { fetchWooCommerceSingle } from "../../utils/wooCommerceApi";
// Styles
import Styles from "../../styles/Slug.module.css";
// AWS
import { Authenticator } from "@aws-amplify/ui-react";
// Components
import ReturnBar from "../../components/ReturnBar";
import EnquiryForm from "../../components/EnquiryForm";

export const getServerSideProps = async (context) => {
	const { id } = context.params;
	const items = await fetchWooCommerceSingle(`${id}`);
	const data = await items.data;

	return {
		props: {
			bike: data,
		},
	};
};

const BikeDetails = (props) => {
	const bike = props.bike;

	const [formOpen, setFormOpen] = useState(false);
	console.log(formOpen);

	return (
		<div>
			<Head>
				<title>{bike.title}</title>
				<meta name="description" content="Sell your motorbike online" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ReturnBar />
			<div className={Styles.container}>
				<Authenticator>
					<div className={Styles.image}>
						<Image
							src={bike.images[0].src}
							width={902}
							height={677}
							alt="bike for sale"
						/>
					</div>
					<div className={Styles.info}>
						<h2 className={Styles.title}>{bike.title}</h2>
						<div className={Styles.price}>£{bike.price}</div>
						<div className={Styles.description}>
							{bike.description.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, "")}
						</div>
						<div className={Styles.actions}>
							<div className={Styles.actions}>
								<button
									onClick={() => {
										setFormOpen(!formOpen);
									}}
								>
									Enquire Now
								</button>
							</div>
						</div>
					</div>
					{formOpen ? (
						<EnquiryForm formOpen={formOpen} setFormOpen={setFormOpen} />
					) : null}
				</Authenticator>
			</div>
		</div>
	);
};

export default BikeDetails;
