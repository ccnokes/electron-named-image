# electron-named-image
Native node.js addon that returns Objective-C `[NSImage imageNamed]` calls as a buffer. For use with Electron. 

This lets you do use default macOS images/icons with little effort. So you can set up your TouchBar to look like this:


![](https://github.com/ccnokes/electron-named-image/blob/master/example-images/Screen%20Shot%202017-05-29%20at%2012.51.49%20PM.png)

(Note the macOS TouchBar icons in there in between the defaults)



...or your menu to look like this:

![](https://github.com/ccnokes/electron-named-image/blob/master/example-images/Screen%20Shot%202017-05-29%20at%2012.47.21%20PM.png)

(Note the icons on the menu items)


## Sample usage:

```javascript
new TouchBarButton({
  icon: nativeImage.createFromBuffer(namedImage.getImageNamed('NSTouchBarRefreshTemplate'))
})
```


Inspired by https://github.com/electron/electron/issues/9414
