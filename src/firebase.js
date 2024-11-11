// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfgU-FKYBEYJTvXiUGkW90Ws3Aa02KFlI",
    authDomain: "carnews-813c2.firebaseapp.com",
    projectId: "carnews-813c2",
    storageBucket: "carnews-813c2.firebasestorage.app",
    messagingSenderId: "1088408968873",
    appId: "1:1088408968873:web:1a58ad889d610f15d513b8",
    measurementId: "G-D05R14BV03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};