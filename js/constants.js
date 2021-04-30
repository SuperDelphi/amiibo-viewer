/*
 * Copyright (c) Simon Breil 2021
 */

// URL de base de l'API
const AMIIBO_URL_ENDPOINT = "https://amiiboapi.com/api/amiibo";

// Préfixe de l'identifiant différenciant les amiibos
const ID_PREFIX = "amiibo-";

// Seuil (en pixels) à partir duquel on considère que l'utilisateur est en bas de la page
const SCROLL_TOLERANCE = 200;

// Nombre d'amiibos ajoutés à charge ajout dans la page
const AMOUNT_PER_PAGE = 12;