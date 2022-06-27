const openButton = document.getElementById("mobile-nav-button");
const closeButton = document.getElementById("close-button");
const menu = document.getElementById("mobile-nav-page");
const link = document.querySelectorAll(".nav-link-item");

menuHandler = () => {
  menu.classList.toggle("open");
};

openButton.addEventListener("click", menuHandler);

closeButton.addEventListener("click", menuHandler);

link.forEach((el) => el.addEventListener("click", menuHandler));
