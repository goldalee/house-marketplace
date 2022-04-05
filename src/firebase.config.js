// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo72ESzk8gkB_qjMAnLoJlFXNEzyOuFTI",
  authDomain: "house-marketplace-app-a6657.firebaseapp.com",
  projectId: "house-marketplace-app-a6657",
  storageBucket: "house-marketplace-app-a6657.appspot.com",
  messagingSenderId: "661563127257",
  appId: "1:661563127257:web:765d96b333c49b1c1995c8",
  measurementId: "G-FQPCZPXCQY"
};

// Initialize Firebase
//const app = 
initializeApp(firebaseConfig)
//const analytics = getAnalytics(app);

export const db=getFirestore()