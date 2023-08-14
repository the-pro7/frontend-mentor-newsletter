const imageElementContainer = document.querySelector(
  ".newsletter__container--image-container"
);
const imageElement = imageElementContainer.querySelector(
  ".newsletter__container--image-container-image"
);

const windowWidth = window.innerWidth;
const desktopBreakpoint = 680;
window.addEventListener("resize", (e) => {
  const windowWidth = window.innerWidth;

  if (windowWidth >= desktopBreakpoint) {
    imageElement.src = "./images/illustration-sign-up-desktop.svg";
  } else {
    imageElement.src = "./images/illustration-sign-up-mobile.svg"
  }
});
