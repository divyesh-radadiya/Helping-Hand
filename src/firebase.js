import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnPKF05gZWBxdqpliHp_mC0GqDKoKdS4o",
  authDomain: "helping-hand-dc207.firebaseapp.com",
  projectId: "helping-hand-dc207",
  storageBucket: "helping-hand-dc207.appspot.com",
  messagingSenderId: "492148565113",
  appId: "1:492148565113:web:6e4593d20bf736381b20a8",
  measurementId: "G-FEW12TYX6P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
