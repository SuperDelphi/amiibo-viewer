/*
 * Copyright (c) Simon Breil 2021
 */

// Élément représentant la liste des amiibos
const amiiboListElement = document.getElementById("amiibo-list");

// Quand la page est chargée...
document.addEventListener("DOMContentLoaded", async () => {
    // Spécifie si l'utilisateur est en bas de page ou non
    let isAtBottom = false;
    let currentPage = 0;

    const amiiboList = new AmiiboFetcher();

    // Récupération des données
    const data = await amiiboList.getPaginatedAmiibos(currentPage, AMOUNT_PER_PAGE);

    // Masquage de l'image de chargement
    hideLoading();

    if (data) {
        // Ajout des amiibos à la page principale
        addAmiibos(data);

        // Mise à jour du titre
        updateListTitle((await amiiboList.getAmiibos()).length);

        window.addEventListener("scroll", async event => {
            // Si l'utilisateur arrive en base de la page (avec tolérance)
            if ((window.innerHeight + window.scrollY) + SCROLL_TOLERANCE >= document.body.offsetHeight) {
                if (!isAtBottom) {
                    isAtBottom = true;
                    addAmiibos(await amiiboList.getPaginatedAmiibos(++currentPage, AMOUNT_PER_PAGE));
                }
            } else {
                isAtBottom = false;
            }
        });
    } else {
        displayError();
    }
});