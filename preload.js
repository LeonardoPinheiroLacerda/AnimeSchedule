const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('jikanAnime', {

    RequestById: (id)       => ipcRenderer.send('request:anime-by-id', id),
    RecieveById: (callback) => ipcRenderer.on('send:anime-by-id', callback),

    RequestSearch: (obj)       => ipcRenderer.send('request:anime-search', obj),
    RecieveSearch: (callback) => ipcRenderer.on('send:anime-search', callback),

});

contextBridge.exposeInMainWorld('jikanSeason', {

    RequestList: ()       => ipcRenderer.send('request:seasons-list'),
    RecieveList: (callback) => ipcRenderer.on('send:seasons-list', callback),

    RequestCurrent: ()       => ipcRenderer.send('request:current-season'),
    RecieveCurrent: (callback) => ipcRenderer.on('send:current-season', callback),

    RequestSeason: (obj)       => ipcRenderer.send('request:season', obj),
    RecieveSeason: (callback) => ipcRenderer.on('send:season', callback),

})


contextBridge.exposeInMainWorld('logger', {
    log: (log)              => ipcRenderer.send('request:log', log),
    warn: (log)              => ipcRenderer.send('request:warn', log),
    error: (log)              => ipcRenderer.send('request:error', log)
})