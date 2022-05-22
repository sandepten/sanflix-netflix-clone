// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_cKj6ZJYXaIn3KyXzGk0MbF_1CH0Hltg",
  authDomain: "sanflix-netflix-clone.firebaseapp.com",
  projectId: "sanflix-netflix-clone",
  storageBucket: "sanflix-netflix-clone.appspot.com",
  messagingSenderId: "64299767522",
  appId: "1:64299767522:web:ed750be42e6cd16708b0bb"
};

// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }