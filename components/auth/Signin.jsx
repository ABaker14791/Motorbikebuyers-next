import { useState } from "react";
import Head from "next/head";
import Styles from "../../styles/Login.module.css";
import RegisterForm from "./RegisterForm";
import LoginForm from "./loginForm";

const Signin = () => {
	// Toggle login tab between signin and register
	const [loginState, setLoginState] = useState(true);

	return (
		<div className={Styles.container}>
			<Head>
				<title>Motorbike Buyers Sign In</title>
				<meta name="description" content="Motorbike Buyers Sign In" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={Styles.loginTabs}>
				<button
					className={loginState ? Styles.tabActive : Styles.tab}
					onClick={() => setLoginState(true)}
				>
					Sign In
				</button>
				<button
					className={loginState ? Styles.tab : Styles.tabActive}
					onClick={() => setLoginState(false)}
				>
					Create Account
				</button>
			</div>
			{loginState ? <LoginForm /> : <RegisterForm />}
		</div>
	);
};

export default Signin;
