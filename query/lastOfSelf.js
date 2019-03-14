import isNode from '../info/isNode'
import lastNode from './lastNode'

export default function lastOrSelf (node) {
  if (isNode(node)) {
    return lastNode(node)
      ? lastOrSelf(lastNode(node))
      : node
  }

  return null
}
