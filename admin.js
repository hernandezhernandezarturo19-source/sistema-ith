const db = firebase.firestore();

async function cargarAlumnos() {
  const snapshot = await db.collection("alumnos").get();
  const contenedor = document.getElementById("lista-alumnos");

  contenedor.innerHTML = "";

  snapshot.forEach((doc) => {
    const data = doc.data();
    const id = doc.id;

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

async function eliminar(id) {
  await db.collection("alumnos").doc(id).delete();
  cargarAlumnos();
}

function logout() {
  window.location.href = "index.html";
}

cargarAlumnos();