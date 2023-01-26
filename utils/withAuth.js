import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";

const withAuth = (WrappedComponent) => {
	const WithAuth = (props) => {
		const authUser = useSelector((state) => state.auth.user);
		const dispatch = useDispatch();
		const router = useRouter();

		useEffect(() => {
			const unsubscribe = onAuthStateChanged(auth, (user) => {
				if (user) {
					dispatch(setUser(user));
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
