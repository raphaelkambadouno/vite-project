
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAjhU0Q4yHmnHND1yOP0-EqztMjiG6Ymqg",
  authDomain: "database1-e5701.firebaseapp.com",
  databaseURL: "https://database1-e5701-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "database1-e5701",
  storageBucket: "database1-e5701.appspot.com",
  messagingSenderId: "862351415041",
  appId: "1:862351415041:web:1f43862e649ccf2ccc2d00"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();