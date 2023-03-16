import { useState } from "react";
import Styles from "../styles/Loading.module.css";
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
	const [loading, setLoading] = useState(true);
	return (
		<div className={Styles.container}>
			<ClipLoader
				color="#000"
				loading={loading}
				size={35}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
			<p>&nbsp;Loading...</p>
		</div>
	);
};

export default Loading;
