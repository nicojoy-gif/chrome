// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDshvtWdaiTKSHkWlFbHHjgbrXoHoZrv3Q",
  authDomain: "chrome-record.firebaseapp.com",
  projectId: "chrome-record",
  storageBucket: "chrome-record.appspot.com",
  messagingSenderId: "640587626501",
  appId: "1:640587626501:web:e8c033d58e1b94f02c446c",
  measurementId: "G-D6LVM9F3C3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { app, auth};
// Initialize Firebase