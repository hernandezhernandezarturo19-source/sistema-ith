import { getFirestore, collection, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore();

async function cargarAlumnos() {
  const querySnapshot = await getDocs(collection(db, "alumnos"));
  const contenedor = document.getElementById("lista-alumnos");

  contenedor.innerHTML = "";

  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const id = docSnap.id;

    contenedor.innerHTML += `
      <div class="card-alumno">
        <p><b>ID:</b> ${id}</p>
        <p><b>Nombre:</b> ${data.nombre}</p>
        <p><b>Edad:</b> ${data.edad}</p>
        <p><b>CURP:</b> ${data.curp}</p>
        <p><b>Grupo:</b> ${data.grupo}</p>

        <button onclick="eliminar('${id}')">Eliminar</button>
      </div>
    `;
  });
}

cargarAlumnos();

async function eliminar(id) {
  await deleteDoc(doc(db, "alumnos", id));
  cargarAlumnos();
}

window.logout = function () {
  localStorage.clear();
  location.href = "index.html";
};

cargarAlumnos();
