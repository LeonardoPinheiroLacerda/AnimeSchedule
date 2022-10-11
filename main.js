const {app, BrowserWindow} = require('electron');
const path = require('path');

require('./src/ipcMain/animeIpcMain');
require('./src/ipcMain/loggerIpcMain');

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width:1280,
        height: 720,
        minWidth: 800,
        minHeight: 480,
        autoHideMenuBar: true,
        fullscreenable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            
        },
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#212529',
            symbolColor: '#f8f9fa'
        }
    });

    mainWindow.loadFile('./src/views/home/index.html');
});