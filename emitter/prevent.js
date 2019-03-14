import call from 'anticore-core/Function/call'
import global from 'anticore-core/global'

const window = global()
const method = window.Event.prototype.preventDefault

export default function prevent (event) {
  call(method, event)

  return event
}
