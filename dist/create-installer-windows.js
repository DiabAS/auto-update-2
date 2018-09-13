const createInstallerWindows = require('electron-winstaller').createWindowsInstaller;
const path = require('path');
const {version} = require('../package.json');

getInstallerConfig()
    .then(createInstallerWindows)
    .catch((error) => {
        console.error(error.message || error);
        process.exit(1);
    })

function getInstallerConfig() {
    console.log('Creating windows installer ...');
    const rootPath = path.join('./');

    return Promise.resolve({
        appDirectory: path.join(rootPath, 'dist', 'package', 'megacam-win32-x64/'),
        authors: '_Di@bAS',
        noMsi: true,
        outputDirectory: path.join(rootPath, 'dist', 'squirrel-windows'),
        exe: 'application.exe',
        // setupExe: `megacam.Setup.${version}.exe`,
        setupExe: `auto-update-2 Setup ${version}.exe`,
        setupIcon: path.join(rootPath, 'dist', 'assets', 'icon.ico')
    });
}