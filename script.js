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
    document.getElementById('container-1').style.display = 'block';
    document.getElementById('container-2').style.display = 'none';
   }, 5000);
}

function submit() {
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);


    setTimeout(() => {
        document.getElementById('container-1').style.display = 'none';
        document.getElementById('container-2').style.display = 'block';
    }, 5000);
}
