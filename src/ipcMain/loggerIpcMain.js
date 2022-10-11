const {ipcMain} = require('electron');

ipcMain.on('request:log', (event, data) => {
    console.log(data);
})

ipcMain.on('request:warn', (event, data) => {
    console.warn(data);
})

ipcMain.on('request:error', (event, data) => {
    console.error(data);
})