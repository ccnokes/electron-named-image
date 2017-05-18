# electron-named-image (WIP)
Native node.js addon that returns Objective-C `[NSImage imageNamed]` calls as a buffer. For use with Electron. 

The remaining issue with this is that icons (like the up chevron) are black by default, so somehow I need to be able to change the color. NSTouchBar seems to do this automatically when passed a NSImage, AFAIK. 

Sample use:

```javascript
new TouchBarButton({
  icon: nativeImage.createFromBuffer(namedImage.getImagedNamed('NSTouchBarRefreshTemplate'))
})
```

Doing it this way has an obvious performance downside because it means the raw image data goes from NSImage -> Nodejs buffer -> nativeImage/Chromium image type -> NSImage. That's a lot of runaround 😓 .
