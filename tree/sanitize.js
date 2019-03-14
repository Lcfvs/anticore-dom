import forEach from 'anticore-core/Array/forEach'
import substring from 'anticore-core/String/substring'
import toLowerCase from 'anticore-core/String/toLowerCase'
import isElement from '../info/isElement'
import elements from '../query/elements'
import attr from './attr'

function forget (attribute) {
  if (toLowerCase(substring(attribute.name, 0, 2)) === 'on') {
    attr(attribute.ownerElement, attribute.name, null)
  }
}

export default function sanitize (node) {
  if (isElement(node) && node.attributes) {
    forEach(node.attributes, forget)
    forEach(elements(node), sanitize)
  }

  return node
}
