function getAnimeById(id) {
    return new Promise(resolve => {
        jikanAnime.RecieveById((event, data) => {
            resolve(data);
        })
        jikanAnime.RequestById(id);
    })
}


function searchAnime(q, type, rating, status, page = 1) {
    return new Promise(resolve => {
        jikanAnime.RecieveSearch((event, data) => {
            resolve(data);
        })
        jikanAnime.RequestSearch({q, type, rating, status, page});
    })
}
