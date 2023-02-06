import { useState } from "react";
import Styles from "../styles/Loading.module.css";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
	const [loading, setLoading] = useState(true);
	return (
		<div className={Styles.container}>
			{/* <h1 className={Styles.loading}>Loading...</h1> */}
			<ClipLoader
				color="#000"
				loading={loading}
				size={35}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Loading;
