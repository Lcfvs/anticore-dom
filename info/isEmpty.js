import one from '../query/one'
import text from '../tree/text'
import isElement from './isElement'

export default function isEmpty (node) {
  return (!isElement(node) || !one('*', node)) &&
    !(text(node) || '').trim().length
}
