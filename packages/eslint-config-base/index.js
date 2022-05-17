module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    // определяется конфиг для prettier для того, чтобы его не надо было определять в проекте
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }],

    quotes: ['error', 'single'],

    // запрещает больше одной пустой строки
    'no-multiple-empty-lines': 'error',

    // добавляет разделительные пустые строки для блоков импортов
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['internal'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'object',
          'index',
        ],
      },
    ],

    // сортирует импорты
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    // добавляет запятую в конец списка, если представлен в виде нескольких строк
    'comma-dangle': ['error', 'always-multiline'],
  },
};
