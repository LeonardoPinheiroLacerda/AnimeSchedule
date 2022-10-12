const axios = require("axios");

class JikanAnime {
    getAnimeById(id){
        return axios({
            method: 'GET',
            url: `https://api.jikan.moe/v4/anime/${id}`
        });
    }
    getAnimeBySearch(q, type = 'any', rating = 'any', status = 'any', page = 1){
        return axios({
            method: 'GET',
            url: `https://api.jikan.moe/v4/anime/?q=${q}&type=${type}&rating=${rating}&status=${status}&order_by=score&sort=desc&page=${page}&limit=24`
        })
    }
}

module.exports = new JikanAnime();