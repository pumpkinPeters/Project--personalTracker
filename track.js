"use strict";

const menuEl = document.querySelectorAll(".menu-bar ul li");
const layer2El = document.querySelectorAll(".sub-layer2 div");
const subContainer = document.querySelectorAll(".sub-container");

const menuActive = function () {
  for (let i = 0; i < menuEl.length; i++) {
    menuEl[i].classList.remove("active");
  }
};
const layer2Active = function () {
  for (let i = 0; i < layer2El.length; i++) {
    layer2El[i].classList.remove("active");
  }
};

const addHidden = function () {
  for (let i = 0; i < layer2El.length; i++) {
    let isPersonal = layer2El[i].classList.contains("personalEl");
    let isActive = layer2El[i].classList.contains("active");
    if (isPersonal && isActive) {
      console.log("personal active");
      for (let j = 0; j < subContainer.length; j++) {
        if (subContainer.classList.contains("teamEl")) {
          subContainer.classList.add("hidden");
        }
      }
    }
  }
};

for (let i = 0; i < menuEl.length; i++) {
  menuEl[i].addEventListener("click", function () {
    menuActive();
    menuEl[i].classList.add("active");
  });
}

// toggle between All Team Personal
for (let i = 0; i < layer2El.length; i++) {
  layer2El[i].addEventListener("click", function () {
    layer2Active();
    layer2El[i].classList.add("active");
    addHidden();
  });
}

// check div for personal or team or all
// if active == personal add hidden to team
// if active == team add hidden to personal
