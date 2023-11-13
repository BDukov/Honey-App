// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjWqev_F1A9TmFsGyRH73ZXRhXdnDBIAw",
  authDomain: "honey-blog-db181.firebaseapp.com",
  databaseURL: "https://honey-blog-db181-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "honey-blog-db181",
  storageBucket: "honey-blog-db181.appspot.com",
  messagingSenderId: "903521901822",
  appId: "1:903521901822:web:10681a79243687779619af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);

export { db, auth, storage };

