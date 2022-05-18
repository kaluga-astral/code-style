const { copyCommonFiles } = require('./copyCommonFiles');
const { modifyPackageJSON } = require('./modifyPackageJSON');

const build = () => {
  console.log('Starting build...');
  copyCommonFiles();
  modifyPackageJSON();
  console.log('Finish build');
};

module.exports = { build };
