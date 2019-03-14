import call from 'anticore-core/Function/call'
import document from './document'

const method = document().prototype.createElement

export default function element (tag) {
  return call(method, document(), tag)
}
