import on from './on.js'

export default function onMouseOut (target, listener, options) {
  return on('mouseout', target, listener, options)
}
