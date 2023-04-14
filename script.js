let loader1 = document.getElementById("loader1");
let loader = document.getElementById("loader");
document.getElementById('container-2').style.display = 'none';
loader1.style.display = 'none';
loader.style.display = 'none';

let timeout;


function showUp() {
    let userLogin = document.getElementById("userLogin");
    let passLogin = document.getElementById("passLogin");

    loader.style.display = 'none';
    setTimeout(() => {
    loader.style.display = 'none';

    let loginUser = userLogin.value;
    console.log(loginUser);
    let loginPass = passLogin.value;
    console.log(loginPass);

    let storage = JSON.parse(localStorage.getItem("user")) || [];
    console.log(storage);

    let registered = storage.find((user) => user.username === loginUser && user.password === loginPass);
    console.log(registered);

    if (registered) {
        // Redirect to the dashboard page and store the current user in localStorage
        window.location.href = "dashboard.html";
        window.localStorage.setItem("user", JSON.stringify(registered));
      } else {
        // Display a failure message if the login credentials are invalid
        loginMessage.innerHTML = `
          <p id="failed-msg">Login failed! Please check your email and password.</p>
        `;
        setTimeout(() => {
            loginMessage.style.display = "none";
          }, 3000);
        }
   }, 3000);
}

function getUserInfo() {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
  }
  
  getUserInfo();

let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");
let signUpMessage = document.getElementById("signup-msg");



function submit() {
    if (
        password.value != "" &&
        username.value != "" &&
        email.value != ""
      ) 
        {
            data = {
                email: email.value,
                username: username.value,
                password: password.value,
            };

            let storage = JSON.parse(localStorage.getItem("user")) || [];
            storage.push(data);
            localStorage.setItem("user", JSON.stringify(storage));
            signUpMessage.innerHTML = `
            <p id="success-msg">Sign up successful!!!</p>
            `;
            loader1.style.display = 'block';

            setTimeout(() => {
                document.getElementById('container-1').style.display = 'none';
                document.getElementById('container-2').style.display = 'block';
                loading.style.display = "none";
                signUpMessage.style.display = "none";
            }, 3000);

            password.value != "" &&
            username.value != "" &&
            email.value != ""
        }else {
            signUpMessage.innerHTML = `
            <p id="failed-msg">Sign up failed!!!</p>
            `;
        }


    



}