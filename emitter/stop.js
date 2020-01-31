import call from 'anticore-core/Function/call.js'
import Event from '../prototypes/Event.js'

const stopImmediatePropagation = Event.stopImmediatePropagation
const stopPropagation = Event.stopPropagation

export default function stop (event, immediate) {
  call(immediate ? stopImmediatePropagation : stopPropagation, event)

  return event
}
