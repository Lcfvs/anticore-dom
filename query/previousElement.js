import hasParent from '../info/hasParent'

export default function previousElement (node) {
  if (hasParent(node)) {
    return node.previousElementSibling || null
  }

  return null
}
