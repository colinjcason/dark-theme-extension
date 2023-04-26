import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_1wrLFyRGBPtA0Qf4tWpkU5G9IZ8U27E",
  authDomain: "pantry-pal-70e3f.firebaseapp.com",
  databaseURL: "https://pantry-pal-70e3f-default-rtdb.firebaseio.com",
  projectId: "pantry-pal-70e3f",
  storageBucket: "pantry-pal-70e3f.appspot.com",
  messagingSenderId: "1014885285014",
  appId: "1:1014885285014:web:08f7c0f7caf68126fe56b7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);