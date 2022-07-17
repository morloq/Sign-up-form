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
const emailError = document.querySelector("#email + p.emailError");

const phoneNumber = document.getElementById("phoneNumber");
const phoneNumberError = document.querySelector(".phoneNumberError");

//get submit button:
const button = document.querySelector(".submitButton");


//get form:
const form = document.querySelector(".form");


function showErrorEmail() {
    if(email.validity.valueMissing) {
        emailError.textContent = "Enter an email address";
        email.style.borderColor = "red";
    }
    else if(email.validity.tooShort) {//suddenly does work. oh well
        emailError.textContent = `Email should be at least ${email.minLength} characters`;
        email.style.borderColor = "red";
    }
    else if(!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.textContent = "Email must be valid";
        email.style.borderColor = "red";
    }
    else {
        emailError.textContent = "";
        email.style.borderColor = "limegreen";
    }
}

function showErrorPassword() {
    if(password.validity.valueMissing) {
        passwordError.textContent = "Enter a password";
    }
    else if(password.value.length < 8) {
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
};

function showErrorConfirmPassword() {
    if(passwordConfirm.validity.valueMissing) {
        passwordConfirmError.textContent = "Cannot be empty";
        passwordConfirm.style.borderColor = "red";

    }
    else if(password.value != passwordConfirm.value) {
        passwordConfirmError.textContent = "Passwords do not match";
        passwordConfirm.style.borderColor = "red";
    }
    else if(password.value == passwordConfirm.value){
        passwordConfirm.style.borderColor = "green";
        passwordConfirmError.textContent = "";
    }
}

function showErrorFirstName() {
    if(firstName.validity.valueMissing) {
        firstNameError.textContent = "Enter your name";
        firstName.style.borderColor = "red";
    }
    else if(containsNumber(firstName.value)) {
        firstNameError.textContent   = "Cannot contain numbers";
        firstName.style.borderColor = "red";
    }
    else {
        firstNameError.textContent = "";
        firstName.style.borderColor = "limegreen";
    }
}

function showErrorLastName() {
    if(lastName.validity.valueMissing) {
        lastNameError.textContent = "Enter your last name";
        lastName.style.borderColor = "red";
    }
    else if(containsNumber(lastName.value)) {
        lastNameError.textContent   = "Cannot contain numbers";
        lastName.style.borderColor = "red";
    }
    else {
        lastNameError.textContent = "";
        lastName.style.borderColor = "limegreen";
    }
}

function containsNumber(str) {
    return /\d/.test(str);
}

function showErrorPhoneNumber() {
    if(phoneNumber.validity.valueMissing) {
        phoneNumberError.textContent = "Enter a phone number";
        phoneNumber.style.borderColor = "red";
    }
    else if(!phoneNumber.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        phoneNumberError.textContent = "Phone number must be valid";
        phoneNumber.style.borderColor = "red";
    }
    else {
        phoneNumberError.textContent = "";
        phoneNumber.style.borderColor = "limegreen";
    }
}

form.addEventListener("submit", function (event) {
    if(!email.validity.valid) {
        showErrorEmail();
        showErrorPassword();
        showErrorConfirmPassword();
        showErrorFirstName();
        showErrorLastName();
        showErrorPhoneNumber();
        event.preventDefault;
    }
    //ftelefone number! use else if
});

email.addEventListener('input', function (event) {
    showErrorEmail();
});

password.addEventListener('input', function (event) {
    showErrorPassword();
});

passwordConfirm.addEventListener('input', function (event) {
    showErrorConfirmPassword();
});

firstName.addEventListener('input', function (event) {
    showErrorFirstName();
});

lastName.addEventListener('input', function (event) {
    showErrorLastName();
});

phoneNumber.addEventListener('input', function (event) {
    showErrorPhoneNumber();
});