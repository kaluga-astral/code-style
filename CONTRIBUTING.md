# GIT

## Модель ветвления GIT

Модель ветвления GIT описана [здесь](https://github.com/kaluga-astral/docs/blob/main/GIT.md).

## Формат коммитов и pull requests

Для коммитов и pull requests включен commitlint. Ниже описан формат.

### Формат коммита

```${ENUM}(SCOPE|UIKIT-222): Description```

ENUM:
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

#### Valid
```feat(UIKIT-222,ui): Title```
```feat: Title```
```feat(UIKIT-222): Title```

#### Invalid
```feat(UIKIT222): Title```
```feat(unknown): Title```
