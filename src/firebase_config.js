import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYVl3o8kkmq4s6AJchOl1cSPP_0t9FExk",
  authDomain: "react-auth-routes.firebaseapp.com",
  projectId: "react-auth-routes",
  storageBucket: "react-auth-routes.appspot.com",
  messagingSenderId: "766768101696",
  appId: "1:766768101696:web:8eb80901d67cf6d65fa2a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;