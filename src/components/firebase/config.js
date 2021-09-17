import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJnUcpu2kVcgo2sLTQjzzGSIxD46-XwZg",
  authDomain: "it-logger-b5623.firebaseapp.com",
  projectId: "it-logger-b5623",
  storageBucket: "it-logger-b5623.appspot.com",
  messagingSenderId: "191363048324",
  appId: "1:191363048324:web:d06b38ffab0501c268f3d1",
  measurementId: "G-97SNSEEF8G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export { storage };
export default db;
