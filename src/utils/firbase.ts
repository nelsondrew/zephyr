import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClycXIWB3bryut3O7iMXML8yWKTYQ08dw",
  authDomain: "zephyr-db.firebaseapp.com",
  projectId: "zephyr-db",
  storageBucket: "zephyr-db.appspot.com",
  messagingSenderId: "700683034014",
  appId: "1:700683034014:web:fbb8116eaf4ffad2c00a8f",
  measurementId: "G-6J2ZCSE2MS",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;
