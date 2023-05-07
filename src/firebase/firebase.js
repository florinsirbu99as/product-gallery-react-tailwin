import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUE4_nNC0bWHuE-BykNdl7kVyuhrDXbTA",
  authDomain: "smalltests.firebaseapp.com",
  projectId: "smalltests",
  storageBucket: "smalltests.appspot.com",
  messagingSenderId: "47250599809",
  appId: "1:47250599809:web:14903b249c296119d3c280",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
