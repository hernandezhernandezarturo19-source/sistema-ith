import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"
const firebaseConfig = {
  apiKey: "AIzaSyDEKbWrNcb3OuSQ58mq6rPbZHkqaTod1Es",
  authDomain: "sistema-ith.firebaseapp.com",
  projectId: "sistema-ith",
  storageBucket: "sistema-ith.firebasestorage.app",
  messagingSenderId: "262491381723",
  appId: "1:262491381723:web:2dd5232ba5f1f1582c11fe"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
