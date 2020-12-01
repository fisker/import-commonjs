# import-commonjs

[![Build Status][github_actions_badge]][github_actions_link]
[![Coverage][coveralls_badge]][coveralls_link]
[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]

[github_actions_badge]: https://img.shields.io/github/workflow/status/fisker/import-commonjs/CI/master?style=flat-square
[github_actions_link]: https://github.com/fisker/import-commonjs/actions?query=branch%3Amaster
[coveralls_badge]: https://img.shields.io/coveralls/github/fisker/import-commonjs/master?style=flat-square
[coveralls_link]: https://coveralls.io/github/fisker/import-commonjs?branch=master
[license_badge]: https://img.shields.io/npm/l/import-commonjs.svg?style=flat-square
[license_link]: https://github.com/fisker/import-commonjs/blob/master/license
[package_version_badge]: https://img.shields.io/npm/v/import-commonjs.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/import-commonjs

> Import ECMAScript modules in the safe way

## Install

```bash
yarn add import-commonjs

# or

npm install import-commonjs
```

## Usage

```js
import importCommonjs from 'import-commonjs'
const require = importCommonjs(import.meta.url)
console.log(require('./foo.cjs'))
//=> { name: 'foo' }
```

## API

### importCommonjs(url)

Filename to be used to construct the require function. Must be a file URL object, file URL string, or absolute path string.

Returns [`require` function](https://nodejs.org/api/modules.html#modules_require_id).

#### `url`

Type: `string`

## Related

- [`import-esm`](https://github.com/fisker/import-esm) import `.mjs` file.
