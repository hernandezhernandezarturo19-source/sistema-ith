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
