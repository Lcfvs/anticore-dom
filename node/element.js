import call from 'anticore-core/Function/call'
import Document from '../prototypes/Document'
import document from './document'

const method = Document.createElement

export default function element (tag) {
  return call(method, document(), tag)
}
