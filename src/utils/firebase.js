// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA-oSacsZWZTJtSZZ6N9Kvy28K6l_RaXY",
  authDomain: "netflixgpt-1bf30.firebaseapp.com",
  projectId: "netflixgpt-1bf30",
  storageBucket: "netflixgpt-1bf30.appspot.com",
  messagingSenderId: "425424029345",
  appId: "1:425424029345:web:5b52182136324ce50592e0",
  measurementId: "G-0YHWN9E4BD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
