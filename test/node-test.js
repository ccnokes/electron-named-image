const addon = require('../index');

console.log( addon.getImageNamed('NSTrashFull').length );
console.log( addon.getImageNamed('invalid').length );

