import on from './on.js'

export default function onChange (target, listener, options) {
  return on('change', target, listener, options)
}
