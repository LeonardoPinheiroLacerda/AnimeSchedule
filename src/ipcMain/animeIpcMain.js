const {ipcMain} = require('electron');
const JikanAnime = require('../jikan/JikanAnime');

ipcMain.on('request:anime-by-id', async (event, data) => {
    const anime = await JikanAnime.getAnimeById(data);
    event.sender.send('send:anime-by-id', anime.data);
});


ipcMain.on('request:anime-search', async (event, data) => {
    const {q, type, status, rating} = data;

    console.log("search: ", data);

    const animes = await JikanAnime.getAnimeBySearch(q, type, rating, status);
    event.sender.send('send:anime-search', animes.data);
});
