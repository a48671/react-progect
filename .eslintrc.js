module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    '@typescript-eslint/eslint-plugin',
    'i18next'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'max-len': ['error', { ignoreComments: true, code: 150 }],
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'i18next/no-literal-string': ['error', { onlyMarkup: true }],
    'comma-dangle': 'off',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  globals: {
    __IS_DEV__: true,
    React: true,
    JSX: true
  }
}
