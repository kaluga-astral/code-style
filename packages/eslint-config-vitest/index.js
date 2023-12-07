module.exports = {
  plugins: ['vitest'],
  rules: {
    'vitest/no-identical-title': 'error',
    'vitest/valid-title': [
      'error',
      {
        // выключено для оптимизации
        ignoreTypeOfDescribeName: true,
      },
    ],
    'vitest/valid-expect': 'error',
    'vitest/no-focused-tests': 'error',
    // разрешает использовать только it
    'vitest/consistent-test-it': ['error', { fn: 'it' }],
    // запрещает тесты без expect
    'vitest/expect-expect': 'error',
    // позволяет выявлять антипаттерн: тестирование нескольких кейсов в одном тесте
    // ограничение установлено в 4 потому, что больше 4 точно сигнализирует о проблеме
    'vitest/max-expects': [
      'error',
      {
        max: 4,
      },
    ],
    // имплементирует правило style guide: https://industrious-search-cdf.notion.site/Astral-Frontend-Unit-Testing-Style-Guide-bb6ec75b67a449f68bc8eebd36d6fec8#9af3cdb91d7f4146a743fe88437904c5
    'vitest/max-nested-describe': [
      'error',
      {
        max: 2,
      },
    ],
    'vitest/no-commented-out-tests': 'error',
    'vitest/no-disabled-tests': 'error',
    'vitest/no-duplicate-hooks': 'error',
    'vitest/no-standalone-expect': 'error',
    'vitest/no-test-prefixes': 'error',
    'vitest/prefer-each': 'error',
    'vitest/prefer-equality-matcher': 'error',
    'vitest/prefer-hooks-on-top': 'error',
    'vitest/prefer-mock-promise-shorthand': 'warn',
    'vitest/prefer-to-be': 'error',
    'vitest/prefer-to-contain': 'error',
    'vitest/prefer-to-have-length': 'error',
    'vitest/prefer-to-be-falsy': 'error',
    'vitest/prefer-to-be-truthy': 'error',
    'vitest/require-top-level-describe': 'error',
  },
};
