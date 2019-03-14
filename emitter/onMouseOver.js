import empty from 'anticore-core/Object/empty'
import on from './on'

export default function onMouseOver (target, listener, options) {
  return on('mouseover', target, listener, options || empty())
}
