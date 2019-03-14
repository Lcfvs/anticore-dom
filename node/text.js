import call from 'anticore-core/Function/call'
import document from './document'

const method = document().prototype.createTextNode

export default function text (value) {
  return call(method, document(), value)
}
