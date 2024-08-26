// Import the necessary functions from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

// function that stores the authenticated user inside the database

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(firestore, `Users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
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
