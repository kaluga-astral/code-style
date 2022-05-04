# GIT

# Формат коммитов и pull requests

Для коммитов и pull requests включен commitlint. Ниже описан формат.

```
${ENUM}(${PACKAGE_NAME},${COMPONENT_NAME | FUNCTION_NAME}): ${Что было сделано?}
```

ENUM:
- feat
- bug
- wip (work in progress)
- refactor
- doc
- build
- chore

PACKAGE_NAME:
- eslint-ts-ui

## Примеры

### Valid
```
wip(eslint-ts-ui): Начата работа на добавлением пропса color
```

```
feat(eslint-ts-ui): Добавлен пропс color
```

### Invalid
```
feat: Добавил пропс color
```
