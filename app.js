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
    
    if(c==="admin1" && p==="12345"){
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
    
function logout() {
    window.location.href = "index.html";
  }
