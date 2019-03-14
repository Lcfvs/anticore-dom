import empty from 'anticore-core/Object/empty'
import onKeyDown from './onKeyDown'

const config = empty({
  keys: ['Delete', 'Del'],
  code: 46
})

export default function onDelete (target, listener, options = empty()) {
  return onKeyDown(target, listener, empty(config, options || empty()))
}
