import empty from 'anticore-core/Object/empty.js'
import onKeyDown from './onKeyDown.js'

const config = empty({
  keys: ['Delete', 'Del'],
  code: 46
})

export default function onDelete (target, listener, options = empty()) {
  return onKeyDown(target, listener, empty(config, options || empty()))
}
