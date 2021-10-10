const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 715,
        title: 'Bonk.io',
        icon: './icon.png',
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            preload: __dirname + '/script.js'
        }
    })

    win.on('page-title-updated', evt => {
        evt.preventDefault()
    })

    win.loadURL('https://bonk.io')
})