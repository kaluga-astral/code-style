const path = require('path');

const { propertyGroups } = require('stylelint-config-clean-order');

const propertiesOrder = propertyGroups.map((properties) => ({
  // Запрет на пустые строки между правилами внутри группы
  noEmptyLineBetween: true,
  // Пустая строка между группами правил
  emptyLineBefore: 'always',
  properties,
}));

module.exports = {
  files: [
    `${path.sep}**${path.sep}*.ts`,
    `${path.sep}**${path.sep}*.tsx`,
    `${path.sep}**${path.sep}*.js`,
    `${path.sep}**${path.sep}*.jsx`,
  ],

  customSyntax: '@stylelint/postcss-css-in-js',

  extends: [
    'stylelint-config-standard',
    'stylelint-config-clean-order',
    'stylelint-prettier/recommended',
  ],

  plugins: ['stylelint-prettier'],

  rules: {
    // отключено из-за несовместимости со styled
    'function-no-unknown': null,
    // отключено из-за несовместимости со styled
    'function-name-case': null,
    // отключено из-за несовместимости со styled
    'value-keyword-case': null,

    // разрешен kebab case (используется в mui)
    'selector-class-pattern':
      '(([A-Z][a-z0-9]+)*)+(_[a-z0-9]+([A-Z][a-z0-9]+)*)?(-[a-z0-9]+([A-Z][a-z0-9]+)*)?',

    'order/properties-order': [
      propertiesOrder,
      { unspecified: 'bottomAlphabetical', severity: 'error' },
    ],
    'declaration-empty-line-before': null,
  },
};
