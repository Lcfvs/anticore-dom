import hasParent from '../info/hasParent'

export default function previousNode (node) {
  if (hasParent(node)) {
    return node.previousSibling || null
  }

  return null
}
