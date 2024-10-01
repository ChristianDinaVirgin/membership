import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-czzbETw8f0019NPPm-QZNfS_aifXCA8",
  authDomain: "adv-project-finals.firebaseapp.com",
  projectId: "adv-project-finals",
  storageBucket: "adv-project-finals.appspot.com",
  messagingSenderId: "369612365357",
  appId: "1:369612365357:web:2175c4d125a5d1f190e2a4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
