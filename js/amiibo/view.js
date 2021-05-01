/*
 * Copyright (c) Simon Breil 2021
 */

const displayAmiibo = amiibo => {
    const amiiboSprite = document.getElementById("amiibo-sprite");
    const nameTitle = document.querySelector("#main-titles h2");
    const gameTitle = document.querySelector("#main-titles h3");
    const releaseText = document.querySelector("#releases p");

    // Image
    amiiboSprite.setAttribute("src", amiibo.image);
    amiiboSprite.setAttribute("alt", amiibo.name + " (" + amiibo.gameSeries + ")");

    // Titres
    nameTitle.textContent = amiibo.name;
    gameTitle.textContent = amiibo.gameSeries;

    // Sorties mondiales
    let keys = Object.keys(amiibo.release);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key && REGIONS.hasOwnProperty(key)) {
            if (amiibo.release[key]) {
                // Formattage et ajout de la date

                let date = new Date(amiibo.release[key]);

                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();

                day = day.toString().length < 2 ? "0" + day : day;
                month = month.toString().length < 2 ? "0" + month : month;

                releaseText.innerHTML += REGIONS[key] + " : <b>" + day + "/" + month + "/" + year + "</b>";
            } else {
                releaseText.innerHTML += REGIONS[key] + " : <b>-</b>";
            }
        }
        if (i !== keys.length - 1) {
            releaseText.innerHTML += " / ";
        }
    }

    // Jeux compatibles (3DS, Switch et Wii U)
    if (amiibo.gamesSwitch) {
        for (let i = 0; i < amiibo.gamesSwitch.length; i++) {
            let game = amiibo.gamesSwitch[i];
            addGame(game, "Switch");
        }
    }
    if (amiibo.gamesWiiU) {
        for (let i = 0; i < amiibo.gamesWiiU.length; i++) {
            let game = amiibo.gamesWiiU[i];
            addGame(game, "Wii U");
        }
    }
    if (amiibo.games3DS) {
        for (let i = 0; i < amiibo.games3DS.length; i++) {
            let game = amiibo.games3DS[i];
            addGame(game, "3DS");
        }
    }

    hideLoading();
    showPage();
};

const addGame = (game, console) => {
    const gamesContainer = document.getElementById("games");

    const usageListElement = document.createElement("ul");

    game.amiiboUsage.forEach(feature => {
        let usageElement = document.createElement("li");
        usageElement.textContent = feature.Usage;
        usageListElement.append(usageElement);
    });

    const gameTitle = document.createElement("h5");
    gameTitle.innerHTML = game.gameName + " <span> • " + console + "</span>";

    const gameElement = document.createElement("article");
    gameElement.append(gameTitle, usageListElement);

    switch (console) {
        case "3DS":
            gameElement.classList.add("threeds-game");
            break;
        case "Wii U":
            gameElement.classList.add("wiiu-game");
            break;
        case "Switch":
            gameElement.classList.add("switch-game");
            break;
    }

    gamesContainer.appendChild(gameElement);
};

const hideLoading = () => {
    const loadingImg = document.getElementById("loading-img");
    loadingImg.classList.add("hidden");
}

const showPage = () => {
    const mainElement = document.getElementsByTagName("main")[0];
    mainElement.classList.remove("hidden");
};