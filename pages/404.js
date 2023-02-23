import Link from "next/link";
import styles from "../styles/NotFound.module.css";
import { FaHome } from "react-icons/fa";
import { MdHome } from "react-icons/md";

export default function FourOhFour() {
	return (
		<div className={styles.container}>
			<h1>404 - Page Not Found</h1>
			<Link href="/">
				<a className={styles.homeLink}>
					<MdHome />
					Go back home
				</a>
			</Link>
		</div>
	);
}
