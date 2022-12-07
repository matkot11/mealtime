// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSAU4IY31Uxk4pZRQoytso0um-O5tbOCM",
  authDomain: "mealtime-5d860.firebaseapp.com",
  projectId: "mealtime-5d860",
  storageBucket: "mealtime-5d860.appspot.com",
  messagingSenderId: "962557086438",
  appId: "1:962557086438:web:ea2ea4fbbac6de1efb0927",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
