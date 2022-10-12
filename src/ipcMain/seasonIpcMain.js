const {ipcMain} = require('electron');
const JikanSeason = require('./../jikan/JikanSeason');

ipcMain.on('request:seasons-list', async (event, data) => {
    const seasons = await JikanSeason.getSeasons();
    event.sender.send('send:seasons-list', seasons.data);
});

ipcMain.on('request:season', async (event, {year, season}) => {
    const obj = await JikanSeason.getSeason(year, season);
    event.sender.send('send:season', obj.data);
});

ipcMain.on('request:current-season', async (event, data) => {
    const season = await JikanSeason.getCurrentSeason();
    event.sender.send('send:current-season', season.data);
});
