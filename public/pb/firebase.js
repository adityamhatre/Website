// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDYikh6AEOmsHVEQNpp8_qQrADGzTRE77Q",
  authDomain: "aditya-89b0e.firebaseapp.com",
  databaseURL: "https://aditya-89b0e.firebaseio.com",
  projectId: "aditya-89b0e",
  storageBucket: "aditya-89b0e.firebasestorage.app",
  messagingSenderId: "503327659143",
  appId: "1:503327659143:web:45bbd72be9fd21ba891422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
