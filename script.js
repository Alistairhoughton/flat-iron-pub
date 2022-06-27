const openButton = document.getElementById("mobile-nav-button");
const closeButton = document.getElementById("close-button");
const menu = document.getElementById("mobile-nav-page");
const link = document.querySelectorAll(".nav-link-item");

openButton.addEventListener("click", function () {
  menu.classList.toggle("open");
});

closeButton.addEventListener("click", function () {
  menu.classList.toggle("open");
});

link.forEach((el) =>
  el.addEventListener("click", function (e) {
    menu.classList.toggle("open");
  })
);

