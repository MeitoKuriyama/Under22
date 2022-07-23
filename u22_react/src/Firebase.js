import React from "react";

// firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
import { getDatabase, ref, set } from "firebase/database";


class Firebase extends React.Component {
	render() {

		function writeUserData(userId, name, email, imageUrl) {
			const db = getDatabase();
			set(ref(db, 'users/' + userId), {
				username: name,
				email: email,
				profile_picture : imageUrl
			});
		}

		return(
			<div>aaa
				{writeUserData("123","みり","miri@aaa.com","imgURL")}
			</div>
		);

	}
}

export default Firebase;
