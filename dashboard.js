import { db } from "firebase.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js";

const userId = localStorage.getItem("userId");

async function cargarDatos() {
  const ref = doc(db, "alumnos", userId);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    const data = snap.data();
    nombre.value = data.nombre || "";
    edad.value = data.edad || "";
    curp.value = data.curp || "";
    grupo.value = data.grupo || "";
  }
}

window.guardarDatos = async function () {
  const ref = doc(db, "alumnos", userId);
  await setDoc(ref, {
    nombre: nombre.value,
    edad: edad.value,
    curp: curp.value,
    grupo: grupo.value
  });
  alert("Guardado");
};

window.logout = function () {
  localStorage.clear();
  location.href = "index.html";
};

cargarDatos();
