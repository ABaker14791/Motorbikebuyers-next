import { useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "../store/authSlice";

const withAuth = (WrappedComponent) => {
	const WithAuth = (props) => {
		const user = useSelector(selectUser);
		const dispatch = useDispatch();
		const router = useRouter();

		useEffect(() => {
			onAuthStateChanged(auth, (userAuth) => {
				if (userAuth) {
					// user is logged in
					dispatch(
						login({
							email: userAuth.email,
							uid: userAuth.uid,
							displayName: userAuth.displayName,
						})
					);
				} else {
					dispatch(logout());
					router.push("/login");
				}
			});
			console.log("page loaded");
		}, []);

		if (!user) {
			return <div>Loading...</div>;
		}

		return <WrappedComponent {...props} authUser={user} />;
	};
	return WithAuth;
};

export default withAuth;
