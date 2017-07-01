# electron-named-image
Native node.js addon that returns Objective-C `[NSImage imageNamed]` calls as a PNG buffer, which simplifies using default macOS images in Electron apps.

## Install

```
npm install electron-named-image
```

Most likely you'll want to add it to your `optionalDependencies` due to the way that npm handles platform specific native addons. This way `npm install` won't fail on non-macOS platforms.

## What? Why?

This lets you use default macOS images/icons with little effort. So you can set up your TouchBar to look like this:


![](https://github.com/ccnokes/electron-named-image/blob/master/example-images/Screen%20Shot%202017-05-29%20at%2012.51.49%20PM.png)

(Note the macOS TouchBar icons in there in between the defaults)



...or your menu to look like this:

![](https://github.com/ccnokes/electron-named-image/blob/master/example-images/Screen%20Shot%202017-05-29%20at%2012.47.21%20PM.png)

(Note the icons on the menu items)

...without having to manually gather together a bunch of image files. These images/icons are included as a part of macOS and available to Objective-C and Swift via the `NSImage` API. This module allows you to use it via Javascript.

## Sample usage:

```javascript
new TouchBarButton({
  icon: nativeImage.createFromBuffer(
    namedImage.getImageNamed('NSTouchBarRefreshTemplate')
  )
})
```

```javascript
Menu.setApplicationMenu(Menu.buildFromTemplate([
  {
    label: 'My App',
    submenu: [
      { 
        label: 'Empty Trash',
        icon: nativeImage.createFromBuffer(
          namedImage.getImageNamed('NSTrashFull')
        ).resize({ width: 20 })
      }
    ]
  }
]));
```

For all possible "named images" on macOS, [see this](http://hetima.github.io/fucking_nsimage_syntax/).

If you specify an invalid named image or are using it on a macOS version that pre-dates `NSTouchBar*` icons, you'll get back an empty buffer. For example:

```javascript
namedImage.getImageNamed('invalid').length // => 0
namedImage.getImageNamed('NSTrashFull').length // => 9166
```

The empty buffer will work as expected with Electron's `nativeImage` module, you just won't have any actual image.

All of the `NSTouchBar*` named images have been outputted as PNGs to the `images` folder which you can use as well just by manually saving and importing them into your app.

## Compiling for use in an Electron app
See [https://github.com/electron/electron/blob/master/docs/tutorial/using-native-node-modules.md] for the easy, right way. Or you can also `npm install -g node-gyp` and then run the same `compile-for-electron` script I have in the package.json in the root of this module's folder.


Inspired by https://github.com/electron/electron/issues/9414
