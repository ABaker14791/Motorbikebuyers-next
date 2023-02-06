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
import AuthProcessing from "../../components/auth/AuthProcessing";

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

const BikeDetails = ({ bike, tradeMember, name, company }) => {
	const galleryImages = bike.images;
	console.log(bike);

	const [formOpen, setFormOpen] = useState(false);
	const [featureImage, setFeatureImage] = useState(bike.images[0].src);
	const [galleryScroll, setGalleryScroll] = useState(); // maintain the scroll position when user clicks a gallery image && maybe center the scroll to the active image
	const [activeImage, setActiveImage] = useState(); // set a border around the active image (could this be done with a class on click?)
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
								<span>
									<FaCalendarAlt />
									&nbsp;
									{bike.attributes[1].options}
								</span>
								<span>
									<FaTachometerAlt />
									&nbsp;
									{bike.attributes[0].options} miles
								</span>
							</div>
							<div className={Styles.description}>
								{bike.description.replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, "")}
							</div>
							<div className={Styles.actions}>
								<div className={Styles.actions}>
									<div className={Styles.secondaryContacts}>
										<button
											// onClick={() => {
											// 	setFormOpen(!formOpen);
											// }}
											className={Styles.whatsAppButton}
										>
											<FaWhatsapp />
											<span>WhatsApp</span>
										</button>
										<button
											// onClick={() => {
											// 	setFormOpen(!formOpen);
											// }}
											className={Styles.phoneButton}
										>
											<FaPhone />
											<span>01274 583903</span>
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
					<div
						className={Styles.gallery}
						ref={gallery}
						// onScroll={setScrollPosition}
					>
						{galleryImages.map((galleryImg) => (
							<Image
								src={galleryImg.src}
								width={225}
								height={169}
								alt="bike gallery image"
								key={galleryImg.id}
								onClick={() => {
									setFeatureImage(galleryImg.src);
									setGalleryScroll(gallery.current?.scrollLeft);
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
						/>
					) : null}
				</div>
			) : (
				<AuthProcessing />
			)}
		</div>
	);
};

export default withAuth(BikeDetails);
