// Import the necessary functions from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeF80lYeFm5GnRjrjEP_uO3DuCjtwhNLM",
  authDomain: "royal-cloth.firebaseapp.com",
  projectId: "royal-cloth",
  storageBucket: "royal-cloth.appspot.com",
  messagingSenderId: "61635526671",
  appId: "1:61635526671:web:7fc6fba162114966afa37a",
  measurementId: "G-2ZZX4GKXQY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Google Auth Provider setup
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Export sign-in function
export const signInWithGoogle = () => signInWithPopup(auth, provider);
