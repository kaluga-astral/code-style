module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:react-hooks/recommended',
    '@astral/eslint-config-base',
  ],

  plugins: ['jsx-a11y', 'react'],

  parserOptions: {
    project: ['tsconfig.json'],
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // отключает правила, декларирующие какой тип функции необходимо использовать для компонентов
    'react/function-component-definition': 'off',

    // запрещает делать spread пропсов в html тэги
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'ignore',
      },
    ],

    // указывает какие пропсы можно прокидывать в Link
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],

    // отключаем правила для prop-types
    'react/prop-types': 'off',

    // убираем обязательные default-props
    'react/require-default-props': 'off',

    // позволяет использовать только краткую нотацию для Fragment
    'react/jsx-fragments': ['error', 'syntax'],

    // указывает на то, что обработчики должны быть с префиксами handle, on
    'react/jsx-handler-names': [
      'error',
      {
        // отключены правила для handler потому, что оно не позволяет проксировать пропсы без handle - https://github.com/jsx-eslint/eslint-plugin-react/issues/2400
        eventHandlerPrefix: false,
        eventHandlerPropPrefix: 'on',
        // позволяет использовать правило в функциональных компонентах
        checkLocalVariables: true,
      },
    ],

    // включается проверка правил хуков
    'react-hooks/rules-of-hooks': 'error',

    // подсвечивает для зависимостей хука warning
    'react-hooks/exhaustive-deps': 'warn',

    // не дает указывать any в коде
    '@typescript-eslint/no-explicit-any': 'error',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
