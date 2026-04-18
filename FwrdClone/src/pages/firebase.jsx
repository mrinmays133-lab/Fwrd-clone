import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB84x42xlXM3yEpBn2uO2GajHhRfDOjHvY",
  authDomain: "fwrdclone.firebaseapp.com",
  projectId: "fwrdclone",
  storageBucket: "fwrdclone.firebasestorage.app",
  messagingSenderId: "745147065579",
  appId: "1:745147065579:web:a15197f4737b580987caae",
  measurementId: "G-6PWZVMC9KE"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();