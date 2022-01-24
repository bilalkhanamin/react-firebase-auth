import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2s-BencNMgb6BeDLitm854DkLinvfHVw",
  authDomain: "auth-development-ce524.firebaseapp.com",
  projectId: "auth-development-ce524",
  storageBucket: "auth-development-ce524.appspot.com",
  messagingSenderId: "423715777465",
  appId: "1:423715777465:web:e677d6d7e35752abb62468",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
