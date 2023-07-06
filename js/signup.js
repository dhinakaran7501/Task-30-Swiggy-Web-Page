let form = document.querySelector("#signup_form");

let f_Name = document.querySelector("#firstname");
let s_Name = document.querySelector("#lastname");
let email_Id = document.querySelector("#emailAddress");
let passWord = document.querySelector("#new_password");

let successIcon = document.getElementsByClassName("successIcon");
let failureIcon = document.getElementsByClassName("failureIcon");

let errorMsg = document.getElementsByClassName("error_msg");

form.addEventListener("submit", function (a) {
    // a.preventDefault();

    test(f_Name, 0, "First Name cannot be blank.");
    test(s_Name, 1, "Surname cannot be blank.");
    test(email_Id, 2, "email_Id cannot be blank.");
    test(passWord, 3, "PassWord cannot be blank.");
});
function test(title, id, message) {

    if (title.value.trim() === "") {
        errorMsg[id].inputHTML = message;
        title.style.border = "2px solid red";

        failureIcon[id].style.opacity = "1";
        successIcon[id].style.opacity = "0";

    }
    else {
        title.style.border = "2px solid green";

        failureIcon[id].style.opacity = "0";
        successIcon[id].style.opacity = "1";
    }
}


let emailAddress = document.getElementById("emailAddress");
let newPassWord = document.getElementById("new_password");

form.addEventListener("submit", function (values) {
    // values.preventDefault();

    localStorage.setItem("signup-Email-Address", emailAddress.value);
    localStorage.setItem("signup-New-Password", newPassWord.value);
});



let returnToLoginPage = document.getElementById("goto_loginPage");
returnToLoginPage.addEventListener("click", function (values) {
    location.href = "login.html";
});


//
let gotologinpage = document.getElementById("goto_loginPage");
gotologinpage.addEventListener("click", function () {
    location.href = "login.html";
});