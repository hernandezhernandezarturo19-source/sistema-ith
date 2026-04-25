import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.login = async function () {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  try {
    const user = await signInWithEmailAndPassword(auth, email, pass);
    localStorage.setItem("userId", user.user.uid);

    if (email === "admin@gmail.com") {
      window.location.href = "admin.html";
    } else {
      window.location.href = "dashboard.html";
    }
  } catch (e) {
    alert(e.message);
  }
};
