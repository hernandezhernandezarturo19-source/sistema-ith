import { db } from "./firebase.js";
import { collection, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function cargarAlumnos() {
  const contenedor = document.getElementById("lista-alumnos");
  contenedor.innerHTML = "";

  const datos = await getDocs(collection(db, "alumnos"));

  datos.forEach(docSnap => {
    const d = docSnap.data();
    const id = docSnap.id;

    contenedor.innerHTML += `
      <div class="alumno">
        <p><b>ID:</b> ${id}</p>
        <p>${d.nombre}</p>
        <p>${d.edad}</p>
        <p>${d.curp}</p>
        <p>${d.grupo}</p>
        <button onclick="eliminar('${id}')">Eliminar</button>
      </div>
    `;
  });
}

window.eliminar = async function(id) {
  await deleteDoc(doc(db, "alumnos", id));
  cargarAlumnos();
};

window.logout = function () {
  localStorage.clear();
  location.href = "index.html";
};

cargarAlumnos();
