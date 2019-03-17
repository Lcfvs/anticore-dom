import forEach from 'anticore-core/Array/forEach'
import isUndefined from 'anticore-core/undefined/isUndefined'
import isElement from '../info/isElement'
import elements from '../query/elements'
import append from './append'
import empty from './empty'
import fromString from './fromString'
import sanitize from './sanitize'

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
