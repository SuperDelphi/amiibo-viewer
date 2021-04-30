/*
 * Copyright (c) Simon Breil 2021
 */

document.addEventListener("DOMContentLoaded", async () => {
    const url = new URL(window.location.href);
    const amiiboId = url.searchParams.get("id");

    const amiiboList = new AmiiboFetcher();

    console.log(await amiiboList.getAmiiboById(amiiboId));
});