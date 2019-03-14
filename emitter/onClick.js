import on from './on'

export default function onClick (target, listener, options) {
  return on('click', target, listener, options)
}
