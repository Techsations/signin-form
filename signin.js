let loading = document.getElementById("loader");
let userLogin = document.getElementById('userLogin');
let passLogin = document.getElementById('passLogin');

loading.style.display = "none";

function signUpPage() {
    window.location.href = "index.html";
}

let storage = JSON.parse(localStorage.getItem("allUsers"));
console.log(storage);