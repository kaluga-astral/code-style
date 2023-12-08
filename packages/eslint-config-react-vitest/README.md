# @astral/eslint-config-react-vitest

Единый eslint config для компонентного тестирования react с использованием ```@testing-library/react```.

Расширяет [@astral/eslint-config-vitest](https://www.npmjs.com/package/@astral/eslint-config-vitest).

# Installation

### Npm

```shell
npm i @astral/eslint-config-react-vitest @astral/eslint-config-vitest --save-dev
```

### Yarn

```shell
yarn add @astral/eslint-config-react-vitest @astral/eslint-config-vitest -D
```

# Usage

Для оптимизации необходимо отдельно определять конфиг через overrides для ts и tsx файлов.

`.eslintrc`

```json
{
  "extends": "@astral/eslint-config-react-ts",
  "overrides": [
    {
      "files": "**/*.test.tsx",
      "extends": ["@astral/eslint-config-react-vitest"]
    },
    {
      "files": "**/*.test.ts",
      "extends": ["@astral/eslint-config-vitest"]
    }
  ]
}
```

# Rules

Список правил доступен в [исходниках](https://github.com/kaluga-astral/code-style/blob/main/packages/eslint-config-react-vitest/index.js).
