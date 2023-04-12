document.getElementById("loader").style.display = 'none'
document.getElementById('container-2').style.display = 'none'
let timeout;


// function showIn() {
//     setTimeout(() => {
//         document.getElementById('container-1').style.display = 'none';
//         document.getElementById('container-2').style.display = 'block';
//     }, 5000);
// }



function showUp() {
   setTimeout(() => {
    document.getElementById("loader").style.display = 'none'
    document.getElementById('container-1').style.display = 'block';
    document.getElementById('container-2').style.display = 'none';
   }, 3000);
}
let storage = []
storage = JSON.parse(localStorage.getItem("user"))
let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");


function submit() {
    let data = {
        email: email.value,
        username: username.value,
        password: password.value
    }
    storage.push(data)
    localStorage.setItem("user", JSON.stringify(storage))
    setTimeout(() => {
        document.getElementById("loader").style.display = 'block'
    }, 3000);
    document.getElementById('container-1').style.display = 'none';
    document.getElementById('container-2').style.display = 'block';


    



}


// setTimeout(() => {
//     document.getElementById("loader").style.display = 'block'
//     // document.getElementById('container-1').style.display = 'none';
//     // document.getElementById('container-2').style.display = 'block';
// }, 5000);

// document.getElementById('container-1').style.display = 'none';
// document.getElementById('container-2').style.display = 'block';