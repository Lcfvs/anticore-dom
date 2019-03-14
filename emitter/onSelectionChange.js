import on from './on'

export default function onSelectionChange (target, listener, options) {
  return on('selectionchange', target, listener, options)
}
