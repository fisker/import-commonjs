/*!
 * config file for `eslint`
 *
 * update: wget -O .eslintrc.js https://git.io/fjVjK
 * document: https://eslint.org/docs/user-guide/configuring
 */

/* @fisker/eslint-config https://git.io/fjOeH */

module.exports = {
  root: true,
  env: {},
  parserOptions: {},
  extends: ['@fisker'],
  settings: {},
  rules: {
    'unicorn/import-index': 'off',
    'import/extensions': 'off',
    'node/no-unsupported-features/node-builtins': 'off',;
    strict: 'off',
  },
  plugins: [],
  globals: {},
  overrides: [],
}
