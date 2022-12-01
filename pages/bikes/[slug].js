import { useState } from "react";
// next imports
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
// Woocommerce data
import { fetchWooCommerceProducts } from "../../utils/wooCommerceApi";
// Styles
import Styles from "../../styles/Slug.module.css";
// AWS
import { Authenticator } from "@aws-amplify/ui-react";
// Components
import ReturnBar from "../../components/ReturnBar";
import EnquiryForm from "../../components/EnquiryForm";

export const getStaticProps = async () => {
	const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
		console.error(error)
	);

	if (!wooCommerceProducts) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			products: wooCommerceProducts.data,
		},
		// revalidate: 60 // regenerate page with new data fetch after 60 seconds
	};
};

const bikeDetails = (props) => {
	const products = props;
	console.log(products);
	const { title, price, image, description } = products.fields;
	const [formOpen, setFormOpen] = useState(false);
	console.log(formOpen);

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Sell your motorbike online" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ReturnBar />
			<div className={Styles.container}>
				<Authenticator>
					<div className={Styles.image}>
						<Image
							src={"https:" + image.fields.file.url}
							width={image.fields.file.details.image.width}
							height={image.fields.file.details.image.height}
							alt="bike for sale"
						/>
					</div>
					<div className={Styles.info}>
						<h2 className={Styles.title}>{title}</h2>
						<div className={Styles.price}>£{price}</div>
						<div className={Styles.description}>{description}</div>
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

export default bikeDetails;
