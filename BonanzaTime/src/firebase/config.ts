import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnKDQosk_kdW7z0NiUyCdM9lHdFnDPo0c",
  authDomain: "bonanzatime-cc4a7.firebaseapp.com",
  projectId: "bonanzatime-cc4a7",
  storageBucket: "bonanzatime-cc4a7.appspot.com",
  messagingSenderId: "49620537683",
  appId: "1:49620537683:web:617e4c6c5b97ea859c11a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;