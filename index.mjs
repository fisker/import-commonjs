import * as module from 'module'

// eslint-disable-next-line node/no-deprecated-api
const createRequire = module.createRequire || module.createRequireFromPath

const require = createRequire(import.meta.url)

function load(url) {
  return require(url)
}

export default load
