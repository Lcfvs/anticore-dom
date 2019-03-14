import empty from 'anticore-core/Object/empty'
import on from './on'

export default function onInput (target, listener, options) {
  return on('input', target, listener, options || empty())
}
