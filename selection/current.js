import call from 'anticore-core/Function/call.js'
import global from 'anticore-core/global/index.js'

const window = global()
const method = window.getSelection

export default function current () {
  return call(method, global())
}
