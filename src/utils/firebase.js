// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQodSCaww9PfCyY_DQP_uXcQiLyax7Juw",
  authDomain: "netflixgpt-23441.firebaseapp.com",
  projectId: "netflixgpt-23441",
  storageBucket: "netflixgpt-23441.firebasestorage.app",
  messagingSenderId: "724173713183",
  appId: "1:724173713183:web:d26f5e70b42bb6b1ecca2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
