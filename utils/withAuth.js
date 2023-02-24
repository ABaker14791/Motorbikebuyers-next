import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth, db } from "./firebase";
import { getDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "../store/authSlice";
import Loading from "../components/Loading";
import AuthProcessing from "../components/auth/AuthProcessing";

const withAuth = (WrappedComponent) => {
	const WithAuth = (props) => {
		const user = useSelector(selectUser);
		const dispatch = useDispatch();
		const router = useRouter();
		const [name, setName] = useState("");
		const [email, setEmail] = useState("");
		const [company, setCompany] = useState("");
		const [tradeMember, setTradeMember] = useState(null);

		useEffect(() => {
			onAuthStateChanged(auth, async (userAuth) => {
				if (userAuth) {
					// user is logged in
					dispatch(
						login({
							email: userAuth.email,
							uid: userAuth.uid,
							displayName: userAuth.displayName,
						})
					);
					// Check user permissions
					const docRef = doc(db, "users", userAuth.uid);
					const docSnap = await getDoc(docRef);

					if (docSnap.exists()) {
						setCompany(docSnap.data().Company);
						setTradeMember(docSnap.data().Trade_Member);
						setName(docSnap.data().Name);
						setEmail(docSnap.data().Email);
						console.log("Document data:", docSnap.data());
						console.log(tradeMember);
					} else {
						console.log("No such document!");
					}
				} else {
					dispatch(logout());
					router.push("/login");
				}
			});
			console.log("page loaded");
		}, []);

		if (!user) {
			return <Loading />;
		}

		if (tradeMember === false) {
			return <AuthProcessing />;
		}

		return (
			<WrappedComponent
				{...props}
				authUser={user}
				company={company}
				email={email}
				tradeMember={tradeMember}
				name={name}
			/>
		);
	};
	return WithAuth;
};

export default withAuth;
