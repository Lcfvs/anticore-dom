import forEach from 'anticore-core/Array/forEach.js'
import isObject from 'anticore-core/Object/isObject.js'
import keys from 'anticore-core/Object/keys.js'
import substring from 'anticore-core/String/substring.js'
import toLowerCase from 'anticore-core/String/toLowerCase.js'
import on from '../emitter/on.js'
import after from './after.js'
import append from './append.js'
import attr from './attr.js'
import before from './before.js'
import data from './data.js'
import style from './style.js'
import text from './text.js'

export default function update (element, config) {
  if (isObject(config)) {
    forEach(keys(config), name => {
      const value = config[name]

      if (name.substr(0, 2) === 'on') {
        on(toLowerCase(substring(name, 2)), element, value)
      } else if (name === 'style' && isObject(value)) {
        forEach(keys(value), name => style(element, name, value[name]))
      } else if (name === 'dataset' && isObject(value)) {
        forEach(keys(value), name => data(element, name, value[name]))
      } else if (name === 'text') {
        text(element, value)
      } else if (name === 'parent') {
        append(element, value)
      } else if (name === 'next') {
        before(element, value)
      } else if (name === 'prev') {
        after(element, value)
      } else {
        attr(element, name, value)
      }
    })
  }

  return element
}
