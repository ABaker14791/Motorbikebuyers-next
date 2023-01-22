import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const withAuth = (WrappedComponent) => {
	const WithAuth = (props) => {
		const [authUser, setAuthUser] = useState(null);
		const router = useRouter();

		useEffect(() => {
			const unsubscribe = onAuthStateChanged(auth, (user) => {
				if (user) {
					setAuthUser(user);
				} else {
					router.push("/login");
				}
			});
			return unsubscribe;
		}, []);

		if (!authUser) {
			return <div>Loading...</div>;
		}

		return <WrappedComponent {...props} authUser={authUser} />;
	};
	return WithAuth;
};

export default withAuth;
