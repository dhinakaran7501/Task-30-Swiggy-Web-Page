//Signup Get items
let signup_getEmailId = localStorage.getItem("signup-Email-Address");
let signup_getNewPassword = localStorage.getItem("signup-New-Password");
console.log(signup_getEmailId);
console.log(signup_getNewPassword);


let form = document.getElementById("form");
let emailId = document.getElementById("email");
let passWord = document.getElementById("password");

form.addEventListener("submit", function (value) {
    value.preventDefault();

    if (signup_getEmailId === emailId.value && signup_getNewPassword === passWord.value) {
        location.href = "index.html";
    }
    else {
        alert("Incorrect UserID or Password");
    }
    // console.log(emailId.value);
    // console.log(passWord.value);
});




// //Click to go and get create new id
let createElement = document.getElementById("createacc");
createElement.addEventListener("click", function (values) {
    location.href = "signup.html";
});




