//get password fields:
const password = document.getElementById("password");
const passwordError = document.querySelector(".passwordError");

const passwordConfirm = document.getElementById("confirmPassword");
const passwordConfirmError = document.querySelector(".passwordsMatchError");

//get submit button:
const button = document.querySelector(".submitButton");

button.addEventListener("click", () => {
    //password requirements:
   
    if(password.value.length < 8) {
        passwordError.textContent = "Password must have at least 8 characters";
        password.style.borderColor = "red";
    }
    else if(password.value.length > 20) {
        passwordError.textContent = "Password must have less than 20 characters";
        password.style.borderColor = "red";
    }
    else if(password.value.search(/[a-z]/) < 0) { //search returns negative values if regex is not found
        passwordError.textContent = "Password must contain at least one lower case letter";
        password.style.borderColor = "red";
    }
    else if(password.value.search(/[A-Z]/) < 0) {
        passwordError.textContent = "Password must contain at least one upper case letter";
        password.style.borderColor = "red";
    }
    else if(password.value.search(/[0-9]/) < 0) {
        passwordError.textContent = "Password must contain at least one number";
        password.style.borderColor = "red";
    }
    else if(password.value.search(/[!@#$%^&*]/) < 0) {
        passwordError.textContent = "Password must contain at least one special character";
        password.style.borderColor = "red";
    }
    else {
        password.style.borderColor = "green";
        passwordError.textContent = "";
    }

    //passwords must match
    if(password.value != passwordConfirm.value) {
        passwordConfirmError.textContent = "Passwords do not match";
        passwordConfirm.style.borderColor = "red";
    }
    else if(password.value == passwordConfirm.value && password.value.lenght > 0){
        passwordConfirm.style.borderColor = "green";
        passwordConfirmError.textContent = "";
    }
});