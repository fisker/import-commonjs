// eslint-disable-next-line node/no-deprecated-api
import {createRequire, createRequireFromPath} from 'module'

const require = (createRequire || createRequireFromPath)(import.meta.url)

function load(url) {
  return require(url)
}

export default load
