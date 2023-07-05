
import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5Bc8fg0haxDQnCCiqI5wvUg12qC2OziQ",
  authDomain: "crown-cloth-8a83d.firebaseapp.com",
  projectId: "crown-cloth-8a83d",
  storageBucket: "crown-cloth-8a83d.appspot.com",
  messagingSenderId: "932488189222",
  appId: "1:932488189222:web:4ba372b2ea32dda006dde7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('Error creating the user', error.message)
    }
  }
return userDocRef;
};

