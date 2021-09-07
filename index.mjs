import * as module from 'node:module'

// eslint-disable-next-line node/no-deprecated-api
const createRequire = module.createRequire || module.createRequireFromPath

export default (url) => createRequire(url)
