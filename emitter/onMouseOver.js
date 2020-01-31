import on from './on.js'

export default function onMouseOver (target, listener, options) {
  return on('mouseover', target, listener, options)
}
