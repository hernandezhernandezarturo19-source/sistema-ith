
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

import { getFirestore, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";

const db = getFirestore();

const userId = localStorage.getItem("userId");

async function cargarDatos() {
  const docRef = doc(db, "alumnos", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();

    document.getElementById("nombre").value = data.nombre;
    document.getElementById("edad").value = data.edad;
    document.getElementById("curp").value = data.curp;
    document.getElementById("grupo").value = data.grupo;
  }
}

cargarDatos();
async function guardarDatos() {
  const docRef = doc(db, "alumnos", userId);

  await updateDoc(docRef, {
    nombre: document.getElementById("nombre").value,
    edad: document.getElementById("edad").value,
    curp: document.getElementById("curp").value,
    grupo: document.getElementById("grupo").value
  });

  alert("Datos actualizados correctamente");
}