const DEFAULT_TYPE_ENUM = [
  'feat',
  'bug',
  'wip',
  'refactor',
  'doc',
  'build',
  'chore',
  'revert',
  'style',
  'test',
  'major',
];

/**
 * Создает commitlint config
 * @param {Object} params - Параметры инициализации конфига.
 * @param {string[]} [params.scopes=[]] - Список доступных scopes.
 * @param {string} params.ticketPrefix - Название префикса или список названий префиксов задач, данный префикс будет доступен в scope.
 * @param {string[]} [params.typeEnum=[]] - Список доступных type.
 * @example
 * // createConfig({ scopes: ['server', 'ui'], ticketPrefix: 'UIKIT' })
 */
const createConfig = ({
  scopes = [],
  ticketPrefix,
  typeEnum = DEFAULT_TYPE_ENUM,
}) => ({
  extends: ['@commitlint/config-conventional'],

  plugins: ['commitlint-plugin-function-rules'],

  rules: {
    // Тело коммита должно начинаться с пустой строки
    'body-leading-blank': [2, 'always'],

    // Нижний колонтитул коммита должен начинаться с пустой строки
    'footer-leading-blank': [2, 'always'],

    // Максимальная длина заголовка
    'header-max-length': [2, 'always', 120],

    // Описание не может быть пустым
    'subject-empty': [2, 'never'],

    // Описание не должно заканчиваться '.'
    'subject-full-stop': [2, 'never', '.'],

    // Описание должно начинаться с большой буквы
    'subject-case': [2, 'always', 'sentence-case'],

    // Тип всегда только в нижнем регистре
    'type-case': [2, 'always', 'lower-case'],

    // Тип не может быть пустым
    'type-empty': [2, 'never'],

    // Перечислим все возможные варианты коммитов
    'type-enum': [2, 'always', typeEnum],

    // функция вызывается при проверке scopes
    'function-rules/scope-enum': [
      2,
      'always',
      ({ scope }) => {
        const ticketPrefixes = Array.isArray(ticketPrefix) ? ticketPrefix : [ticketPrefix];

        const isTicketScope = ticketPrefixes.some((prefix) => scope?.startsWith(`${prefix}-`))

        if (!scope || scopes.includes(scope) || isTicketScope) {
          return [true];
        }

        const formattedTickets = ticketPrefixes.map((ticket) =>`${ticket}-XXXX`);

        const scopesEnumsMessage = [...scopes, ...formattedTickets].join(
          ', ',
        );

        return [false, `scope must be one of [${scopesEnumsMessage}]`];
      },
    ],
  },
});

module.exports = {
  createConfig,
};
