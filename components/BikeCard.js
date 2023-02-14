import Styles from "../styles/BikesCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const BikeCard = ({ tradeBike }) => {
	const { name, attributes, price, images, id } = tradeBike;

	return (
		<Link href={"/bikes/" + id} passHref>
			<div className={Styles.card}>
				<div className={Styles.image}>
					<Image
						src={images[0].src}
						width={902}
						height={677}
						alt="bike for sale"
					/>
				</div>
				<div className={Styles.content}>
					<div className={Styles.info}>
						<a>
							<h4>{name}</h4>
						</a>

						<p>£{price}</p>
					</div>
					<div className={Styles.actions}>
						{attributes ? (
							<>
								{attributes.map((attribute, id) => (
									<div className={Styles.year} key={id}>
										<span>
											{attribute.options[0]}
											{attribute.name === "Mileage" ? (
												<span> miles</span>
											) : null}
										</span>
									</div>
								))}
							</>
						) : null}
					</div>

					<div className={Styles.sellerInfo}>
						<span>AKA Automotive LTD</span>
						<div className={Styles.location}>
							<FaMapMarkerAlt />
							<div className={Styles.locationText}>Shipley</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default BikeCard;
