import isNode from '../info/isNode'
import firstNode from './firstNode'

export default function firstOrSelf (node) {
  if (isNode(node)) {
    return firstNode(node)
      ? firstOrSelf(firstNode(node))
      : node
  }

  return null
}
