import * as module from 'module'

// eslint-disable-next-line node/no-deprecated-api
const createRequire = module.createRequire || module.createRequireFromPath

export default (url) => createRequire(url)
