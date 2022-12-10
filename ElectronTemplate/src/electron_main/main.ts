import { app, BrowserWindow } from 'electron';
import Path from 'path';

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 1000,
        webPreferences: {
            preload: Path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
            webSecurity: false,
        },
    });

    mainWindow.webContents.openDevTools();

    if (process.env.NODE_ENV === 'development') {
        const rendererPort = process.argv[2];
        mainWindow.loadURL(`http://localhost:${rendererPort}`);
    } else {
        mainWindow.loadFile(
            Path.join(app.getAppPath(), 'render', 'index.html'),
        );
    }
}

app.whenReady().then(() => {
    createWindow();

    // session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    //     callback({
    //         responseHeaders: {
    //             ...details.responseHeaders,
    //             'Content-Security-Policy': ["script-src 'self'"],
    //         },
    //     });
    // });

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

    app.on('ready', (even, info) => {});
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
