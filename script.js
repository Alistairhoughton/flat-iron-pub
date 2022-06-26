const openButton = document.getElementById("mobile-nav-button");
const closeButton = document.getElementById("close-button");
const menu = document.getElementById('mobile-nav-page');

openButton.addEventListener('click', open);
closeButton.addEventListener("click", close);

function open() {
    menu.classList.add("open");
}

function close() {
   menu.classList.remove("open");
}

