function getAnimeById(id) {
    return new Promise(resolve => {
        jikanAnime.RecieveById((event, data) => {
            resolve(data);
        })
        jikanAnime.RequestById(id);
    })
}


function searchAnime(q) {
    return new Promise(resolve => {
        jikanAnime.RecieveSearch((event, data) => {
            resolve(data);
        })
        jikanAnime.RequestSearch(q);
    })
}
