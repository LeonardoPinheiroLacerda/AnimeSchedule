function getSeasonList() {
    return new Promise(resolve => {
        jikanSeason.RecieveList((event, data) => {
            resolve(data);
        })
        jikanSeason.RequestList();
    })
}

function getCurrentSeason() {
    return new Promise(resolve => {
        jikanSeason.RecieveCurrent((event, data) => {
            resolve(data);
        })
        jikanSeason.RequestCurrent();
    })
}

function getSeason(year, season) {
    return new Promise(resolve => {
        jikanSeason.RecieveSeason((event, data) => {
            resolve(data);
        })
        jikanSeason.RequestSeason({year, season});
    })
}