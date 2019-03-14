import empty from 'anticore-core/Object/empty'
import onKeyDown from './onKeyDown'

const config = empty({
  keys: ['ArrowUp', 'Up'],
  code: 38
})

export default function onUp (target, listener, options) {
  return onKeyDown(target, listener, empty(config, options || empty()))
}
