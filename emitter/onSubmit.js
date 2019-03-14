import empty from 'anticore-core/Object/empty'
import on from './on'

export default function onSubmit (target, listener, options) {
  return on('submit', target, listener, options || empty())
}
