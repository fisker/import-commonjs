import * as module from 'node:module'

// eslint-disable-next-line no/no-deprecated-api
const createRequire = module.createRequire || module.createRequireFromPath

export default (url) => createRequire(url)
