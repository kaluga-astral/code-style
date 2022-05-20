module.exports = {
  extends: ['airbnb-base', '@astral/eslint-config-base'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    /**
     * Отключается ошибка при модификации параметров. Данный механизм часто используется в express
     * @example
     *   app.get('/', (req, res, next) => {
     *     req.cookies.token = 'token';
     *   });
     */
    'no-param-reassign': [2, { props: false }],
  },
  env: {
    node: true,
    jest: true,
  },
};
