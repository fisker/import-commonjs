import test from 'ava'
import importCommonjs from './index.mjs'

const require = importCommonjs(import.meta.url)

test('main', (t) => {
  t.is(typeof importCommonjs, 'function')
  t.is(typeof require, 'function')
  t.is(typeof require.resolve, 'function')
  t.is(require('./fixtures/foo.cjs').name, 'foo')
  t.is(require('./fixtures/commonjs-package/name.cjs').name, 'commonjs-package')
  t.is(require('./fixtures/module-package/name.cjs').name, 'module-package')
})
