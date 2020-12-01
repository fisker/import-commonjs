import * as module from 'module'

// eslint-disable-next-line node/no-deprecated-api
const createRequire = module.createRequire || module.createRequireFromPath

function load(url) {
  const require = createRequire(url)
  return (id) => require(id)
}

export default load
