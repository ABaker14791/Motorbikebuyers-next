// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDGHZHUb-_LI9uQif4M7DxLvyGHMN77aE0",
	authDomain: "mbb-trade-portal-auth.firebaseapp.com",
	projectId: "mbb-trade-portal-auth",
	storageBucket: "mbb-trade-portal-auth.appspot.com",
	messagingSenderId: "463287173664",
	appId: "1:463287173664:web:d248e73f42a01c24183245",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
