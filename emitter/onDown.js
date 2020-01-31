import empty from 'anticore-core/Object/empty.js'
import onKeyDown from './onKeyDown.js'

const config = empty({
  keys: ['ArrowDown', 'Down'],
  code: 40
})

export default function onDown (target, listener, options) {
  return onKeyDown(target, listener, empty(config, options || empty()))
}
