const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('jikanAnime', {

    RequestById: (id)       => ipcRenderer.send('request:anime-by-id', id),
    RecieveById: (callback) => ipcRenderer.on('send:anime-by-id', callback),

    RequestSearch: (id)       => ipcRenderer.send('request:anime-search', id),
    RecieveSearch: (callback) => ipcRenderer.on('send:anime-search', callback),

});

contextBridge.exposeInMainWorld('logger', {
    log: (log)              => ipcRenderer.send('request:log', log),
    warn: (log)              => ipcRenderer.send('request:warn', log),
    error: (log)              => ipcRenderer.send('request:error', log)
})