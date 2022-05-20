const getDirNames = require('read-dir-names');
const path = require("path");

const packagesCommands = getDirNames(path.resolve(__dirname, 'packages')).reduce(
  (result, packageName) => ({
    [`packages/${packageName}/**/*.{js}`]: [
      `npm run lint --workspace=@astral/${packageName}`,
    ],
  }),
  {},
);

module.exports = {
  ...packagesCommands,
  'commander/**/*.{js}': ['npm run lint --workspace=@astral/commander'],
};
