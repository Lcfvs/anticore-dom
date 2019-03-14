import empty from 'anticore-core/Object/empty'
import on from './on'

export default function onClick (target, listener, options) {
  return on('click', target, listener, options || empty())
}
