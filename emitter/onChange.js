import empty from 'anticore-core/Object/empty'
import on from './on'

export default function onChange (target, listener, options) {
  return on('change', target, listener, options || empty())
}
