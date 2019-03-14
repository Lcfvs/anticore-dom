import empty from 'anticore-core/Object/empty'
import on from './on'

export default function onMessage (target, listener, options) {
  return on('message', target, listener, options || empty())
}
