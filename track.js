"use strict";

const menuEl = document.querySelectorAll(".menu-bar ul li");
const layer2El = document.querySelectorAll(".sub-layer2 div");
const layer3El = document.querySelectorAll(".sub-layer3 .sub-container");

// layer3El = [sub-container[0],sub-container[1],sub-container[2]]

let isPersonal = layer2El[1].classList.contains("active");
let isTeam = layer2El[2].classList.contains("active");

// Menu Bar Toggle/Active
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

// ========= break ===========

const layer2RemoveActive = function () {
  for (let i = 0; i < layer2El.length; i++) {
    layer2El[i].classList.remove("active");
  }
};

// toggle between All Team Personal
for (let i = 0; i < layer2El.length; i++) {
  layer2El[i].addEventListener("click", function () {
    layer2RemoveActive();
    layer2El[i].classList.add("active");
    addHidden();
  });
}

// ========= break ===========

const addHidden = function () {
  if (layer2El[2].classList.contains("active")) {
    console.log("isTeam");
    layer3El.forEach((e) => {
      if (e.classList.contains("personal")) {
        e.classList.add("hidden");
      } else e.classList.remove("hidden");
      // e.classList.contains("personal") || e.classList.remove("hidden");
      // e.classList.add("hidden");
    });
  } else if (layer2El[1].classList.contains("active")) {
    console.log("isPersonal");
    layer3El.forEach((e) => {
      if (e.classList.contains("team")) {
        e.classList.add("hidden");
      } else e.classList.remove("hidden");
    });
  } else if (layer2El[0].classList.contains("active")) {
    console.log("isAll");
    layer3El.forEach((e) => e.classList.remove("hidden"));
  }
};
