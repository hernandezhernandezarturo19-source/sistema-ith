// Importar Firebase (IMPORTANTE)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// CONFIGURA TU FIREBASE AQUÍ
const firebaseConfig = {
  apiKey: "AIzaSyDEKbWrNcb3OuSQ58mq6rPbZHkqaTod1Es",
  authDomain: "sistema-ith.firebaseapp.com",
  projectId: "sistema-ith",
  storageBucket: "sistema-ith.firebasestorage.app",
  messagingSenderId: "262491381723",
  appId: "1:262491381723:web:2dd5232ba5f1f1582c11fe"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exportar para usarlo
window.db = db;