# GIT

## Модель ветвления GIT

Модель ветвления GIT описана [здесь](https://github.com/kaluga-astral/docs/blob/main/GIT.md).

## Формат коммитов и pull requests

Для коммитов и pull requests включен commitlint. Ниже описан формат.

### Формат коммита

```${ENUM}(SCOPE|UIKIT-222): Description```

ENUM:
- feat
- bug
- wip (work in progress)
- refactor
- doc
- build
- chore
- test - изменения, которые коснулись тестов
- major - breaking changes, которые тригернут major релиз. Полезен для пакетов

#### Valid
```feat(UIKIT-222,ui): Title```
```feat: Title```
```feat(UIKIT-222): Title```

#### Invalid
```feat(UIKIT222): Title```
```feat(unknown): Title```
