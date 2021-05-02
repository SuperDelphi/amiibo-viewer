/*
 * Copyright (c) Simon Breil 2021
 */

const hamburgerBtn = document.getElementById("hamburger-btn");
const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenuLink = document.getElementById("close-menu-link");
const handModeBtn = document.getElementById("change-hand-mode");

hamburgerBtn.addEventListener("click", () => {
    openMenu();
});

closeMenuLink.addEventListener("click", () => {
    closeMenu();
})

handModeBtn.addEventListener("click", () => {
    toggleHandMode();
});

const openMenu = () => {
    hamburgerBtn.classList.add("hidden");
    hamburgerMenu.classList.add("open");
};

const closeMenu = () => {
    hamburgerBtn.classList.remove("hidden");
    hamburgerMenu.classList.remove("open");
};

const toggleHandMode = () => {
    let menuBotton = document.querySelector("#hamburger-menu .bottom");
    let handModeText = document.querySelector("#change-hand-mode span");
    let handModeImg = document.querySelector("#change-hand-mode img");

    if (menuBotton.classList.contains("lefty")) {
        // Passage en mode "droitier"

        menuBotton.classList.remove("lefty");

        hamburgerBtn.classList.add("left");
        hamburgerBtn.classList.remove("right");

        handModeText.textContent = "Mode gaucher";
        handModeImg.setAttribute("src", "img/icons/left_hand_icon.svg");
        handModeImg.setAttribute("alt", "Main gauche");
    } else {
        // Passage en mode "gaucher"

        menuBotton.classList.add("lefty");

        hamburgerBtn.classList.remove("left");
        hamburgerBtn.classList.add("right");

        handModeText.textContent = "Mode droitier";
        handModeImg.setAttribute("src", "img/icons/right_hand_icon.svg");
        handModeImg.setAttribute("alt", "Main droite");
    }
};