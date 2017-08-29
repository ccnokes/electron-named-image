const addon = require('bindings')('NamedImage.node');

const dontInvert = [
  'NSTouchBarColorPickerFill',
  'NSTouchBarColorPickerFont',
  'NSTouchBarColorPickerStroke'
];

exports.getImageNamed = function(imageNamed, invert) {
  // automatically invert 
  if(
    invert == undefined &&
    imageNamed.indexOf('NSTouchBar') === 0 && 
    dontInvert.indexOf(imageNamed) === -1
  ) {
    invert = true;
  } else {
    invert = false;
  }
  return addon.getImageNamed(imageNamed, invert);
};
