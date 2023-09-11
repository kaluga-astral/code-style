# @astral/commitlint-config

# Usage

## Installation

### Npm
```shell
npm i commitlint @astral/commitlint-config --save-dev 
```

### Yarn
```shell
yarn add commitlint @astral/commitlint-config -D
```

### Configuration
```commitlint.config.js```
```js
const { createConfig } = require('@astral/commitlint-config');

module.exports = createConfig({
  scopes: ['ui', 'server'],
  ticketPrefix: 'UIKIT',
});
```

```.huskyrc```
```json
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

### Message example
#### Valid
```feat(UIKIT-222,ui): Title```
```feat: Title```
```feat(UIKIT-222): Title```

#### Invalid
```feat(UIKIT222): Title```
```feat(unknown): Title```

# Format

```${ENUM}(SCOPE|TASK): Description```

Default ENUM:
- feat - добавлена новая фича. Для этого enum будет произведен релиз minor версии пакетов
- bug - исправлена ошибка. Для этого enum будет произведен релиз patch версии пакетов
- wip (work in progress) - промежуточные изменения
- refactor - произведен рефакторинг. Для этого enum будет произведен релиз patch версии пакетов
- doc - внесены изменения в .md файлы или storybook. Для этого enum релиз произведен не будет
- build - внесены изменения в сборке пакетов. Для этого enum будет произведен релиз patch версии пакетов
- chore - внесены изменения в настройку окружения проекта (линтеры, ci...). Для этого enum релиз произведен не будет
- revert - удалены ранее внесенные изменения
- style - написаны или изменены стили проекта
- test - написаны или изменены тесты проекта
- major - breaking changes, которые тригернут major релиз. Полезен для пакетов


# API
## createConfig
```ts
const { createConfig } = require('@astral/commitlint-config');

type Params = {
  /**
   * Список доступных scopes.
   * @example
   * // createConfig({ scopes: ['server', 'ui'], ticketPrefix: 'UIKIT' })
   */
  scopes?: string[];
  /**
   * Название префикса задач, данный префикс будет доступен в scope.
   * @example
   * // createConfig({ ticketPrefix: 'UIKIT' })
   */
  ticketPrefix: string;
  /**
   * Список доступных type. Дефолтное значение указано в разделе Format
   * @example
   * // createConfig({ typeEnum: ['feat', 'ci'], ticketPrefix: 'UIKIT',  })
   */
  typeEnum?: string[];
};
  
createConfig(params: Params);
```
