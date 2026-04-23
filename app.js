function register(){
let c = document.getElementById('control').value;
let p = document.getElementById('pass').value;

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
let c = document.getElementById('control').value;
let p = document.getElementById('pass').value;

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

function save(){
let u = localStorage.getItem("user");
let n = document.getElementById("nombre").value;

db.collection("alumnos").doc(u).update({
 nombre:n
});

alert("Guardado");
}
