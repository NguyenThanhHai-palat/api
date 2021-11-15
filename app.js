// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUUYwD8J1k1uPMy9uxe24bTaoLx04jLPc",
  authDomain: "chat-e079f.firebaseapp.com",
  projectId: "chat-e079f",
  storageBucket: "chat-e079f.appspot.com",
  messagingSenderId: "1046464566554",
  appId: "1:1046464566554:web:d6989c8daf30df03c388a3",
  measurementId: "G-1K4FZSPRPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
