import empty from 'anticore-core/Object/empty'
import on from './on'

export default function onBlur (target, listener, options) {
  return on('blur', target, listener, options || empty())
}
