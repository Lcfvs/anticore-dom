import empty from 'anticore-core/Object/empty.js'
import onKeyDown from './onKeyDown.js'

const config = empty({
  keys: ['ArrowLeft', 'Left'],
  code: 37
})

export default function onLeft (target, listener, options) {
  return onKeyDown(target, listener, empty(config, options || empty()))
}
