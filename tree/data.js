import isBoolean from 'anticore-core/Boolean/isBoolean'
import isNull from 'anticore-core/null/isNull'
import isNumber from 'anticore-core/Number/isNumber'
import dashToCamel from 'anticore-core/String/dashToCamel'
import isString from 'anticore-core/String/isString'

export default function data (element, name, value) {
  name = dashToCamel(name)

  if (isString(value) || isNumber(value) || isBoolean(value)) {
    element.dataset[name] = value

    return element
  }

  if (isNull(value)) {
    delete element.dataset[name]

    return element
  }

  return element.dataset[name]
}
