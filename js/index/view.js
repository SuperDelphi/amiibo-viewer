/*
 * Copyright (c) Simon Breil 2021
 */

const createAmiiboElement = (id, name, gameSeries, image) => {
    // Création du sprite
    const amiiboSpriteImg = document.createElement("img");
    amiiboSpriteImg.classList.add("amiibo-sprite");
    amiiboSpriteImg.setAttribute("src", image);
    amiiboSpriteImg.setAttribute("alt", name + " (" + gameSeries + ")");
    amiiboSpriteImg.addEventListener("load", event => {
        event.target.style.opacity = "1";
    });
    // Création de l'ombre à partir du sprite
    const amiiboShadowImg = amiiboSpriteImg.cloneNode();
    amiiboShadowImg.classList.remove("amiibo-sprite");
    amiiboShadowImg.classList.add("amiibo-shadow");
    amiiboShadowImg.setAttribute("alt", "");
    // Création des "sprinkles"
    const leftSprinkle = document.createElement("img");
    leftSprinkle.setAttribute("src", "img/icons/btn_sprinkles_left.svg");
    const rightSprinkle = document.createElement("img");
    rightSprinkle.setAttribute("src", "img/icons/btn_sprinkles_right.svg");
    // Création du bouton
    const amiiboBtn = document.createElement("btn");
    amiiboBtn.classList.add("amiibo-btn");
    amiiboBtn.setAttribute("href", "amiibo.php?id=" + id);
    amiiboBtn.appendChild(leftSprinkle);
    amiiboBtn.innerHTML += " Voir l'amiibo ";
    amiiboBtn.appendChild(rightSprinkle);
    // Création du conteneur de sprite
    const spriteContainerDiv = document.createElement("div");
    spriteContainerDiv.classList.add("sprite-container");
    spriteContainerDiv.append(amiiboBtn, amiiboSpriteImg, amiiboShadowImg);
    // Création du titre (nom)
    const titleNameElement = document.createElement("h3");
    titleNameElement.textContent = name;
    // Création du titre (série)
    const titleGameSeriesElement = document.createElement("h4");
    titleGameSeriesElement.textContent = gameSeries;
    // Création de l'élément final
    const amiiboElement = document.createElement("a");
    amiiboElement.classList.add("amiibo");
    amiiboElement.setAttribute("id", ID_PREFIX + id);
    amiiboElement.setAttribute("href", "amiibo.php?id=" + id);
    amiiboElement.append(spriteContainerDiv, titleNameElement, titleGameSeriesElement);
    // Ajout de l'amiibo à l'élément parent
    amiiboListElement.appendChild(amiiboElement);
};

const addAmiibos = amiibos => {
    let amiibo;
    for (let i = 0; i < amiibos.length; i++) {
        amiibo = amiibos[i];
        createAmiiboElement(amiibo.head + amiibo.tail, amiibo.name, amiibo.gameSeries, amiibo.image);
    }
};

const updateListTitle = amiiboAmount => {
    const amiiboListTitleElement = document.getElementById("amiibo-list-title");
    amiiboListTitleElement.textContent = `Tous les amiibos (${amiiboAmount})`;
};

const hideLoading = () => {
    const loadingImg = document.getElementById("loading-img");
    loadingImg.classList.add("hidden");
}

const displayError = () => {
    const errorElement = document.createElement("div");
    const textElement = document.createElement("span");
    errorElement.classList.add("error");
    textElement.textContent = "Aucun amiibo à afficher.";
    errorElement.appendChild(textElement);
    amiiboListElement.appendChild(errorElement);
};