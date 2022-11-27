import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnTWaUToUUMi7s6vC9YY7hfBFT8vZjpUQ",
  authDomain: "form-testing-da152.firebaseapp.com",
  projectId: "form-testing-da152",
  storageBucket: "form-testing-da152.appspot.com",
  messagingSenderId: "23348773096",
  appId: "1:23348773096:web:789172351615f25ee0c95d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
