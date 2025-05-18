// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa-bLvaTiqaX35vh6RWTLQHwMmxfmqPeY",
  authDomain: "netflix-project-f4a6e.firebaseapp.com",
  projectId: "netflix-project-f4a6e",
  storageBucket: "netflix-project-f4a6e.appspot.com",
  messagingSenderId: "1060607180637",
  appId: "1:1060607180637:web:35806ae170b7295f7ab2b4",
  measurementId: "G-MHLNDGDQC4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
