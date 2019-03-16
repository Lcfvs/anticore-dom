import call from 'anticore-core/Function/call'
import Event from '../prototypes/Event'

const method = Event.preventDefault

export default function prevent (event) {
  call(method, event)

  return event
}
