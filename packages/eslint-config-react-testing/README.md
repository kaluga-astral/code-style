# @astral/eslint-config-react-testing

Единый eslint config для компонентного тестирования react с использованием ```@testing-library/react```.

Расширяет [@astral/eslint-config-unit-testing](https://www.npmjs.com/package/@astral/eslint-config-unit-testing).

# Installation

### Npm

```shell
npm i @astral/eslint-config-react-testing @astral/eslint-config-unit-testing --save-dev
```

### Yarn

```shell
yarn add @astral/eslint-config-react-testing @astral/eslint-config-unit-testing -D
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
      "extends": ["@astral/eslint-config-react-testing"]
    },
    {
      "files": "**/*.test.ts",
      "extends": ["@astral/eslint-config-unit-testing"]
    }
  ]
}
```

# Rules

Список правил доступен в [исходниках](https://github.com/kaluga-astral/code-style/blob/main/packages/eslint-config-react-testing/index.js).
