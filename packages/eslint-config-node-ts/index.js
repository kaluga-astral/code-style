module.exports = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@astral/eslint-config-base',
  ],

  plugins: ['@typescript-eslint/eslint-plugin'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: ['tsconfig.json'],
  },

  rules: {
    // отключается ошибка при модификации параметров. Данный механизм часто используется в express
    'no-param-reassign': [2, { props: false }],
  },

  env: {
    node: true,
    jest: true,
  },
};
