// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { remote } = require('electron');
const updater = remote.require('electron-simple-updater');
const dialog = remote.dialog;

updater.on('update-downloaded', function() {
    const dialogOpts = {
        type: 'info',
        buttons: ['Позднее', 'Перезапустить'],
        title: 'Обновление приложения',
        // message: process.platform === 'win32' ? releaseNotes : releaseName,
        detail: `Обновление успешно скачено. Перезапустите приложение, чтобы изменения вступили в силу.`
    };

    dialog.showMessageBox(dialogOpts, (response) => {
        if (response === 1) {
            updater.quitAndInstall();
        }
    })
});

setInterval(() => {
    updater.checkForUpdates();
}, 60000); // 1000 * 60 (секунд) * 60 (минут) = 3600000 (миллисекунд в 1 часе) * 12 (полдня) = 43200000
