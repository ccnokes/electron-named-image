const { nativeImage, app, BrowserWindow, TouchBar, Menu } = require('electron');
const { TouchBarButton, TouchBarScrubber } = TouchBar;
const path = require('path');
const addon = require('../index');
const namedImages = require('./namedImages');

let win;


app.on('ready', () => {
  // see http://hetima.github.io/fucking_nsimage_syntax/ for all possible named NSImages

  const btns = namedImages.slice(8, 16).map(name => {
    return new TouchBarButton({
      icon: nativeImage.createFromBuffer(addon.getImageNamed(name))
    });
  });
  const tb = new TouchBar(btns);

  win = new BrowserWindow();
  win.loadURL(path.join('file://', __dirname, 'index.html'));

  win.setTouchBar(tb);

  Menu.setApplicationMenu(Menu.buildFromTemplate([
    {
      label: "test",
      submenu: [
        { 
          label: 'Empty Trash',
          icon: nativeImage.createFromBuffer(addon.getImageNamed('NSTrashFull')).resize({ width: 20 })
        },
        {
          label: 'Connect Bluetooth',
          icon: nativeImage.createFromBuffer(addon.getImageNamed('NSBluetoothTemplate')).resize({ width: 10 })
        },
        { role: 'quit' }
      ]
    }
  ]));
});

