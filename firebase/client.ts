// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCQKkUBpIoqTyDnW0gkfcxAgVoiqoSYYfE",
  authDomain: "prepwise-d9088.firebaseapp.com",
  projectId: "prepwise-d9088",
  storageBucket: "prepwise-d9088.firebasestorage.app",
  messagingSenderId: "724920812566",
  appId: "1:724920812566:web:5ed7eeaff34b6a1d716137",
  measurementId: "G-FW3GM89KSX"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);