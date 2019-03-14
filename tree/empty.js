import isElement from '../info/isElement'
import text from './text'

export default function empty (node) {
  if (isElement(node)) {
    node.innerHTML = ''
  } else {
    text(node, '')
  }

  return node
}
