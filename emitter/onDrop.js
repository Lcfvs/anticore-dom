import empty from 'anticore-core/Object/empty'
import on from './on'

export default function onDrop (target, listener, options) {
  return on('drop', target, listener, options || empty())
}
