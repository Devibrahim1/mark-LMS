// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX8vLDThSiBauz84oIJLo-KhUHAEiWyCw",
  authDomain: "sabikafb-37131.firebaseapp.com",
  projectId: "sabikafb-37131",
  storageBucket: "sabikafb-37131.appspot.com",
  messagingSenderId: "98221515075",
  appId: "1:98221515075:web:cac099bfbce3a4738b4ff6",
  measurementId: "G-2MY5298BPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);