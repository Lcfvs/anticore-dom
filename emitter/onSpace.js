import empty from 'anticore-core/Object/empty'
import onKeyDown from './onKeyDown'

const config = empty({
  keys: [' ', 'Spacebar'],
  code: 32
})

export default function onSpace (target, listener, options) {
  return onKeyDown(target, listener, empty(config, options || empty()))
}
