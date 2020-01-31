import forEach from 'anticore-core/Array/forEach.js'
import isUndefined from 'anticore-core/undefined/isUndefined.js'
import isElement from '../info/isElement.js'
import elements from '../query/elements.js'
import sanitize from './sanitize.js'

export default function html (element, data) {
  if (isElement(element)) {
    if (!isUndefined(data)) {
      element.innerHTML = data
      forEach(elements(element), sanitize)

      return element
    }

    return element.innerHTML
  }

  return null
}
