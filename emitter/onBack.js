import empty from 'anticore-core/Object/empty'
import onKeyDown from './onKeyDown'

const config = empty({
  keys: ['Backspace'],
  code: 8
})

export default function onBack (target, listener, options) {
  return onKeyDown(target, listener, empty(config, options || empty()))
}
