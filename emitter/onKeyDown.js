import empty from 'anticore-core/Object/empty'
import on from './on'

export default function onKeyDown (target, listener, options) {
  return on('keydown', target, listener, options || empty())
}
