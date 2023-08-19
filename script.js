"use strict";
// Email validation
const inputForm = document.querySelector(".newsletter__container--first-form");
let errorMessage = inputForm.querySelector(".error-message");
// User email text from success page

// alert(errorMessage)

// export const valid = false;
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

let isValid = false;


const handleSubmit = (e) => {
  let target = e.target;
  let userEmail = target.value;

  if (validateEmail(userEmail) && userEmail !== null) {
    target.classList.add("valid");
    // Remove valid class after 1.5 seconds
    setTimeout(() => target.classList.remove("valid"), 1500);
    // Remove invalid class
    target.classList.remove("invalid");
    // Hide error message
    errorMessage.classList.remove("show");
    isValid = true;
  } else {
    // Remove valid class
    target.classList.remove("valid");
    // Add invalid to the classList
    target.classList.add("invalid");
    // Show the error message
    errorMessage.classList.add("show");
    isValid = false;
  }

  sessionStorage.setItem("email", userEmail)
   

  console.log(isValid);
};

inputForm.addEventListener("input", handleSubmit);
console.log(email)


inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  isValid ? window.location.assign("./success.html") : null;
});
