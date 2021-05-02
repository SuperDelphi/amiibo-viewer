<!--
  ~ Copyright (c) Simon Breil 2021
  -->

<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
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
            <h2 id="amiibo-list-title">Tous les amiibos</h2>
            <hr>
            <div id="loading-img"></div>
            <section id="amiibo-list"></section>
            <div id="bottom-gradient"></div>
        </main>

        <?php include_once "includes/hamburger.php"; ?>

    </body>
</html>