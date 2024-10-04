import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5Rz53tmdEk6q3ZS_xeyjvkrtM6UQeH_Y",
  authDomain: "online-mem-fee.firebaseapp.com",
  projectId: "online-mem-fee",
  storageBucket: "online-mem-fee.appspot.com",
  messagingSenderId: "911028315759",
  appId: "1:911028315759:web:773c9fedb2affd165e0f9a",
  measurementId: "G-8TCRKKL7MW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
