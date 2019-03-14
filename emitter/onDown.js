import empty from 'anticore-core/Object/empty'
import onKeyDown from './onKeyDown'

const config = empty({
  keys: ['ArrowDown', 'Down'],
  code: 40
})

export default function onDown (target, listener, options) {
  return onKeyDown(target, listener, empty(config, options || empty()))
}
