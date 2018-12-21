const {
  app, BrowserWindow, Menu,
} = require('electron');
const electron = require('electron');

const path = require('path');
const url = require('url');

app.setName('Minesweeper');

let mainWindow;

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New Game',
      },
      {
        label: 'Reset',
      },
      {
        label: 'Help',
      },
    ],
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' },
    ],
  },
  {
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' },
    ],
  },
];

app.on('ready', () => {
  let { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
  width *= 0.5;
  height -= 200;
  mainWindow = new BrowserWindow({ width, height });
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, './client/public/index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  const mainMenu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(mainMenu);
  mainWindow.on('closed', () => {
    app.quit();
  });
});
