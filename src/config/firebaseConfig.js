import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

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

export const auth = getAuth(app)

export const db = getFirestore(app)