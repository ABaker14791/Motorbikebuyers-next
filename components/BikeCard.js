import Styles from "../styles/BikesCard.module.css";
import Link from "next/link";
import Image from "next/image";

const BikeCard = ({ tradeBike }) => {
	const { name, slug, price, images } = tradeBike;

	return (
		<div className={Styles.card}>
			<div className={Styles.image}>
				<Link href={"/bikes/" + slug}>
					<a>
						<Image
							src={images[0].src}
							layout="fill"
							objectFit="contain"
							alt="bike for sale"
						/>
					</a>
				</Link>
			</div>
			<div className={Styles.content}>
				<div className={Styles.info}>
					<Link href={"/bikes/" + slug}>
						<a>
							<h4>{name}</h4>
						</a>
					</Link>
					<p>£{price}</p>
				</div>
				<div className={Styles.actions}>
					<Link href={"/bikes/" + slug}>
						<a>More Details</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BikeCard;
