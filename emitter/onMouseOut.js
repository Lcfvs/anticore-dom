import empty from 'anticore-core/Object/empty'
import on from './on'

export default function onMouseOut (target, listener, options) {
  return on('mouseout', target, listener, options || empty())
}
