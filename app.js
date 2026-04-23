function goRegister(){
    window.location.href = "register.html";
}

function register(){
    const control = document.getElementById("control").value;
    const pass = document.getElementById("password").value;

    db.collection("alumnos").doc(control).get().then(doc=>{
        if(doc.exists){
            document.getElementById("msg").innerText="Ya registrado";
        } else {
            db.collection("alumnos").doc(control).set({
                password: pass
            });
            window.location.href="index.html";
        }
    });
}

function login(){
    const control = document.getElementById("loginControl").value;
    const pass = document.getElementById("loginPass").value;

    if(control==="admin" && pass==="admin"){
        window.location.href="admin.html";
        return;
    }

    db.collection("alumnos").doc(control).get().then(doc=>{
        if(!doc.exists){
            document.getElementById("loginError").innerText="No registrado";
        } else if(doc.data().password!==pass){
            document.getElementById("loginError").innerText="Contraseña incorrecta";
        } else {
            localStorage.setItem("user", control);
            window.location.href="dashboard.html";
        }
    });
}

function guardarDatos(){
    const user = localStorage.getItem("user");

    db.collection("alumnos").doc(user).update({
        nombre: document.getElementById("nombre").value,
        edad: document.getElementById("edad").value,
        curp: document.getElementById("curp").value,
        grupo: document.getElementById("grupo").value,
        carrera: document.getElementById("carrera").value,
        familiar: {
            nombre: document.getElementById("famNombre").value,
            parentesco: document.getElementById("parentesco").value,
            telefono: document.getElementById("telefono").value
        }
    });

    alert("Guardado");
}

function buscarAlumno(){
    const texto = document.getElementById("buscar").value;

    db.collection("alumnos").get().then(snapshot=>{
        let html="";
        snapshot.forEach(doc=>{
            if(doc.id.includes(texto)){
                html += "<p>"+doc.id+"</p>";
            }
        });
        document.getElementById("resultados").innerHTML=html;
    });
}
