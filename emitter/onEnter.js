import empty from 'anticore-core/Object/empty'
import onKeyDown from './onKeyDown'

const config = empty({
  keys: ['Enter'],
  code: 13
})

export default function onEnter (target, listener, options) {
  return onKeyDown(target, listener, empty(config, options || empty()))
}
