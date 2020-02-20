import test from 'ava'
import importCommonjs from './index.js'

test('main', t => {
  t.is(typeof importCommonjs, 'function')
  t.is(importCommonjs('./fixtures/foo.cjs').name, 'foo')
  t.is(
    importCommonjs('./fixtures/commonjs-package/name.cjs').name,
    'commonjs-package'
  )
  t.is(
    importCommonjs('./fixtures/module-package/name.cjs').name,
    'module-package'
  )
})
