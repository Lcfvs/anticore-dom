import on from './on.js'

export default function onLoad (target, listener, options) {
  return on('load', target, listener, options)
}
