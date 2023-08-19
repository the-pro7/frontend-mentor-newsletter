// Get the b element which contains the user's email address 
const userEmail = document.querySelector(".user-email")
// from localStorage, get the user's email address 
let email = sessionStorage.getItem("email")

// Update the text to the actual email
userEmail.textContent = email

