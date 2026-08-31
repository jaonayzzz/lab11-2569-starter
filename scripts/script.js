// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const psswrdInput = document.querySelector("#password-input");
const cnfpssInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
var atPos = email.indexOf("@");
var dotPos = email.lastIndexOf(".");
return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
firstNameInput.classList.remove("is-valid");
firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
lastNameInput.classList.remove("is-valid");
lastNameInput.classList.remove("is-invalid");
}

emailInput.onkeyup = () => {
emailInput.classList.remove("is-valid");
emailInput.classList.remove("is-invalid");
}

psswrdInput.onkeyup = () => {
psswrdInput.classList.remove("is-valid");
psswrdInput.classList.remove("is-invalid");
}

cnfpssInput.onkeyup = () => {
cnfpssInput.classList.remove("is-valid");
cnfpssInput.classList.remove("is-invalid");
}

// add callback function for submit button.
submitBtn.onclick = () => {
let isFirstNameOk = false;
let isLastNameOk = false;
let isEmailOk = false;
let isPasswordOk = false;
let iscnfpssOk = false;

  firstNameInput.classList.remove("is-valid", "is-invalid");
  lastNameInput.classList.remove("is-valid", "is-invalid");
  emailInput.classList.remove("is-valid", "is-invalid");
  psswrdInput.classList.remove("is-valid", "is-invalid");
  cnfpssInput.classList.remove("is-valid", "is-invalid");


// validate first name
if (firstNameInput.value.trim().length === 0) {
firstNameInput.classList.add("is-invalid");
} else {
firstNameInput.classList.add("is-valid");
isFirstNameOk = true;
}

// validate last name
if (lastNameInput.value.trim().length === 0){
lastNameInput.classList.add("is-invalid");
}else{
  lastNameInput.classList.add("is-valid");
  isLastNameOk = true;
}
// validate email
if (validateEmail(emailInput.value.trim())){
  emailInput.classList.add("is-valid");
  isEmailOk = true;
}else{
  emailInput.classList.add("is-invalid");
}

// validate password
if (psswrdInput.value.trim().length < 6){
  psswrdInput.classList.add("is-invalid");
} else {
  psswrdInput.classList.add("is-valid");
  isPasswordOk = true;
}

// validate confirm password
if ( cnfpssInput.value !== psswrdInput.value || cnfpssInput.value.length < 6){
  cnfpssInput.classList.add("is-invalid");
}else{
  cnfpssInput.classList.add("is-valid");
  iscnfpssOk = true;
}

if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && iscnfpssOk) alert("Registered successfully");
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  psswrdInput.value = "";
  cnfpssInput.value = "";
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
  psswrdInput.classList.remove("is-valid");
  psswrdInput.classList.remove("is-invalid");
  cnfpssInput.classList.remove("is-valid");
  cnfpssInput.classList.remove("is-invalid");
};