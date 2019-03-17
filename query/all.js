import includes from 'anticore-core/Array/includes'
import call from 'anticore-core/Function/call'
import isElement from '../info/isElement'
import isElementContainer from '../info/isElementContainer'
import document from '../node/document'
import Document from '../prototypes/Document'
import Element from '../prototypes/Element'
import DocumentFragment from '../prototypes/DocumentFragment'

const methods = [
  Document.querySelectorAll,
  Element.querySelectorAll,
  DocumentFragment.querySelectorAll
]


export default function all (selector, refNode) {
  if (!isElementContainer(refNode)) {
    refNode = document()
  }

  const method = refNode.querySelectorAll

  if (includes(methods, method)) {
    return call(method, refNode, selector)
  }

  return null
}
