import on from './on'

export default function onLoad (target, listener, options) {
  return on('load', target, listener, options)
}
