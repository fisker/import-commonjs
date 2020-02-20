const test = require('ava')
const importCommonjs = require('./index.cjs')

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
