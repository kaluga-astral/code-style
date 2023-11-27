# @astral/eslint-config-react-ts

Eslint config for react with typescript

# Usage

## Migration Guide 2.0

### Отказ от поддержки prettier v2

Были обновлены пакеты:
- prettier: "^3.0.3",
- eslint: "^8.52.0",
- eslint-plugin-prettier: "^5.0.1"
- stylelint: "^15.11.0",
- stylelint-config-standard: "^34.0.0",
- stylelint-prettier: "^4.0.2"

Для коректной работы нужно будет обновить зависимости которые используются у вас в проекте.

### Разделение импорта типов и реализации

Было добавлено новое правило :

```json
 "@typescript-eslint/consistent-type-imports": "error" 
```

Пример правильного использования

```typescript
import { type Foo } from 'Foo';
import type Bar from 'Bar';
type T = Foo;
const x: Bar = 1;
```

## Installation

### Npm

```shell
npm i eslint prettier @astral/eslint-config-react-ts --save-dev
```

### Yarn

```shell
yarn add eslint prettier @astral/eslint-config-react-ts -D
```

`.eslintrc`

```json
{
  "extends": ["@astral/eslint-config-react-ts"]
}
```

`.prettierrc` файл не нужен так, как он сконфигурирован внутри @astral/eslint-config-react-ts


## Troubleshooting

### 1. Производительность ESLint
При использовании данного конфига, могут возникнуть следующие проблемы:
- `[FATAL ERROR]: Reached heap limit Allocation failed – JavaScript heap out of memory`
- `No results for Component.tsx after 20 sec`
- `Problem with ESLint reformatting: Component.tsx: Cannot start language service process`
- Очень долгий парсинг первого файла (видно при запуске линтера с `--debug` флагом)

Плагин `import` внутри себя использует собственный парсер, который не дружит с большим количеством path aliases.

#### Решение
Создать копию tsconfig без `"paths": {...}`. 

В `.eslintrc` файле указать путь к новому файлу:
```eslintrc
  "parserOptions": {
    "project": "tsconfig.eslint.json"
  },
```
