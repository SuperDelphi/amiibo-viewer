/*
 * Copyright (c) Simon Breil 2021
 */

document.addEventListener("DOMContentLoaded", async () => {
    const url = new URL(window.location.href);
    const amiiboId = url.searchParams.get("id");
    const amiiboList = new AmiiboFetcher();
    let amiibo;

    if (amiiboId) {
        // Récupération de l'amiibo correspondant à l'id
        amiibo = await amiiboList.getAmiiboById(amiiboId, false, true);
    } else if (url.searchParams.has("random")) {
        // Récupération d'un amiibo aléatoire
        amiibo = await amiiboList.getRandomAmiibo(false, true);
    } else {
        // Redirection vers la page d'amiibo aléatoire
        window.location.replace("?random");
    }

    if (!amiibo) {
        // Redirection vers la page d'amiibo aléatoire
        window.location.replace("?random");
    }

    displayAmiibo(amiibo);
});