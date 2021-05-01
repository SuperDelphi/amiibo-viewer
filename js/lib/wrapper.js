/*
 * Copyright (c) Simon Breil 2021
 */

class AmiiboFetcher {
    amiibos = null;

    getAmiibos = async (showGames=false, showUsage=false) => {
        if (!this.amiibos) {
            const reponse = (await this.fetchAmiibos(showGames, showUsage));

            if (!reponse) {
                return null;
            }

            this.amiibos = reponse.data.amiibo;
        }
        return this.amiibos;
    }

    getPaginatedAmiibos = async (page, amount, showGames=false, showUsage=false) => {
        if (!this.amiibos) {
            const reponse = (await this.fetchAmiibos(showGames, showUsage));

            if (!reponse) {
                return null;
            }

            this.amiibos = reponse.data.amiibo;
        }
        return this.amiibos.slice(page * amount, (page + 1) * amount);
    }

    getAmiiboById = async (id, showGames=false, showUsage=false) => {
        let response;

        if (showGames || showUsage) {
            // Si l'on a besoin des jeux ou des utilisations (à cause des limitations de l'API)

            let amiibos = (await this.fetchAmiibos(showGames, showUsage)).data.amiibo;
            let response = null;
            let i = 0;

            while (!response && i < amiibos.length) {
                if (amiibos[i].head + amiibos[i].tail === id) {
                    response = amiibos[i];
                }
                i++;
            }

            if (!response) {
                return null;
            }

            return response;
        } else {
            response = (await this.fetchAmiiboById(id, showGames, showUsage));

            if (!response) {
                return null;
            }

            return response.data.amiibo;
        }
    };

    getRandomAmiibo = async (showGames=false, showUsage=false) => {
        const response = (await this.getAmiibos(showGames, showUsage));

        if (!response) {
            return null;
        }

        return response[Math.round(Math.random() * response.length)];
    }

    // Méthodes de "fetching"

    fetchAmiiboById = async id => {
        return await this._fetchData("?id=" + id);
    };

    fetchAmiibos = async (showGames=false, showUsage=false) => {
        let parameters;

        if (showGames) {
            parameters = "?showgames" + (showUsage ? "&showusage" : "");
        } else if (showUsage) {
            parameters = "?showusage" + (showGames ? "&showgames" : "");
        }

        return await this._fetchData(parameters);
    };

    fetchAmiibosOfType = async (type, showGames=false, showUsage=false) => {
        let parameters = "?type=" + type + (showGames ? "&showgames" : "") + (showUsage ? "&showusage" : "");

        return await this._fetchData(parameters);
    };

    _fetchData = async (uri="") => {
        let response = null;
        try {
            response = await axios(AMIIBO_URL_ENDPOINT + uri);
        } catch (e) {
            return null;
        }
        return response;
    }
}