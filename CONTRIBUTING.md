# GIT

## Модель ветвления GIT

Модель ветвления GIT описана [здесь](https://github.com/kaluga-astral/docs/blob/main/GIT.md).

## Формат коммитов и pull requests

Для коммитов и pull requests включен commitlint. Ниже описан формат.

### Формат коммита

```${ENUM}(SCOPE|UIKIT-222): Description```

ENUM:
- feat - добавлена новая фича. Можно связать с релизом minor версии
- bug - исправлена ошибка. Можно связать с релизом patch версии
- wip (work in progress) - промежуточные изменения
- refactor - произведен рефакторинг. Можно связать с релизом patch версии
- doc - внесены изменения в .md файлы или storybook.
- build - внесены изменения в сборке пакетов. Можно связать с релизом patch версии
- chore - внесены изменения в настройку окружения проекта (линтеры, ci...).
- revert - удалены ранее внесенные изменения
- style - написаны или изменены стили проекта
- test - написаны или изменены тесты проекта
- major - breaking changes. Полезен для пакетов. Можно связать с релизом major версии

#### Valid
```feat(UIKIT-222,ui): Title```
```feat: Title```
```feat(UIKIT-222): Title```

#### Invalid
```feat(UIKIT222): Title```
```feat(unknown): Title```
