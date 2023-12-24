// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLIgppNYOUfqV3JuhBZXg5Jq_Mjll7DXc",
  authDomain: "honey-blog-app-19de5.firebaseapp.com",
  projectId: "honey-blog-app-19de5",
  storageBucket: "honey-blog-app-19de5.appspot.com",
  messagingSenderId: "1089051544231",
  appId: "1:1089051544231:web:3fa12308785bbd6daca982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const storage = getStorage(app);

export { db, auth, storage };

