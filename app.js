function register(){
let c = control.value;
let p = pass.value;

db.collection("alumnos").doc(c).get().then(doc=>{
 if(doc.exists){
  msg.innerText="Ya existe";
 }else{
  db.collection("alumnos").doc(c).set({pass:p});
  msg.innerText="Registrado";
 }
});
}

function login(){
let c = control.value;
let p = pass.value;

if(c==="admin" && p==="admin"){
 window.location="admin.html";
 return;
}

db.collection("alumnos").doc(c).get().then(doc=>{
 if(!doc.exists){
  msg.innerText="No existe";
 }else if(doc.data().pass!=p){
  msg.innerText="Error contraseña";
 }else{
  localStorage.setItem("user",c);
  window.location="dashboard.html";
 }
});
}

function agregarFamiliar(){
let html = `
<div>
<input placeholder="Nombre">
<input placeholder="Parentesco">
<input placeholder="Teléfono">
</div>`;
familiares.innerHTML += html;
}

function save(){
let u = localStorage.getItem("user");

let fams=[];
document.querySelectorAll("#familiares div").forEach(d=>{
 fams.push({
  nombre:d.children[0].value,
  parentesco:d.children[1].value,
  telefono:d.children[2].value
 });
});

db.collection("alumnos").doc(u).update({
 nombre:nombre.value,
 edad:edad.value,
 curp:curp.value,
 grupo:grupo.value,
 carrera:carrera.value,
 familiares:fams
});

alert("Guardado PRO");
}

function cargarAlumnos(){
db.collection("alumnos").onSnapshot(snap=>{
 let html="";
 snap.forEach(doc=>{
  let d=doc.data();
  html+=`
  <div>
  ${doc.id} - ${d.nombre||""}
  <button onclick="eliminar('${doc.id}')">Eliminar</button>
  </div>`;
 });
 tabla.innerHTML=html;
});
}

function eliminar(id){
db.collection("alumnos").doc(id).delete();
}

function buscar(){
let t=buscar.value.toLowerCase();
document.querySelectorAll("#tabla div").forEach(d=>{
 d.style.display=d.innerText.toLowerCase().includes(t)?"block":"none";
});
}
import { getFirestore, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
  function logout() {
    window.location.href = "index.html";
  }
  