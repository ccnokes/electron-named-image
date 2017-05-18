const { nativeImage, app, BrowserWindow, TouchBar } = require('electron');
const { TouchBarButton, TouchBarScrubber } = TouchBar;
const path = require('path');
const addon = require('../index');
const namedImages = require('../namedImages');

let win;


app.on('ready', () => {
  // see http://hetima.github.io/fucking_nsimage_syntax/ for all possible named NSImages
  // e.g. NSTouchBarGoUpTemplate
  // const tb = new TouchBar([
  //   new TouchBarScrubber({
  //     showArrowButtons: true,
  //     overlayStyle: 'outline',
  //     items: namedImages.map(name => {
  //       return {
  //         icon: nativeImage.createFromBuffer(addon.getImagedNamed(name)) 
  //       };
  //     })
  //   })
  // ]);

  const btns = namedImages.map(name => {
    return new TouchBarButton({
      icon: nativeImage.createFromBuffer(addon.getImagedNamed(name))
    });
  });
  const tb = new TouchBar(btns);

  win = new BrowserWindow();
  win.loadURL(path.join('file://', __dirname, 'index.html'));

  win.setTouchBar(tb);
});

