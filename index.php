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
        <script src="js/lib/svgInjector.js"></script>
        <script src="js/index/injector.js"></script>
        <script src="js/index/index.js" defer></script>
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="index.php">
                            <img class="simple-icon" src="img/icons/home_icon.svg" alt="Accueil">
                            &nbsp;Accueil
                        </a>
                    </li>
                    <li>
                        <a href="about.html">
                            <img class="simple-icon" src="img/icons/about_icon.svg" alt="À propos">
                            &nbsp;À propos
                        </a>
                    </li>
                    <li>
                        <a id="random-link" href="amiibo.php?random">
                            <img src="img/icons/random_icon.svg" alt="Aléatoire">
                            &nbsp;Figurine aléatoire
                        </a>
                    </li>
                </ul>
                <a id="site-logo" href="index.php"><img src="img/site_logo.svg" alt="Logo Amiibo Viewer"></a>
                <div id="aside-info">
                    <div>
                        <span>Copyright © 2021 | Simon Breil</span>
                        <aside>Ce site n'est pas affilié à Nintendo.</aside>
                    </div>
                    <a id="blog-link" target="_blank" href="https://simonbreil.fr">
                        <img src="img/delphistudio_logo.svg" alt="Logo de DelphiStudio">
                    </a>
                </div>
            </nav>
        </header>
        <main>
            <label id="search-bar">
                <input type="text" placeholder="Rechercher un amiibo...">
                <img src="img/icons/search_icon.svg" alt="Loupe">
            </label>
            <h2 id="amiibo-list-title">Tous les amiibos</h2>
            <hr>
            <section id="amiibo-list">
                <img id="loading-img" src="img/loading.png" alt="Chargement des amiibos...">
                <!--               Populating here -->
            </section>
            <div id="bottom-gradient"></div>
        </main>
    </body>
</html>