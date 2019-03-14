import empty from 'anticore-core/Object/empty'
import on from './on'

export default function onFocus (target, listener, options) {
  return on('focus', target, listener, options || empty())
}
