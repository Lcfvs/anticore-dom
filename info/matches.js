import all from '../query/all'
import parent from '../query/parent'
import hasParent from './hasParent'
import isText from './isText'

export default function matches (selector, node) {
  if (!hasParent(node)) {
    return false
  }

  const results = all(selector, node.document || node.ownerDocument)
  let i = results.length

  if (isText(node)) {
    node = parent(node)
  }

  while (--i >= 0 && results.item(i) !== node) {}

  return i > -1
}
