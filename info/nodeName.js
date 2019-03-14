import toLowerCase from 'anticore-core/String/toLowerCase'
import isNode from './isNode'

export default function nodeName (node) {
  if (isNode(node)) {
    return toLowerCase(node.nodeName)
  }
}
