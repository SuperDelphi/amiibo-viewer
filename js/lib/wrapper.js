/*
 * Copyright (c) Simon Breil 2021
 */

class AmiiboFetcher {
    amiibos = null;

    getAmiibos = async () => {
        if (!this.amiibos) {
            const reponse = (await this.fetchAmiibos());

            if (!reponse) {
                return null;
            }

            this.amiibos = reponse.data.amiibo;
        }
        return this.amiibos;
    }

    getPaginatedAmiibos = async (page, amount) => {
        if (!this.amiibos) {
            const reponse = (await this.fetchAmiibos());

            if (!reponse) {
                return null;
            }

            this.amiibos = reponse.data.amiibo;
        }
        return this.amiibos.slice(page * amount, (page + 1) * amount);
    }

    getAmiiboById = async id => {
        const response = (await this.fetchAmiiboById(id));

        if (!response) {
            return null;
        }

        return response.data.amiibo;
    };

    // Méthodes de "fetching"

    fetchAmiiboById = async id => {
        return await this._fetchData("?id=" + id);
    };

    fetchAmiibos = async () => {
        return await this._fetchData();
    };

    fetchAmiibosOfType = async type => {
        return await this._fetchData("?type=" + type);
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