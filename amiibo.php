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
        <script src="js/amiibo/view.js" defer></script>
        <script src="js/amiibo/main.js" defer></script>
        <link rel="stylesheet" href="css/amiibo/main.css">
    </head>
    <body>

        <?php include_once "includes/header.php"; ?>

        <div id="loading-img"></div>

        <a class="hidden" href="index.php" id="back-link">
            <svg viewBox="0 0 27 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 style="stroke:#969696;fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                <g>
                    <path d="M24.687,10.709l-23.298,0" style="fill:none;stroke-width:2.78px;"/>
                    <path d="M10.709,1.389l-9.32,9.32" style="fill:none;stroke-width:2.78px;"/>
                    <path d="M10.709,20.029l-9.32,-9.32" style="fill:none;stroke-width:2.78px;"/>
                </g>
            </svg> Retour à la liste
        </a>
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

        <?php include_once "includes/hamburger.php"; ?>

    </body>
</html>
