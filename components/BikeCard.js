import Styles from "../styles/BikesCard.module.css";
import Link from "next/link";
import Image from "next/image";

const BikeCard = ({ tradeBike }) => {
  const { title, slug, price, image } = tradeBike.fields;

  return (
    <div className={Styles.card}>
      <div className={Styles.image}>
        <Link href={"/bikes/" + slug}>
          <a>
            <Image
              src={"https:" + image.fields.file.url}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
              alt="bike for sale"
            />
          </a>
        </Link>
      </div>
      <div className={Styles.content}>
        <div className={Styles.info}>
          <Link href={"/bikes/" + slug}>
            <a>
              <h4>{title}</h4>
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
