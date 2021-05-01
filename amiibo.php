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
        <script src="js/amiibo/view.js" defer></script>
        <script src="js/amiibo/main.js" defer></script>
        <link rel="stylesheet" href="css/amiibo/main.css">
    </head>
    <body>
        <?php include_once "includes/header.php"; ?>

        <img id="loading-img" src="img/loading.png" alt="Chargement des amiibos...">

        <main class="hidden">
            <img id="amiibo-sprite">
            <div id="main-titles">
                <h2></h2>
                <h3></h3>
            </div>
            <hr>
            <div id="info">
                <div id="releases">
                    <h4>Sorties mondiales</h4>
                    <p></p>
                </div>
                <div id="games">
                    <h4>Jeux compatibles</h4>
                </div>
            </div>
        </main>

        <?php include_once "includes/footer.php"; ?>