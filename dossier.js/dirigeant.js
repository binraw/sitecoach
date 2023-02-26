const bouton = document.querySelector(".bouton");
const menuBtn = document.querySelector(".menu-btn");
const menuOnglet = document.querySelector(".menu-onglet");
const ongletPremier = document.querySelector(".onglet1");
const menuVision = document.querySelector(".menu-vision");
const ongletDeuxieme = document.querySelector(".onglet2");
const menuPresta = document.querySelector(".presta");
const ongletTroisieme = document.querySelector(".onglet3");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    bouton.classList.add("ouvert");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    bouton.classList.remove("ouvert");
    menuOnglet.classList.remove("open");
    ongletPremier.classList.remove("open");
    menuVision.classList.remove("open");
    ongletDeuxieme.classList.remove("open");
    menuPresta.classList.remove("open");
    ongletTroisieme.classList.remove("open");
    menuOpen = false;
  }
});

let onglet = false;
menuOnglet.addEventListener("click", () => {
  if (!onglet) {
    menuOnglet.classList.add("open");
    ongletPremier.classList.add("open");
    onglet = true;
  } else {
    menuOnglet.classList.remove("open");
    ongletPremier.classList.remove("open");
    onglet = false;
  }
});

let vision = false;
menuVision.addEventListener("click", () => {
  if (!vision) {
    menuVision.classList.add("open");
    ongletDeuxieme.classList.add("open");
    vision = true;
  } else {
    menuVision.classList.remove("open");
    ongletDeuxieme.classList.remove("open");
    vision = false;
  }
});

let prest = false;
menuPresta.addEventListener("click", () => {
  if (!prest) {
    menuPresta.classList.add("open");
    ongletTroisieme.classList.add("open");
    prest = true;
  } else {
    menuPresta.classList.remove("open");
    ongletTroisieme.classList.remove("open");
    prest = false;
  }
});
