import empty from 'anticore-core/Object/empty'
import onKeyDown from './onKeyDown'

const config = empty({
  keys: ['ArrowRight', 'Right'],
  code: 39
})

export default function onRight (target, listener, options) {
  return onKeyDown(target, listener, empty(config, options || empty()))
}
