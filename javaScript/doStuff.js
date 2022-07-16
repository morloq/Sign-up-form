//get password fields:
const password = document.getElementById("password");
const passwordError = document.querySelector(".passwordError");

const passwordConfirm = document.getElementById("confirmPassword");
const passwordConfirmError = document.querySelector(".passwordsMatchError");


//get name fields
const firstName = document.getElementById("firstName");
const firstNameError = document.querySelector(".firstNameError");
const lastName = document.getElementById("lastName");
const lastNameError = document.querySelector(".lastNameError");

//get email and phone fields
const email = document.getElementById("email");
const emailError = document.querySelector(".emailError");
const phoneNumber = document.getElementById("phoneNumber");
const phoneNumberError = document.querySelector(".phoneNumberError");

//get submit button:
const button = document.querySelector(".submitButton");

/*const isRequired = value => value === '' ? false : true;//function isRequired() returns true if the input argument is empty

const isBetween = (length, min, max) => length < min || length > max ? false: true;//function isBetween() false if the length argument is not between min and max

//check whether email is valid with regex:
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

//check if password is secure:
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})");
    return re.test(password);
};*/

button.addEventListener("click", () => {
    //name requirements:
    if(!isNaN(firstName.value)) {

    }
    else {
        firstName.style.border = "green";
        firstNameError.textContent = "";
    }

    if(lastName.value.search(/[0-9]/) < 0) {
        lastNameError.textContent = "Name cannot be a number";
    }
    else {
        lastName.style.border = "green";
        lastNameError.textContent = "";
    }

    //email requirements:
    
    //phoneNumber requirements:
    if(isNaN(phoneNumber.value)) {
        //must be numbers...
    }
    else if(phoneNumber.length < 8/*? */) {
        //length not accurate
    }
    else {

    }

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