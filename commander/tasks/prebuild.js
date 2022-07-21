const fs = require('fs');
const path = require('path');

const { DIST_DIR_NAME } = require('../constants');

const prebuild = () => {
  console.log('Starting prebuild...');
  console.log('Remove lib...');

  fs.rmSync(path.join(process.cwd(), DIST_DIR_NAME), {
    recursive: true,
  });

  console.log('Finish prebuild');
};

module.exports = { prebuild };
