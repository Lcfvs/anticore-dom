import one from '../query/one.js'
import text from '../tree/text.js'
import isElement from './isElement.js'

export default function isEmpty (node) {
  return (!isElement(node) || !one('*', node)) &&
    !(text(node) || '').trim().length
}
