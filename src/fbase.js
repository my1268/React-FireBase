import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZO695lyx__FUMvK8RxmSJHG5RZaW8m7Y",
  authDomain: "nwitter-b2742.firebaseapp.com",
  projectId: "nwitter-b2742",
  storageBucket: "nwitter-b2742.appspot.com",
  messagingSenderId: "104069487146",
  appId: "1:104069487146:web:9a371965452af4e3384153",
};

firebase.initializeApp(firebaseConfig);
export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
