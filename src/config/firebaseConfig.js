// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2fY1hRsjWe3625AqWkTAJ2aJ9SBDVGpQ",
  authDomain: "labwox-afa7e.firebaseapp.com",
  projectId: "labwox-afa7e",
  storageBucket: "labwox-afa7e.appspot.com",
  messagingSenderId: "660413071113",
  appId: "1:660413071113:web:e5201783fa30b21e875dd8",
  measurementId: "G-EVM1Y2Y8JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);