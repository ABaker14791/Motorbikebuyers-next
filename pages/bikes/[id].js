import { useState, useRef } from "react";
// next imports
import Head from "next/head";
import Image from "next/image";
// Woocommerce data
import { fetchWooCommerceSingle } from "../../utils/wooCommerceApi";
// Styles
import Styles from "../../styles/Slug.module.css";
// Icons
import {
	FaWhatsapp,
	FaPhone,
	FaCalendarAlt,
	FaTachometerAlt,
} from "react-icons/fa";
// Firebase auth
import withAuth from "../../utils/withAuth";
import { logout } from "../../store/authSlice";

// Components
import ReturnBar from "../../components/ReturnBar";
import EnquiryForm from "../../components/EnquiryForm";
import Loading from "../../components/Loading";

export const getServerSideProps = async (context) => {
	const { id } = context.params;
	const items = await fetchWooCommerceSingle(`${id}`);
	const data = await items.data;

	if (!data) {
		return {
			notFound: true,
		};
	} else {
		return {
			props: {
				bike: data,
			},
		};
	}
};

const BikeDetails = ({ bike, tradeMember, email, name, company }) => {
	const galleryImages = bike.images;
	console.log(bike);
	const attributes = bike.attributes;

	const [formOpen, setFormOpen] = useState(false);
	const [featureImage, setFeatureImage] = useState(bike.images[0].src);
	const gallery = useRef(null);

	const logOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				console.log("Sign out successfull.");
				dispatch(logout());
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<Head>
				<title>{bike.name}</title>
				<meta name="description" content="Sell your motorbike online" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ReturnBar />
			{tradeMember ? (
				<div className={Styles.container}>
					<div className={Styles.rowContainer}>
						<div className={Styles.image}>
							<Image
								src={featureImage}
								width={902}
								height={677}
								alt="bike for sale"
							/>
						</div>
						<div className={Styles.info}>
							<h2 className={Styles.title}>{bike.name}</h2>
							<div className={Styles.price}>£{bike.price}</div>
							<div className={Styles.year}>
								{attributes ? (
									<>
										{attributes.map((attribute, id) => (
											<span className={Styles.year} key={id}>
												{attribute.name === "Mileage" ? (
													<span>
														<FaTachometerAlt />
														&nbsp;{attribute.options[0]} miles
													</span>
												) : null}
												{attribute.name === "Year" ? (
													<span>
														<FaCalendarAlt />
														&nbsp;{attribute.options[0]}
													</span>
												) : null}
											</span>
										))}
									</>
								) : null}
							</div>
							<div className={Styles.description}>
								{bike.description.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, "")}
							</div>
							<div className={Styles.actions}>
								<div className={Styles.actions}>
									<div className={Styles.secondaryContacts}>
										<button className={Styles.whatsAppButton}>
											<FaWhatsapp />
											<a href={"#"}>WhatsApp</a>
										</button>
										<button className={Styles.phoneButton}>
											<FaPhone />
											<a href={"tel:+44 7770 444569"}>01274 583903</a>
										</button>
									</div>
									<button
										onClick={() => {
											setFormOpen(!formOpen);
										}}
										className={Styles.contactButton}
									>
										<span>Enquire Now</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className={Styles.gallery} ref={gallery}>
						{galleryImages.map((galleryImg) => (
							<Image
								src={galleryImg.src}
								width={225}
								height={169}
								alt="bike gallery image"
								key={galleryImg.id}
								onClick={() => {
									setFeatureImage(galleryImg.src);
									gallery.scrollLeft += 1200;
								}}
							/>
						))}
					</div>
					{formOpen ? (
						<EnquiryForm
							formOpen={formOpen}
							setFormOpen={setFormOpen}
							company={company}
							name={name}
							email={email}
							bikeName={bike.name}
						/>
					) : null}
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default withAuth(BikeDetails);
