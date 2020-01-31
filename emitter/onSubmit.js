import on from './on.js'

export default function onSubmit (target, listener, options) {
  return on('submit', target, listener, options)
}
