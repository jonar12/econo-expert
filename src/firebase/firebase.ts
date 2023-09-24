// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCmnKvg8sJAkSYx36bUgy7lE1RMggWM9j8",
	authDomain: "econoexpert-3eb60.firebaseapp.com",
	projectId: "econoexpert-3eb60",
	storageBucket: "econoexpert-3eb60.appspot.com",
	messagingSenderId: "388463660940",
	appId: "1:388463660940:web:3ac797f3a6745f518850a9"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);