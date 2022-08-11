import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2ZPqjwaNHgBA752By0ZxNsWyWbfVZDn4",
  authDomain: "fcommunity-cad14.firebaseapp.com",
  projectId: "fcommunity-cad14",
  storageBucket: "fcommunity-cad14.appspot.com",
  messagingSenderId: "561673724417",
  appId: "1:561673724417:web:ed2576848501639f39d600",
  measurementId: "G-EB5ZCF67NP",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const authService = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
