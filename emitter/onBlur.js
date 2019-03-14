import on from './on'

export default function onBlur (target, listener, options) {
  return on('blur', target, listener, options)
}
