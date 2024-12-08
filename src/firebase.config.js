// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAluDtdnUSyh8Z_DkPSKL63dEqRzURB56M",
  authDomain: "pro-gamer-720d5.firebaseapp.com",
  projectId: "pro-gamer-720d5",
  storageBucket: "pro-gamer-720d5.firebasestorage.app",
  messagingSenderId: "1092271392605",
  appId: "1:1092271392605:web:c5492e3479d266e9380ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);