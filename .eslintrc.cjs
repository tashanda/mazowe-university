module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'react-hooks'],
  extends: ['plugin:jsx-a11y/recommended'],
  settings: { react: { version: 'detect' } },
  env: { browser: true, node: true, es2021: true },
  ignorePatterns: ['.next/', 'node_modules/', 'public/'],
  rules: {},
};
