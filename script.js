document.getElementById("container-2").style.display = 'none';
let loading = document.getElementById("loader");
let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");
let signUpMsg = document.getElementById("signup-msg");
loading.style.display = "none";


function logIn() {
  document.getElementById("container-1").style.display = 'none';
  document.getElementById("container-2").style.display = 'block'; 
}

function signUp() {
  document.getElementById("container-1").style.display = 'block';
  document.getElementById("container-2").style.display = 'none';
}