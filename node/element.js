import call from 'anticore-core/Function/call'
import Document from '../prototypes/Document'
import document from './document'

const method = Document.createElement
const methodNS = Document.createElementNS

export default function element (tag, ns = null) {
  if (ns === null) {
    return call(method, document(), tag)
  }

  return call(methodNS, ns, document(), tag)
}
