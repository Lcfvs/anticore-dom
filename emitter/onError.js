import empty from 'anticore-core/Object/empty'
import on from './on'

export default function onError (target, listener, options) {
  return on('error', target, listener, options || empty())
}
