"use strict";
// Email validation
// const inputForm = document.querySelector(".newsletter__container--first-form");
import * as EmailValidator from "./node_modules/email-validator"
// const inputElement = inputForm.querySelector("input[type]");

// export const valid = false;

const handleSubmit = (e) => {
  e.preventDefault();

  let userEmail = e.target.value;

  console.log("hello")
  if (EmailValidator.validate(userEmail)) {
    console.log("valid")
  } else {
    console.log("Invalid");
  }
  console.log(userEmail)


};

inputForm.addEventListener("input", handleSubmit);
