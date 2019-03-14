import empty from 'anticore-core/Object/empty'
import on from './on'

export default function onDragEnter (target, listener, options) {
  return on('dragenter', target, listener, options || empty())
}
