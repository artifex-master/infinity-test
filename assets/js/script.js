'use strict'

const toggleFunc = function(elem) {
  elem.classList.toggle('active');
}

const desktopMenu = document.querySelector("[data-toggler]");
const navbar = document.querySelector("[data-navbar]");

desktopMenu.addEventListener('click', function() {
  toggleFunc(navbar);
});
