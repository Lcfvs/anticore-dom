import call from 'anticore-core/Function/call.js'
import Event from '../prototypes/Event.js'

const method = Event.preventDefault

export default function prevent (event) {
  call(method, event)

  return event
}
