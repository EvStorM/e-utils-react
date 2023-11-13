/**
 * 判断是否为空
 */
export const isEmpty = (value: any) => {
  switch (typeof value) {
    case 'undefined':
      return true
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true
      break
    case 'boolean':
      if (!value) return true
      break
    case 'number':
      if (0 === value || isNaN(value)) return true
      break
    case 'object':
      if (null === value || value.length === 0) return true
      for (var i in value) {
        return false
      }
      return true
  }
  return false
}