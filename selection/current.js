import call from 'anticore-core/Function/call'
import global from 'anticore-core/global'

const window = global()
const method = window.getSelection

export default function current () {
  return call(method, global())
}
