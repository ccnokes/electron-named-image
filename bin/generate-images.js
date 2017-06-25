const images = require('../test/namedImages');
const fs = require('fs');
const path = require('path');
const { getImageNamed } = require('../index');

images.forEach(img => {
  fs.writeFile(path.resolve('./images', img + '.png'), getImageNamed(img), (err) => {
    if(err) {
      console.error(err);
    }
  });
});
