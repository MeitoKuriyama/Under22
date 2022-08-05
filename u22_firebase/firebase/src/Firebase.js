// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAYIhYPtr1AlZhhuC9MlpNf81ohbEcNRRg",
	authDomain: "under22.firebaseapp.com",
	projectId: "under22",
	storageBucket: "under22.appspot.com",
	messagingSenderId: "328401528406",
	appId: "1:328401528406:web:8cd758dda060829ef9fdf7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;