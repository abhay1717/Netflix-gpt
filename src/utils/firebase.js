// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU8TDHEAuHail-96_GqijWfbSx0gO-EAg",
  authDomain: "netflixgpt-15ea5.firebaseapp.com",
  projectId: "netflixgpt-15ea5",
  storageBucket: "netflixgpt-15ea5.appspot.com",
  messagingSenderId: "50069045529",
  appId: "1:50069045529:web:1895bd18f8d0f55eb9c588",
  measurementId: "G-D2TS21GFRZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
