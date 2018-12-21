import kindOf from 'kind-of'
/**
 * Deep copy the given object by parsing a stringified version of the object
 *
 * @param {*} obj
 * @return {*}
 */
export function deepCopy (obj) {
  // return if obj is immutable value
  if (kindOf(obj) === null || kindOf(obj) !== 'object') {
    return obj
  }

  return JSON.parse(JSON.stringify(obj))
}
