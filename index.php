<!--
  ~ Copyright (c) Simon Breil 2021
  -->

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Amiibo Viewer | Accueil</title>
        <link rel="shortcut icon" href="favicon.ico">
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="js/constants.js"></script>
        <script src="js/lib/wrapper.js"></script>
        <script src="js/index/view.js"></script>
        <script src="js/index/main.js" defer></script>
        <link rel="stylesheet" href="css/index/main.css">
    </head>
    <body>
        <?php include_once "includes/header.php"; ?>

        <main>
            <label id="search-bar">
                <input type="text" placeholder="Rechercher un amiibo...">
                <img src="img/icons/search_icon.svg" alt="Loupe">
            </label>
            <h2 id="amiibo-list-title">Tous les amiibos</h2>
            <hr>
            <section id="amiibo-list">
                <img id="loading-img" src="img/loading.png" alt="Chargement des amiibos...">
            </section>
            <div id="bottom-gradient"></div>
        </main>

        <?php include_once "includes/footer.php"; ?>