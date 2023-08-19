"use strict";

// Email validation
const inputForm = document.querySelector(".newsletter__container--first-form");
// const inputElement = inputForm.querySelector("input[type]");

// export const valid = false;

const handleSubmit = (e) => {
  e.preventDefault();

  let userEmail = e.target.value;

  console.log("hello")
  if (validator.isEmail(userEmail)) {
    console.log("valid")
  } else {
    console.log("Invalid");
  }
  console.log(userEmail)


};

inputForm.addEventListener("input", handleSubmit);
