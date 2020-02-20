// eslint-disable-next-line node/no-unsupported-features/node-builtins
import {createRequire} from 'module'

const require = createRequire(import.meta.url)

function load(url) {
  return require(url)
}

export default load
