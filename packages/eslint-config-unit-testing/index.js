module.exports = {
  plugins: ['jest'],
  rules: {
    'jest/no-identical-title': 'error',
    'jest/valid-title': [
      'error',
      {
        // выключено для оптимизации
        ignoreTypeOfDescribeName: true,
      },
    ],
    'jest/valid-expect': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/no-focused-tests': 'error',
    // разрешает использовать только it
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    // запрещает тесты без expect
    'jest/expect-expect': 'error',
    // позволяет выявлять антипаттерн: тестирование нескольких кейсов в одном тесте
    // ограничение установлено в 4 потому, что больше 4 точно сигнализирует о проблеме
    'jest/max-expects': [
      'error',
      {
        max: 4,
      },
    ],
    // имплементирует правило style guide: https://industrious-search-cdf.notion.site/Astral-Frontend-Unit-Testing-Style-Guide-bb6ec75b67a449f68bc8eebd36d6fec8#9af3cdb91d7f4146a743fe88437904c5
    'jest/max-nested-describe': [
      'error',
      {
        max: 2,
      },
    ],
    'jest/no-commented-out-tests': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-export': 'error',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/prefer-each': 'error',
    'jest/prefer-equality-matcher': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-mock-promise-shorthand': 'warn',
    'jest/prefer-to-be': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/require-top-level-describe': 'error',
  },
};
