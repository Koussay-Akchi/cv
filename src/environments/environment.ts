import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA-fCp0C4_kVaR28WRXJYq8bMe9qpux78s",
  authDomain: "koussay-akchi-cv.firebaseapp.com",
  projectId: "koussay-akchi-cv",
  storageBucket: "koussay-akchi-cv.appspot.com",
  messagingSenderId: "1071344293385",
  appId: "1:1071344293385:web:5e16c3ca6bc3a76f570ad8",
  measurementId: "G-QBT21CW5XC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
