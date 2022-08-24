"use strict";

const menuEl = document.querySelectorAll(".menu-bar ul li");

const menuActive = function () {
  for (let i = 0; i < menuEl.length; i++) {
    menuEl[i].classList.remove("active");
  }
};

for (let i = 0; i < menuEl.length; i++) {
  menuEl[i].addEventListener("click", function () {
    menuActive();
    menuEl[i].classList.add("active");
  });
}
