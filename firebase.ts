import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfwQJEK9JQ-KAdCH6safbglz_Gq3WQj8A",
  authDomain: "fireapp-f6580.firebaseapp.com",
  projectId: "fireapp-f6580",
  storageBucket: "fireapp-f6580.firebasestorage.app",
  messagingSenderId: "575282881920",
  appId: "1:575282881920:web:934a439946213107f5cd65"
};

export const FIREBASE_APP=initializeApp(firebaseConfig);
export const FIRESTORE_DB=getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP);


