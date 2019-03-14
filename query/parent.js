import hasParent from '../info/hasParent'

export default function parent (node) {
  if (hasParent(node)) {
    return node.parentNode
  }

  return null
}
