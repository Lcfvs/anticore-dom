import call from 'anticore-core/Function/call'
import Document from '../prototypes/Document'
import document from './document'

const method = Document.createTextNode

export default function text (value) {
  return call(method, document(), value)
}
