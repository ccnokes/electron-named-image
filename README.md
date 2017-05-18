# electron-named-image (WIP)
Native node.js addon that returns Objective-C `[NSImage imageNamed]` calls as a buffer. For use with Electron. 

The remaining issue with this is that icons (like the up chevron) are black by default, so somehow I need to be able to change the color. NSTouchBar seems to do this automatically when passed a NSImage, AFAIK. 

Sample use:

```javascript
new TouchBarButton({
  icon: nativeImage.createFromBuffer(namedImage.getImagedNamed('NSTouchBarRefreshTemplate'))
})
```
