# @astral/eslint-config-unit-testing

Единый eslint config для unit-тестов.

Реализует часть правил, описанных в [Astral Unit Testing Style Guide](https://industrious-search-cdf.notion.site/Astral-Frontend-Unit-Testing-Style-Guide-bb6ec75b67a449f68bc8eebd36d6fec8).

# Installation

### Npm

```shell
npm i @astral/eslint-config-unit-testing --save-dev
```

### Yarn

```shell
yarn add @astral/eslint-config-unit-testing -D
```

# Usage

`.eslintrc`

```json
{
  "extends": ["@astral/eslint-config-react-ts"],
  "overrides": [
    {
      "files": "**/*.test.ts",
      "extends": ["@astral/eslint-config-unit-testing"]
    }
  ]
}
```

## React

Для react приложений совместно с ```@astral/eslint-config-unit-testing``` используется [@astral/eslint-config-react-testing](https://www.npmjs.com/package/@astral/eslint-config-react-testing).


### Installation

#### Npm

```shell
npm i @astral/eslint-config-unit-testing @astral/eslint-config-react-testing --save-dev
```

#### Yarn

```shell
yarn add @astral/eslint-config-unit-testing @astral/eslint-config-react-testing -D
```

#### Usage

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

Список правил доступен в [исходниках](https://github.com/kaluga-astral/code-style/blob/main/packages/eslint-config-unit-testing/index.js).
