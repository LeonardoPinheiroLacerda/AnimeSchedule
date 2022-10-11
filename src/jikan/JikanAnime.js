const axios = require("axios");

class JikanAnime {
    getAnimeById(id){
        return axios({
            method: 'GET',
            url: `https://api.jikan.moe/v4/anime/${id}`
        });
    }
    getAnimeBySearch(q){
        return axios({
            method: 'GET',
            url: `https://api.jikan.moe/v4/anime/?q=${q}&type=tv&limit=1000`
        })
    }
}

module.exports = new JikanAnime();