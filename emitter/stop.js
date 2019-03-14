import call from 'anticore-core/Function/call'
import global from 'anticore-core/global'

const window = global()
const prototype = window.Event.prototype
const stopImmediatePropagation = prototype.stopImmediatePropagation
const stopPropagation = prototype.stopPropagation

export default function stop (event, immediate) {
  call(immediate ? stopImmediatePropagation : stopPropagation, event)

  return event
}
