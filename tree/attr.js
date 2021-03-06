import isBoolean from 'anticore-core/Boolean/isBoolean'
import call from 'anticore-core/Function/call'
import isNull from 'anticore-core/null/isNull'
import isNumber from 'anticore-core/Number/isNumber'
import camelToDash from 'anticore-core/String/camelToDash'
import isString from 'anticore-core/String/isString'
import Element from '../prototypes/Element'

const getAttribute = Element.getAttribute
const setAttribute = Element.setAttribute
const removeAttribute = Element.removeAttribute

export default function attr (element, name, value) {
  name = camelToDash(name)

  if (isString(value) || isNumber(value) || isBoolean(value)) {
    call(setAttribute, element, name, value)

    return element
  }

  if (isNull(value)) {
    call(removeAttribute, element, name)

    return element
  }

  return call(getAttribute, element, name)
}
