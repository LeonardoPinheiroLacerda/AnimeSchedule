const axios = require('axios');

class JikanSeason {
    getCurrentSeason() {
        return axios({
            method: 'GET',
            url: `https://api.jikan.moe/v4/seasons/now`
        });
    }
    
    getSeasons() {
        return axios({
            method: 'GET',
            url: `https://api.jikan.moe/v4/seasons`
        });
    }

    getSeason(year, season) {
        return axios({
            method: 'GET',
            url: `https://api.jikan.moe/v4/seasons/${year}/${season}`
        });
    }
}

module.exports = new JikanSeason();