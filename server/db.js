import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  VITE_AUTH_DOMAIN,
  VITE_FIRE_API_KEY,
  VITE_FIRE_MEASURE_ID,
  VITE_FIRE_APP_ID,
  VITE_MESSAGING_SENDER_ID,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
} from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: VITE_FIRE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGING_SENDER_ID,
  appId: VITE_FIRE_APP_ID,
  measurementId: VITE_FIRE_MEASURE_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore();
export { auth, app, firestore };
