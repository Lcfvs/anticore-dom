import hasParent from '../info/hasParent'

export default function nextNode (node) {
  if (hasParent(node)) {
    return node.nextSibling || null
  }

  return null
}
