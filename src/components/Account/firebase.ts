import firebase, { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey : "AIzaSyBgCy1d3uAJKXk2jW59aByL1hnj9LE15lU",
    authDomain : "zomato-clone-firebase.firebaseapp.com",
    projectId : "zomato-clone-firebase",
    storageBucket : "zomato-clone-firebase.appspot.com",
    messagingSenderId: "19638266761",
    appId : "1:19638266761:web:3da7f83ab08097a2224f58",
    measurementId : "G-3NSFJY0Y7X"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;