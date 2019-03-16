import call from 'anticore-core/Function/call'
import isElementContainer from '../info/isElementContainer'
import document from '../node/document'
import Document from '../prototypes/Document'

const method = Document.querySelectorAll

export default function all (selector, refNode) {
  if (!isElementContainer(refNode)) {
    refNode = document()
  }

  return call(method, refNode, selector)
}
