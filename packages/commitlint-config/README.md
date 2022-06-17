# @astral/commitlint-config

Eslint config for react with typescript

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

```commitlint.config.js```
```js
module.exports = {
  extends: ['@astral/commitlint-config']
}
```

```.huskyrc```
```json
{
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
  }
}
```

# Формат

```${ENUM}(SCOPE|TASK): Description```

ENUM:
- feat
- bug
- wip (work in progress)
- refactor
- doc
- build
- chore

## Примеры
